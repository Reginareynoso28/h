document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 200,
        dist: -80,
        shift: 4,
        padding:5,
        numVisuble: 3,
        indicators: true,
        noWarp: false,
    });
})