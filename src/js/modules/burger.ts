export const burger = (menuSelector: string, burgerSelector: string): void => {
    const menuElement: HTMLElement | null = document.querySelector(menuSelector);
    const burgerElement: HTMLElement | null = document.querySelector(burgerSelector);
    const BREACKPOINT = 993;

    if(!menuElement){
        return
    }
    
    menuElement.style.display = "none";

        burgerElement?.addEventListener("click", () => {
            menuElement.style.display = menuElement.style.display === "none" && window.screen.availWidth < BREACKPOINT ? "block" : "none"
menuElement.style.display = "none";
        });
    
        window.addEventListener("resize", () => {
            menuElement.style.display = window.screen.availWidth >= BREACKPOINT ? "none" : "block"
        });

};
