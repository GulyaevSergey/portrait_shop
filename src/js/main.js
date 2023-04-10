import { modal, sliders, forms } from "./modules/index";

document.addEventListener("DOMContentLoaded", () => {
    modal();
    forms();
    sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical")
});
