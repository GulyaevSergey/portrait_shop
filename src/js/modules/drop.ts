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

        item.closest<HTMLElement>(".file_upload")!.style.border = "5px solid yellow";
        item.closest<HTMLElement>(".file_upload")!.style.backgroundColor = "rgba(0,0,0, .7";
    };

    const unhighLight = (item: HTMLElement | null): void => {
        item.closest(".file_upload").style.border = "none";
        if (item.closest(".calc_form")) {
            item.closest(".file_upload").style.backgroundColor = "#fff";
        } else {
            item.closest(".file_upload").style.backgroundColor = "#ededed";
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
            input.files = e.dataTransfer.files;
            let dots: string;
            const arr = input.files[0].name.split(".");
            arr[0].length > 6 ? (dots = "...") : (dots = ".");
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};
