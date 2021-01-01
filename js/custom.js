$(function(){
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 100){
            $(".navbar").addClass('bg');
        }else{
            $(".navbar").removeClass('bg');
        }
    });

    //type js

    var typed = new Typed('.type', {
        strings: [
            'Design', 
            'Developer',
            'Fontend Developer'
        ],
        typeSpeed: 100,
        loop:true,
      });


// init Isotope
    var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filtering').on( 'click', 'p', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });



})