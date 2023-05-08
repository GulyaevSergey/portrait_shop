export const scrolling = (upSelector: string): void => {
    const btnTop: HTMLElement | null = document.querySelector(upSelector);

    window.addEventListener("scroll", () => {
        if(!btnTop){
            return
        }
        if (document.documentElement.scrollTop > 1650) {
            btnTop.classList.add("animated", "fadeIn");
            btnTop.classList.remove("fadeOut");
        } else {
            btnTop.classList.add("fadeOut");
            btnTop.classList.remove("fadeIn");
        }
    });

    // Scroling with raf

    const links = document.querySelectorAll("[href^='#']");
    const speed = 0.3;

    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const widthTop = document.documentElement.scrollTop;
            const hash = this.hash;
            const toBlock = document
                .querySelector(hash)
                .getBoundingClientRect().top;
            let start: number | null = null;

            const step = (time: number) => {
                if (start === null) {
                    start = time;
                }

                let progress = time - start;
                let r =
                    toBlock < 0
                        ? Math.max(
                              widthTop - progress / speed,
                              widthTop + toBlock
                          )
                        : Math.min(
                              widthTop + progress / speed,
                              widthTop + toBlock
                          );
                document.documentElement.scrollTo(0, r);
                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            };

            requestAnimationFrame(step);
        });
    });

    // Pure js scrolling

    // const element = document.documentElement;
    // const body = document.body;

    // const calcScroll = () => {
    //     btnTop.addEventListener("click", function (e) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
    //         if (this.hash !== "") {
    //             e.preventDefault();
    //             let hashElement = document.querySelector(this.hash);
    //             let hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };
    // const smothScroll = (from, to, hash) => {
    //     let timeInterval = 1;
    //     let prevScrollTop;
    //     let speed;

    //     if (to > from) {
    //         speed = 30;
    //     } else {
    //         speed = -30;
    //     }

    //     const move = setInterval(() => {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(
    //                 history.state,
    //                 document.title,
    //                 location.href.replace(/#.*$/g, "") + hash
    //             );
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    // calcScroll();
};
