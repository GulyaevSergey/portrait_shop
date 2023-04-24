export const accordion = (trigger, content) => {
    const btns = document.querySelectorAll(trigger);
    const blocks = document.querySelectorAll(content);

    blocks.forEach((block) => {
        block.classList.add("animated", "fadeInDown");
    });

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (!btn.classList.contains("active")) {
                btn.classList.add("active", "active-style");
            } else {
                btn.classList.remove("active");
            }
        });
    });
};
