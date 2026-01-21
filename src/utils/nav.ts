// Astro:page-load wrapper for View Transitions purposes
document.addEventListener("astro:page-load", () => {
	// Make the script controlling the <Hamburger /> mobile menu component available after navigating to a new page.

	(() => {
		// Configuration
		const CONFIG = {
			BREAKPOINTS: {
				MOBILE: 1023.5,
			},
			SELECTORS: {
				body: "body",
				navigation: "#cs-navigation",
				hamburger: "#cs-navigation .cs-toggle",
				menuWrapper: "#cs-ul-wrapper",
				dropdownToggle: ".cs-dropdown-toggle",
				dropdown: ".cs-dropdown",
				dropdownMenu: ".cs-drop-ul",
				navButton: ".cs-nav-button",
				darkModeToggle: "#dark-mode-toggle",
			},
			CLASSES: {
				active: "cs-active",
				menuOpen: "cs-open",
			},
		};

		// DOM Elements
		const elements = {
			body: document.querySelector(CONFIG.SELECTORS.body),
			navigation: document.querySelector(CONFIG.SELECTORS.navigation),
			hamburger: document.querySelector(CONFIG.SELECTORS.hamburger),
			menuWrapper: document.querySelector(CONFIG.SELECTORS.menuWrapper),
			navButton: document.querySelector(CONFIG.SELECTORS.navButton),
			darkModeToggle: document.querySelector(CONFIG.SELECTORS.darkModeToggle),
		};

		// Utilities
		const isMobile = () => window.matchMedia(`(max-width: ${CONFIG.BREAKPOINTS.MOBILE}px)`).matches;

		const toggleAttribute = (element: Element | null, attribute: string, value1 = "true", value2 = "false") => {
			if (!element) return;
			const current = element.getAttribute(attribute);
			element.setAttribute(attribute, current === value1 ? value2 : value1);
		};

		const toggleInert = (element: Element | null) => element && ((element as any).inert = !(element as any).inert);

		// Dropdown Management
		const dropdownManager = {
			close(dropdown: Element | null, shouldFocus = false) {
				if (!dropdown || !dropdown.classList.contains(CONFIG.CLASSES.active)) return false;

				dropdown.classList.remove(CONFIG.CLASSES.active);
				const button = dropdown.querySelector(CONFIG.SELECTORS.dropdownToggle) as HTMLElement | null;
				const menu = dropdown.querySelector(CONFIG.SELECTORS.dropdownMenu);

				if (button) {
					button.setAttribute("aria-expanded", "false");
					shouldFocus && button.focus();
				}

				if (menu) {
					(menu as any).inert = true;
				}

				return true;
			},

			toggle(element: Element) {
				element.classList.toggle(CONFIG.CLASSES.active);
				const button = element.querySelector(CONFIG.SELECTORS.dropdownToggle);
				const menu = element.querySelector(CONFIG.SELECTORS.dropdownMenu);

				button && toggleAttribute(button, "aria-expanded");
				menu && toggleInert(menu);
			},

			closeAll() {
				if (!elements.navigation) return false;
				let closed = false;

				elements.navigation.querySelectorAll(`${CONFIG.SELECTORS.dropdown}.${CONFIG.CLASSES.active}`).forEach((dropdown) => {
					this.close(dropdown, true);
					closed = true;
				});

				return closed;
			},
		};

		// Menu Management
		const menuManager = {
			toggle() {
				if (!elements.hamburger || !elements.navigation) return;

				const isClosing = elements.navigation.classList.contains(CONFIG.CLASSES.active);

				[elements.hamburger, elements.navigation].forEach((el) => el.classList.toggle(CONFIG.CLASSES.active));
				elements.body?.classList.toggle(CONFIG.CLASSES.menuOpen);
				toggleAttribute(elements.hamburger, "aria-expanded");

				// Only manage inert state on mobile devices
				if (elements.menuWrapper && isMobile()) {
					toggleInert(elements.menuWrapper);
				}

				// When closing the mobile menu, also close any open dropdowns
				isClosing && dropdownManager.closeAll();
			},
		};

		// Keyboard Management
		const keyboardManager = {
			handleEscape() {
				if (!elements.navigation) return;

				// Close any open dropdown menus first
				const dropdownsClosed = dropdownManager.closeAll();
				if (dropdownsClosed) return;

				// Then close hamburger menu if open
				if (elements.hamburger && elements.hamburger.classList.contains(CONFIG.CLASSES.active)) {
					menuManager.toggle();
					(elements.hamburger as HTMLElement).focus();
				}
			},
		};

		// Event Management
		const eventManager = {
			handleDropdownClick(event: Event) {
				if (!isMobile()) return;

				const target = event.target as HTMLElement;
				const button = target.closest(CONFIG.SELECTORS.dropdownToggle);
				if (!button) return;

				event.preventDefault();
				const dropdown = button.closest(CONFIG.SELECTORS.dropdown);
				if (dropdown) {
					dropdownManager.toggle(dropdown);
				}
			},

			handleDropdownKeydown(event: KeyboardEvent) {
				if (event.key !== "Enter" && event.key !== " ") return;

				const target = event.target as HTMLElement;
				const button = target.closest(CONFIG.SELECTORS.dropdownToggle);
				if (!button) return;

				event.preventDefault();
				const dropdown = button.closest(CONFIG.SELECTORS.dropdown);
				if (dropdown) {
					dropdownManager.toggle(dropdown);
				}
			},

			handleFocusOut(event: FocusEvent) {
				setTimeout(() => {
					if (!event.relatedTarget) return;

					const target = event.target as HTMLElement;
					const dropdown = target.closest(CONFIG.SELECTORS.dropdown);
					if (dropdown?.classList.contains(CONFIG.CLASSES.active) && !dropdown.contains(event.relatedTarget as Node)) {
						dropdownManager.close(dropdown);
					}
				}, 10);
			},

			handleMobileFocus(event: FocusEvent) {
				if (!isMobile() || !elements.navigation?.classList.contains(CONFIG.CLASSES.active)) return;
				const target = event.target as Node;
				if (elements.menuWrapper?.contains(target) || elements.hamburger?.contains(target)) return;

				menuManager.toggle();
			},

			handleDropdownHover(event: MouseEvent) {
				if (isMobile()) return; // Only apply hover behavior on desktop

				const target = event.target as HTMLElement;
				const dropdown = target.closest(CONFIG.SELECTORS.dropdown);
				if (!dropdown) return;

				const menu = dropdown.querySelector(CONFIG.SELECTORS.dropdownMenu);
				if (!menu) return;

				if (event.type === "mouseenter") {
					(menu as any).inert = false;
				} else if (event.type === "mouseleave") {
					// Only set inert=true if mouse is leaving the entire dropdown area
					// Use setTimeout to allow mouseleave/mouseenter events to complete
					setTimeout(() => {
						// Check if mouse is still over the dropdown or its menu
						if (!dropdown.matches(":hover")) {
							(menu as any).inert = true;
						}
					}, 1);
				}
			},
		};

		// Initialization & Setup
		const init = {
			inertState() {
				if (!elements.menuWrapper) return;

				// On mobile, menu starts closed, so set inert=true
				// On desktop, menu is always visible, so set inert=false
				(elements.menuWrapper as any).inert = isMobile();

				// Initialize dropdown menus - they start closed, so inert=true on all devices
				if (elements.navigation) {
					const dropdownMenus = elements.navigation.querySelectorAll(CONFIG.SELECTORS.dropdownMenu);
					dropdownMenus.forEach((dropdown) => {
						(dropdown as any).inert = true;
					});
				}
			},

			eventListeners() {
				if (!elements.hamburger || !elements.navigation) return;

				// Hamburger menu
				elements.hamburger.addEventListener("click", menuManager.toggle);
				elements.navigation.addEventListener("click", (e) => {
					if (e.target === elements.navigation && elements.navigation!.classList.contains(CONFIG.CLASSES.active)) {
						menuManager.toggle();
					}
				});

				// Dropdown delegation
				elements.navigation.addEventListener("click", eventManager.handleDropdownClick as EventListener);
				elements.navigation.addEventListener("keydown", eventManager.handleDropdownKeydown as EventListener);
				elements.navigation.addEventListener("focusout", eventManager.handleFocusOut as EventListener);

				// Desktop hover listeners for inert management
				elements.navigation.addEventListener("mouseenter", eventManager.handleDropdownHover as EventListener, true);
				elements.navigation.addEventListener("mouseleave", eventManager.handleDropdownHover as EventListener, true);

				// Global events
				document.addEventListener("keydown", (e) => e.key === "Escape" && keyboardManager.handleEscape());
				document.addEventListener("focusin", eventManager.handleMobileFocus as EventListener);

				// Resize handling
				window.addEventListener("resize", () => {
					this.inertState();
					if (!isMobile() && elements.navigation!.classList.contains(CONFIG.CLASSES.active)) {
						menuManager.toggle();
					}
				});
			},
		};

		// Initialize navigation system
		init.inertState();
		init.eventListeners();
	})();
});
