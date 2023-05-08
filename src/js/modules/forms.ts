import { checkNumInputs, postData } from "./index";

const forms = (): void => {
    const allForms: NodeListOf<HTMLFormElement> = document.querySelectorAll("form");
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    const upload: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    checkNumInputs('input[name="phone"]');

    type Status = {loading: string, success: string, failure: string, spinner: string, ok: string, fail: string}

    const messages: Status = { 
        loading: "Загрузка...",
        success: "Спасибо, скоро с вами свяжуться",
        failure: "Что-то пошло не так, попробуйте через 5 минут",
        spinner: "src/assets/img/spinner.gif",
        ok: "src/assets/img/ok.png",
        fail: "src/assets/img/fail.png",
    };

    const clearInputs = () => {
        inputs.forEach((item) => (item.value = ""));
        upload.forEach((item) => {
            if (!item.previousElementSibling){
                return
            }
            item.previousElementSibling .textContent = "Файл не выбран";
        });
    };

    upload.forEach((item) => {
        item.addEventListener("input", () => {
            if(!item.files || !item.previousElementSibling){
                return
            }

            let dots: string;
            const arr = item.files[0].name.split(".");
            arr[0].length > 6 ? (dots = "...") : (dots = ".");
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    allForms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("div");
            statusMessage.classList.add("status");

            const parentForm = form.parentNode

            if(!parentForm){
                return
            }

            parentForm.appendChild(statusMessage);

            form.classList.add("animated", "fadeOutUp");
            setTimeout(() => {
                form.style.display = "none";
            }, 400);

            const textMessage = document.createElement("div");
            textMessage.textContent = messages.loading;
            statusMessage.appendChild(textMessage);

            const statusImg = document.createElement("img");
            statusImg.setAttribute("src", messages.spinner);
            statusImg.classList.add("animated", "fadeInUp");
            statusMessage.appendChild(statusImg);

            const formData = new FormData(form);

            const jsonObject = {};

            for (const [key, value] of formData.entries()) {
                jsonObject[key] = value;
            }

            postData(
                "https://simple-server-cumz.onrender.com/api/data",
                jsonObject
            )
                .then((res) => {
                    statusImg.setAttribute("src", messages.ok);
                    textMessage.textContent = messages.success;
                })
                .catch(() => {
                    statusImg.setAttribute("src", messages.fail);
                    textMessage.textContent = messages.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = "block";
                        form.classList.remove("fadeOutUp");
                        form.classList.add("fadeInUp");
                    }, 5000);
                });
            if (form.getAttribute("data-calc") === "end") {
                for (let key in form) {
                    formData.append(key, form[key]);
                }
            }
        });
    });
};

export { forms };
