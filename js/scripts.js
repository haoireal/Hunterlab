$(document).ready(function(){
    $('#carouselExampleCaptions').carousel({
        interval: 5000, // Thay đổi thời gian giữa các slide (5 giây)
        ride: 'carousel' // Bắt đầu tự động
    });
});
$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // Khi màn hình nhỏ hơn 768px
                settings: {
                    slidesToShow: 2, // Hiển thị 2 slide
                    slidesToScroll: 1 // Cuộn 1 slide mỗi lần
                }
            }
        ]
    });
});
