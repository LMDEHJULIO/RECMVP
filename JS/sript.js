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
});