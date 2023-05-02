const checkNumInputs = (selector: string) => {
    const numInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);

    numInputs.forEach((input) => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/, "");
        });
    });
};

export { checkNumInputs };
