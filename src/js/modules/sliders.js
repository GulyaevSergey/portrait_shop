const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1;
    const items = document.querySelectorAll(slides);
    let paused = false;

    const showSlides = (n) => {
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

    const changeSlides = (n) => {
        showSlides((slideIndex += n));
    };

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);
        prevBtn.addEventListener("click", () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove("slideInLeft");
            items[slideIndex - 1].classList.add("slideInRight");
        });

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

    items[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener("mouseleave", () => {
        activateAnimation();
    });
};

export { sliders };
