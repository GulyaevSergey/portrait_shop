import { modal, sliders } from "./modules/index";

document.addEventListener("DOMContentLoaded", () => {
    modal();
    sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical")
});
