const calcSum = (size: string, material: string, options: string, promocode: string, result: string): void => {
    const sizeBlock: HTMLInputElement  | null = document.querySelector(size);
    const materialBlock: HTMLInputElement  | null = document.querySelector(material);
    const optionsBlock: HTMLInputElement  | null = document.querySelector(options);
    const promocodeBlock: HTMLInputElement  | null = document.querySelector(promocode);
    const resultBlock: HTMLInputElement | null = document.querySelector(result);

    let sum = 0;

    if(!sizeBlock || !materialBlock || !optionsBlock || !promocodeBlock || !resultBlock){
        return
    }

    const calcFunc = () => {
        sum = Math.round(
            +sizeBlock.value * +materialBlock.value + +optionsBlock.value
        );
        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent =
                "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7).toString();
        } else {
            resultBlock.textContent = sum.toString();
        }
    };
    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);
};

const calc = (parametrs: {size: string, material: string, options: string, promocode: string, result: string}) => {
    return calcSum(
        parametrs.size,
        parametrs.material,
        parametrs.options,
        parametrs.promocode,
        parametrs.result
    );
};

export { calc };
