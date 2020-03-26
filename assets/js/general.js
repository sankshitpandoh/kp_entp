$(document).ready(function(){

    // to make the header fixed on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
          $('.main-header').addClass('header-scrolled');
        } else {
          $('.main-header').removeClass('header-scrolled');
        }
      });
      if ($(window).scrollTop() > 40) {
        $('.main-header').addClass('header-scrolled');
      }

    // gallery section isotope js
    var portfolioIsotope = $('.gallery-container').isotope({
        itemSelector: '.port-item'
      });
      $('.gallery-nav li').on('click', function() {
        $(".gallery-nav li").removeClass('filter-active');
        $(this).addClass('filter-active');
    
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });

    // slider for testimonials
    var owl = $('.t-slider');
    owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true, 
});
    
});