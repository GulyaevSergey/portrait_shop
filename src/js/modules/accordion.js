export const accordion = (trigger, content) => {
    const btns = document.querySelectorAll(trigger);
    const blocks = document.querySelectorAll(content);

    blocks.forEach((block) => {
        block.classList.add("animated", "fadeInDown");
    });

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (!btn.classList.contains("active")) {
                btns.forEach((btn) => {
                    btn.classList.remove("active", "active-style");
                });
                btn.classList.add("active", "active-style");
            }
        });
    });
};
