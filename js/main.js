var slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n )
}

function showSlides(n){
    var i = 0;
    var slides = document.getElementsByClassName('slide')
    if (n > slides.length){
        slideIndex=1
    }
    if (n < 1 ){
        slideIndex = slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

$(".navbar-nav li a:not('dropdown-toggle')").on('click', function(){
    $('.navbar-collapse').collapse('hide');
})

$(document).ready(function(){

    $('body').scrollspy({target: '.navbar-nav', offset: 66});

    $('.navbar-nav a').on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration:2000,
    reset: true,

})
sr.reveal('.home-text',{
    delay:200,
})