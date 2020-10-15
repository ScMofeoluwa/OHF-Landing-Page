 
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