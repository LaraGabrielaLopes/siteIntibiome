$(document).ready(function() {
    $("#menuIcon").click(function() {
        $(".bar:nth-child(1)").toggleClass("rotate-down");
        $(".bar:nth-child(2)").toggleClass("fade-out");
        $(".bar:nth-child(3)").toggleClass("rotate-down");
        $("#menuContent").slideToggle();
    });
});

function clickMenu(x) {
    x.classList.toggle("change")
};

function desktopV() {
    const carousel = document.querySelector('.slideCarousel');

    if(window.innerWidth >= 768) {
        carousel.classList.remove('slideCarousel');
    } else {
        carousel.classList.add('slideCarousel');
    }

    document.addEventListener('DOMContentLoaded'.desktopV);
    window.addEventListener('resize', desktopV);

}


    // const cardsContainer = document.getElementById('cardsContainner');

    // const carouselContainer  = document.getElementById('carouselContainer');

    // if (window.innerWidth < 768) {
    //     cardsContainer.style.display = 'none';
    //     carouselContainer.style.display = 'block';
    // } else {
    //     cardsContainer.style.display = 'flex';
    //     carouselContainer.style.display = 'none';
    // }

    




