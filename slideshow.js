$('.slideshow-brand').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-brand",
    appendDots: ".slideshow-dots-brand",
    customPaging: function (slider, i) {
        return '<span class="red">' + (i + 1) + '</span>';
    },
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});

$('.slideshow-recommended').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-recommended",
    appendDots: ".slideshow-dots-recommended",
    customPaging: function (slider, i) {
        return (i + 1);
    },
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
    }
        ]
});


$('.slideshow-video').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendArrows: ".slideshow-arrows-video",
    appendDots: ".slideshow-dots-video",
    customPaging: function (slider, i) {
        return (i + 1);
    },
    autoplay: true,
    autoplaySpeed: 3000
});
