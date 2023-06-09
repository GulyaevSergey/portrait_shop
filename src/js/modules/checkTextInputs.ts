const checkTextInputs = (selector: string) => {
    const txtInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);
    txtInputs.forEach((input) => {
        input.addEventListener("keypress", (e) => {
            if (e.key.match(/[^а-яё 0-9]/gi)) {
                e.preventDefault();
            }
        });
    });
};

export { checkTextInputs };
