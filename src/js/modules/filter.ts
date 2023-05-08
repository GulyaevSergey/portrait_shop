export const filter = () => {
    const menu: HTMLElement | null = document.querySelector(".portfolio-menu");
    if (!menu){
        return
    }
    const items: NodeListOf<HTMLElement> = menu.querySelectorAll("li");
    const btnAll: HTMLElement | null = menu.querySelector(".all");
    const btnLovers: HTMLElement | null = menu.querySelector(".lovers");
    const btnChef: HTMLElement | null = menu.querySelector(".chef");
    const btnGirl: HTMLElement | null = menu.querySelector(".girl");
    const btnGuy: HTMLElement | null = menu.querySelector(".guy");
    const btnGrandmother: HTMLElement | null = menu.querySelector(".grandmother");
    const btnGranddad: HTMLElement | null = menu.querySelector(".granddad");
    const wrapper: HTMLElement | null = document.querySelector(".portfolio-wrapper");
    if (!wrapper){
        return
    }
    const markAll: NodeListOf<HTMLElement> = wrapper.querySelectorAll(".all");
    const markGirl: NodeListOf<HTMLElement>= wrapper.querySelectorAll(".girl");
    const markLovers: NodeListOf<HTMLElement> = wrapper.querySelectorAll(".lovers");
    const markChef: NodeListOf<HTMLElement> = wrapper.querySelectorAll(".chef");
    const markGuy: NodeListOf<HTMLElement> = wrapper.querySelectorAll(".guy");
    const no: HTMLElement | null = document.querySelector(".portfolio-no");

    const categoriesFilter = [
        { elem: btnAll, type: markAll },
        { elem: btnLovers, type: markLovers },
        { elem: btnChef, type: markChef },
        { elem: btnGirl, type: markGirl },
        { elem: btnGuy, type: markGuy },
        { elem: btnGrandmother, type: ""},
        { elem: btnGranddad, type: "" },
    ];

    const typeFilter = (markType: NodeListOf<HTMLElement>) => {
        markAll.forEach((mark) => {
            mark.style.display = "none";
            mark.classList.remove("animated", "fadeIn");
        });

        if (!no){
            return
        }

        no.style.display = "none";
        no.classList.remove("animated", "fadeIn");

        if (markType) {
            markType.forEach((mark) => {
                mark.style.display = "block";
                mark.classList.add("animated", "fadeIn");
            });
        } else {
            no.style.display = "block";
            no.classList.remove("animated", "fadeIn");
        }
    };

    categoriesFilter.forEach(({ elem, type}) => {
        if(!elem){
            return
        }
        elem.addEventListener("click", () => {
            if (typeof type !== "string"){
                typeFilter(type)
            }

        })
    });

    menu.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        if (target && target.tagName === "LI") {
            items.forEach((item) => {
                item.classList.remove("active");
                target.classList.add("active");
            });
        }
    });
};
