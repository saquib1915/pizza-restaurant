document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bsCollapse) {
                    bsCollapse.hide();
                }

            }

        });

    });


    /* Add shadow to fixed header when scrolling */

    const header =
        document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.5)";

        } else {

            header.style.boxShadow = "none";

        }

    });

});