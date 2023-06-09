import { getResourse } from "./index";

export const showMoreStyles = (trigger: string, wrapper: string) => {
    const btn = document.querySelector(trigger);

    btn!.addEventListener("click", (e) => {
        getResourse("../../../src/assets/db.json")
            .then((res) => createCards(res.styles))
            .catch((error) => console.log(error));

        type Answer = {
            src: string,
            title: string,
            link: string
        }
        const createCards = (answers: Answer[]) => {
            answers.forEach(({ src, title, link }) => {
                const card = document.createElement("div");
                card.classList.add(
                    "animated",
                    "fadeInUp",
                    "col-sm-3",
                    "col-sm-offset-0",
                    "col-xs-10",
                    "col-xs-offset-1"
                );
                card.innerHTML = `
                    <div class="styles-block">
                        <img src=${src} alt>
                        <h4>${title}</h4>
                        <a href=${link}>Подробнее</a>
                    </div>
                `;

                const wrap = document.querySelector(wrapper)

                if(!wrap){
                    return 
                }
                wrap.appendChild(card);
            });
        };


        if (e.target instanceof HTMLElement) {
            e.target.remove();
        }
    });

    // cards.forEach((card) => {
    //     card.classList.add("animated", "fadeInUp");
    // });

    // btn.addEventListener("click", () => {
    //     cards.forEach((card) => {
    //         card.classList.remove(
    //             "hidden-lg",
    //             "hidden-md",
    //             "hidden-sm",
    //             "hidden-xs"
    //         );
    //         card.classList.add(
    //             "col-sm-3",
    //             "col-sm-offset-0",
    //             "col-xs-10",
    //             "col-xs-offset-1"
    //         );
    //     });
    //     btn.remove();
    // });
};
