import {
    modal,
    sliders,
    mask,
    checkTextInputs,
    forms,
    showMoreStyles,
    calc,
} from "./modules";

document.addEventListener("DOMContentLoaded", () => {
    modal();
    forms();
    sliders(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles(".button-styles", "#styles .row");
    showMoreStyles(".button-styles", ".styles-2");
    calc({
        size: "#size",
        material: "#material",
        options: "#options",
        promocode: ".promocode",
        result: ".calc-price",
    });
});
