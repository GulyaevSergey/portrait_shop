export const burger = (menuSelector: string, burgerSelector: string): void => {
    const menuElement: HTMLElement | null = document.querySelector(menuSelector);
    const burgerElement: HTMLElement | null = document.querySelector(burgerSelector);
    const BREACKPOINT = 993;

    if(!menuElement){
        return
    }
    
    menuElement.style.display = "none";

        burgerElement?.addEventListener("click", () => {
            if (
                menuElement.style.display === "none" &&
                window.screen.availWidth < BREACKPOINT
            ) {
                menuElement.style.display = "block";
            } else {
                menuElement.style.display = "none"; 
            }
        });
    
        window.addEventListener("resize", () => {
            window.screen.availWidth >= BREACKPOINT
                ? (menuElement.style.display = "none")
                : (menuElement.style.display = "block");
        });

};
