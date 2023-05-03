export const drop = (): void => {
    const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("[name='upload']");

    const preventDefaults = (e: Event): void => {
        e.preventDefault();
        e.stopPropagation();
    };

    ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName: string) => {
        fileInputs.forEach((input: HTMLInputElement): void => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    const highLight = (item: HTMLElement | null): void => { 
        if (!item){
            return
        }

        const closest: HTMLElement | null = item.closest(".file_upload")
        if (closest){
            closest.style.border = "5px solid yellow";
            closest.style.backgroundColor = "rgba(0,0,0, .7";
        }
    };

    const unhighLight = (item: HTMLElement | null): void => {
        if(!item){
            return
        }

        const closest: HTMLElement | null = item.closest(".file_upload")

        if (closest){
            closest.style.border = "none";

            item.closest(".calc_form") ? closest.style.backgroundColor = "#fff" : closest.style.backgroundColor = "#ededed";
        }
    };

    ["dragenter", "dragover"].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });

    ["dragleave", "drop"].forEach((eventName) => {
        fileInputs.forEach((input) => {
            input.addEventListener(eventName, () => unhighLight(input), false);
        });
    });

    fileInputs.forEach((input) => {
        input.addEventListener("drop", (e) => {
            const dataTransfer = e.dataTransfer
            if(!dataTransfer){
                return
            }

            const file = e.dataTransfer.files[0];
            const [fileName, fileExt] = file.name.split(".");
            const dots = fileName.length > 6 ? "..." : ".";
            const name = fileName.substring(0, 6) + dots + fileExt;

            const previous = input.previousElementSibling
            if(!previous){
                return
            }
            input.previousElementSibling.textContent = name;
        });
    });
};
