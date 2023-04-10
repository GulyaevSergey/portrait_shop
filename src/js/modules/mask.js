const mask = (selector) => {
    const setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    const createMask = (event) => {
        const context = event.target;
        const matrix = "+7 (___) ___ __ __";
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = context.value.replace(/\D/g, "");

        if (def.length >= val.length) {
            val = def;
        }

        context.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                ? ""
                : a;
        });

        if (event.type === "blue") {
            if (context.value.length === 2) {
                context.value = "";
            } else {
                setCursorPosition(context.value.length, this);
            }
        }
    };

    const inputs = document.querySelectorAll(selector);

    inputs.forEach((input) => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);
        input.addEventListener("blur", createMask);
    });
};
export { mask };
