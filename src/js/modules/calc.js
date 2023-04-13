const calcSum = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round(
            +sizeBlock.value * +materialBlock.value + +optionsBlock.value
        );
        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent =
                "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };
    console.log(sum);
    sizeBlock.addEventListener("change", calcFunc);
    materialBlock.addEventListener("change", calcFunc);
    optionsBlock.addEventListener("change", calcFunc);
    promocodeBlock.addEventListener("input", calcFunc);

    console.log(sum);
};

const calc = (parametrs) => {
    return calcSum(
        parametrs.size,
        parametrs.material,
        parametrs.options,
        parametrs.promocode,
        parametrs.result
    );
};

export { calc };
