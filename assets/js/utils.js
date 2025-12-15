export function utils() {
    function initCarousel() {
        const carousel = document.querySelector(".hero-carousel");
        if (!carousel) return;

        const track = carousel.querySelector(".hero-carousel__track");
        const slides = carousel.querySelectorAll(".hero-carousel__slide");
        const dots = carousel.querySelectorAll(".hero-carousel__dot");

        let index = 0;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        function update(animate = true) {
            track.style.transition = animate ? "transform 0.4s ease" : "none";
            track.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach((dot, i) =>
                dot.classList.toggle("is-active", i === index)
            );
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", (e) => {
                if (isDragging) return;
                index = i;
                update();
            });
        });

        carousel.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.clientX;
            currentX = 0;
            update(false);
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            currentX = e.clientX - startX;
            track.style.transform = `translateX(calc(-${
                index * 100
            }% + ${currentX}px))`;
        });

        window.addEventListener("mouseup", () => {
            if (!isDragging) return;
            isDragging = false;

            if (currentX < -50 && index < slides.length - 1) index++;
            if (currentX > 50 && index > 0) index--;

            currentX = 0;
            update();
        });

        update();
    }

    function initScrollAnimations() {
        function animateElements() {
            const animatedElements =
                document.querySelectorAll("[data-animation]");
            animatedElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (
                    rect.top < window.innerHeight &&
                    rect.bottom > 0 &&
                    !el.classList.contains("animated")
                ) {
                    el.classList.add("animated");
                } else if (
                    (rect.top >= window.innerHeight || rect.bottom <= 0) &&
                    el.classList.contains("animated")
                ) {
                    el.classList.remove("animated");
                }
            });
        }

        window.addEventListener("load", animateElements);
        window.addEventListener("scroll", animateElements);
    }

    initCarousel();
    initScrollAnimations();
}
