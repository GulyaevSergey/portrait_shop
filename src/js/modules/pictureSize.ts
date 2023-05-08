export const pictureSize = (imgSelector: string): void => {
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(imgSelector);

    const showImg = (block: HTMLElement) => {
        const img = block.querySelector("img");
        if(!img){
            return
        }

        img.src = img.src.slice(0, -4) + "-1.png";

        const blocks: NodeListOf<HTMLElement> = block.querySelectorAll("p:not(.size-hit")
        blocks.forEach((p) => {
            p.style.display = "none";
        });
    };

    const hideImg = (block: HTMLElement) => {
        const img = block.querySelector("img");
        if(!img){
            return
        }
        img.src = img.src.slice(0, -6) + ".png";

        const paragraph: NodeListOf<HTMLElement> = block.querySelectorAll("p:not(.size-hit")
        paragraph.forEach((p) => {
            p.style.display = "none";
        });
    };

    blocks.forEach((block) => {
        block.addEventListener("mouseover", () => {
            showImg(block);
        });
        block.addEventListener("mouseout", () => {
            hideImg(block);
        });
    });
};
