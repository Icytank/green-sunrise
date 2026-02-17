import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
    AOS.init({
        duration: 1000,
        easing: "ease-out-cubic",
        once: true,
        offset: 120,
    });
}
