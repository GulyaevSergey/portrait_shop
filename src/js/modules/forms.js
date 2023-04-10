import { checkNumInputs } from "./checkNumInputs";

const forms = () => {
    const allForms = document.querySelectorAll("form");
    const inputs = document.querySelectorAll("input");
    const upload = document.querySelectorAll('[name="upload"]');

    checkNumInputs('input[name="phone"]');

    const messages = {
        loading: "Загрузка...",
        success: "Спасибо, скоро с вами свяжуться",
        failure: "Что-то пошло не так, попробуйте через 5 минут",
        spinner: "src/assets/img/spinner.gif",
        ok: "src/assets/img/ok.png",
        fail: "src/assets/img/fail.png",
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach((item) => (item.value = ""));
        upload.forEach((item) => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    };

    upload.forEach((item) => {
        item.addEventListener("input", () => {
            let dots;
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
            form.parentNode.appendChild(statusMessage);

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
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
        });
    });
};

export { forms };
