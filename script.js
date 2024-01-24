$(document).ready(function() {
    $("#menuIcon").click(function() {
        $(".bar:nth-child(1)").toggleClass("rotate-down");
        $(".bar:nth-child(2)").toggleClass("fade-out");
        $(".bar:nth-child(3)").toggleClass("rotate-up");
        $("#menuContent").slideToggle();
    });
});

function menuFn(x) {
    x.classList.toggle("change")
};



