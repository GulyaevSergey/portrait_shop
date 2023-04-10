import { modal, sliders, mask, checkTextInputs } from "./modules/index";

document.addEventListener("DOMContentLoaded", () => {
    modal();
    sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
});
