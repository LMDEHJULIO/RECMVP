$(document).ready( function() {
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('alt-nav')
        } else {
            $('nav').removeClass('alt-nav')
        }
        
        
    }, {
        offset: '100px;'
    });
    
        /*Navigation Scroll*/

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /*Animations on scroll*/
    $('.js--waypoint-1').waypoint(function(direction){
        $('.js--waypoint-1').addClass('animated fadeIn');
        
    }, {
        offset: "60%"
    });


    $('.js--waypoint-2').waypoint(function(direction){
        $('.js--waypoint-2').addClass('animated fadeInUp');
        
    }, {
        offset: "50%"
    });
    

    $('.js--waypoint-3').waypoint(function(direction){
        $('.js--waypoint-3').addClass('animated fadeIn');
        
    }, {
        offset: "50%"
    });

    $('.js--waypoint-4').waypoint(function(direction){
        $('.js--waypoint-4').addClass('animated pulse');
        
    }, {
        offset: "50%"
    });

});



