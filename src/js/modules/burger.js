export const burger = (menuSelector, burgerSelector) => {
    const menuElement = document.querySelector(menuSelector);
    const burgerElement = document.querySelector(burgerSelector);

    menuElement.style.display = "none";

    burgerElement.addEventListener("click", () => {
        if (
            menuElement.style.display === "none" &&
            window.screen.availWidth < 993
        ) {
            menuElement.style.display = "block";
        } else {
            menuElement.style.display = "none";
        }
    });

    window.addEventListener("resize", () => {
        window.screen.availWidth > 992
            ? (menuElement.style.display = "none")
            : (menuElement.style.display = "block");
    });
};
