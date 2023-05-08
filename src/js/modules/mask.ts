const mask = (selector: string) => {
    const setCursorPosition = (pos: number, elem) => {
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

    const createMask = (e: Event) => {

        const context: EventTarget | null = e.target;
        if (!context) {
            return;
        }

        if (context instanceof HTMLInputElement){
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
    
            if (e.type === "blue") {
                if (context.value.length === 2) {
                    context.value = "";
                } else {
                    setCursorPosition(context.value.length, this);
    
                }
            }
        }

        
    };

    const inputs: NodeListOf<HTMLFormElement> = document.querySelectorAll(selector);

    inputs.forEach((input) => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);
        input.addEventListener("blur", createMask);
    });
};
export { mask };
