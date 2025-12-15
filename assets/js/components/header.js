export function initMenu() {
    const header = document.querySelector(".header");
    const nav = document.querySelector(".header__menu"); // твоя навігація
    const menuToggles = document.querySelectorAll(".js-menu-toggle");
    const menuCloseBtns = document.querySelectorAll(".js-menu-close");
    const menuTriggers = document.querySelectorAll(".menu__icon"); // для підменю

    if (!header || !nav) return;

    // --- Ініціалізація при завантаженні ---
    window.addEventListener("load", () => {
        document.body.classList.remove("preload");
        if (typeof AOS !== "undefined") {
            AOS.init({
                duration: 1000,
                offset: 0,
                once: true,
            });
        }
    });

    // --- Header скрол ---
    const headerMinClassName = "header--min";
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 1) {
            header.classList.add("header--fixed");
        } else {
            header.classList.remove("header--fixed");
        }

        if (window.scrollY > 30) {
            header.classList.add(headerMinClassName);
        } else {
            header.classList.remove(headerMinClassName);
        }
    });

    // --- Бургер меню ---
    document.addEventListener("click", (e) => {
        const toggle = e.target.closest(".js-menu-toggle");
        const closeBtn = e.target.closest(".js-menu-close");

        if (toggle) {
            nav.classList.toggle("nav--opened");
            header.classList.toggle("header--open-menu");
            togglePageScroll();
        } else if (closeBtn) {
            nav.classList.remove("nav--opened");
            header.classList.remove("header--open-menu");
            togglePageScroll();
        }
    });

    // --- Закриття меню при кліку на будь-який <a> ---
    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav--opened");
            header.classList.remove("header--open-menu");
            document.documentElement.style.overflowY = "unset";
        });
    });

    function togglePageScroll() {
        if (header.classList.contains("header--open-menu")) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "unset";
        }
    }

    // --- Вкладені підменю на мобільних ---
    menuTriggers.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (window.innerWidth < 1025) {
                menuTriggers.forEach((btn) => {
                    const parentItem = btn.closest(".menu__item");
                    if (btn === item) {
                        parentItem.classList.toggle("menu-opened");
                    } else {
                        parentItem.classList.remove("menu-opened");
                    }
                });
            }
        });
    });
}
