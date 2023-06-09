const modal = (): void => {
    let btnPressed: boolean;
    function bindModal(
        triggerSelector: string,
        modalSelector: string,
        closeSelector: string,
        destroy: boolean = false
    ): void {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);
        const modal: HTMLFormElement | null= document.querySelector(modalSelector);
        const close: HTMLButtonElement | null = document.querySelector(closeSelector);
        const windows: NodeListOf<HTMLElement> = document.querySelectorAll("[data-modal]");
        const scroll: number = calcScroll();

        const closeModal = () => {
            modal!.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        };

        triggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;
                if (destroy) {
                    trigger.remove();
                }
                windows.forEach((window) => {
                    window.style.display = "none";
                    window.classList.add("animated", "fadeIn");
                });
                modal!.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;

                close!.focus();
            });
        });

        close!.addEventListener("click", () => {
            windows.forEach((window) => {
                window.style.display = "none";
            });
            closeModal();
        });

        modal!.addEventListener("click", (e) => {
            if (e.target === modal) {
                windows.forEach((window) => {
                    window.style.display = "none";
                });
                closeModal();
            }
        });

        window.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
                windows.forEach((window) => {
                    window.style.display = "none";
                });
                closeModal();
            }
        });
    }

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(function () {
            let display: string | undefined;

            document.querySelectorAll("[data-modal]").forEach((item) => {
                if (getComputedStyle(item).display !== "none") {
                    display = "block";
                }
            });
            if (!display) {
                
                const modal = document.querySelector(selector)
                if(modal instanceof HTMLElement) {
                    modal.style.display = "block";
                    document.body.style.overflow = "hidden";
                    const scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`;
                }
            }
        }, time);
    };

    const calcScroll = () => {
        const div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    };

    const openByScroll = (selector: string) => {
        window.addEventListener("scroll", () => {
            if (
                !btnPressed &&
                window.pageYOffset + document.documentElement.clientHeight >=
                    document.documentElement.scrollHeight
            ) {
                const select = document.querySelector(selector) as HTMLElement
                select.click();
            }
        });
    };

    bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
    bindModal(
        ".button-consultation",
        ".popup-consultation",
        ".popup-consultation .popup-close"
    );
    openByScroll(".fixed-gift");
    bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);

    showModalByTime(".popup-consultation", 6000);
};

export { modal };
