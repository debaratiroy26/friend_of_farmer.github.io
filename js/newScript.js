    $(function () {
    "use strict"; // Start of use strict

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 50) {
            $("#mainNav").addClass("navbar-shrink");
        }
        else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
});
 // End of use strict
