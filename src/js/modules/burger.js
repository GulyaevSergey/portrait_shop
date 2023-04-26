export const burger = (menuSelector, burgerSelector) => {
    const menuElement = document.querySelector(menuSelector);
    const burgerElement = document.querySelector(burgerSelector);
    const BREACKPOINT = 993;

    menuElement.style.display = "none";

    burgerElement.addEventListener("click", () => {
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
