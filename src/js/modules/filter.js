export const filter = () => {
    const menu = document.querySelector(".portfolio-menu");
    const items = menu.querySelectorAll("li");
    const btnAll = menu.querySelector(".all");
    const btnLovers = menu.querySelector(".lovers");
    const btnChef = menu.querySelector(".chef");
    const btnGirl = menu.querySelector(".girl");
    const btnGuy = menu.querySelector(".guy");
    const btnGrandmother = menu.querySelector(".grandmother");
    const btnGranddad = menu.querySelector(".granddad");
    const wrapper = document.querySelector(".portfolio-wrapper");
    const markAll = wrapper.querySelectorAll(".all");
    const markGirl = wrapper.querySelectorAll(".girl");
    const markLovers = wrapper.querySelectorAll(".lovers");
    const markChef = wrapper.querySelectorAll(".chef");
    const markGuy = wrapper.querySelectorAll(".guy");
    const no = document.querySelector(".portfolio-no");

    const categoriesFilter = [
        { elem: btnAll, type: markAll },
        { elem: btnLovers, type: markLovers },
        { elem: btnChef, type: markChef },
        { elem: btnGirl, type: markGirl },
        { elem: btnGuy, type: markGuy },
        { elem: btnGrandmother, type: "" },
        { elem: btnGranddad, type: "" },
    ];

    const typeFilter = (markType) => {
        markAll.forEach((mark) => {
            mark.style.display = "none";
            mark.classList.remove("animated", "fadeIn");
        });
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

    categoriesFilter.forEach(({ elem, type }) =>
        elem.addEventListener("click", () => {
            typeFilter(type);
        })
    );

    menu.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName === "LI") {
            items.forEach((item) => {
                item.classList.remove("active");
                target.classList.add("active");
            });
        }
    });
};
