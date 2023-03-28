(function () {
    const iconBurger = document.querySelector(".header-burger");
    const headerBody = document.querySelector(".header-menu");
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        iconBurger.classList.toggle("active");
        headerBody.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".header-link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (_) => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                headerBody.classList.remove("active");
            }
        }
        );
    });
})();