//Stop carousel
$('.carousel').carousel({
    ride: String,
    nav: true
});
//control
$('.carousel-control-prev-icon').click(function () {
    $('#article-photo-carousel').carousel("prev");
});
//button 
function myFunction(){
window.location="carousel.html";//at the end

}