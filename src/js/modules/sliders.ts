const sliders = (slides: string, dir: string, prev: string, next: string) => {
    let slideIndex = 1;
    const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);
    let paused: number

    const showSlides = (n: number) => {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach((item) => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = "block";
    };
    showSlides(slideIndex);

    const changeSlides = (n: number) => {
        showSlides((slideIndex += n));
    };

    try {
        const prevBtn: HTMLButtonElement | null = document.querySelector(prev);
        const nextBtn: HTMLButtonElement | null = document.querySelector(next);

        if(!prevBtn){
            return
        }
        prevBtn.addEventListener("click", () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove("slideInLeft");
            items[slideIndex - 1].classList.add("slideInRight");
        });

        if (!nextBtn) {
            return
        }
        nextBtn.addEventListener("click", () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove("slideInRight");
            items[slideIndex - 1].classList.add("slideInLeft");
        });
    } catch (e) {}

    const activateAnimation = () => {
        if (dir === "vertical") {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.add("slideInDown");
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.remove("slideInRight");
                items[slideIndex - 1].classList.add("slideInLeft");
            }, 3000);
        }
    };

    activateAnimation();

    const eventToParent = items[0].parentNode

    if(!eventToParent){
        return
    }

    eventToParent.addEventListener("mouseenter", () => {
        clearInterval(paused);
    });
    eventToParent.addEventListener("mouseleave", () => {
        activateAnimation();
    });
};

export { sliders };
