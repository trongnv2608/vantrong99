$(document).ready(function() {
    $('.card-title').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        draggable: true,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ],
        dots: true

        // slidesToShow: 4,
        // slidesToScroll: 1,
        // infinite: true,
        // arrows: true,
        // draggable: false,
        // prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        // nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`,
        // dots: true
    });
});