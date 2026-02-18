import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: true,
        offset: isMobile ? 0 : 120,
    });
}
