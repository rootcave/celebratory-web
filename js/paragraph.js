$(document).ready(function() {
    //START WELCOME
    $(".welcome").on({
        mouseenter: function() {
            $('#welcome').fadeIn(3000);
           
             $('.welcome-title').fadeOut(1000);

             $('#welcome').css({'font-size':'1.2em',
                                'margin-top':'0.3em'
                               });
        },
        mouseleave: function() {
             $('#welcome').fadeOut(1000);
             $('.welcome-title').fadeIn(1000);
        }
    });

  //END WELCOME
    //START PP
      $(".slid").on({
        mouseenter: function() {
            $('#pp').fadeIn(3000);
           
             $('.pp-title').fadeOut(1000);

             $('#pp').css({'font-size':'1.2em',
                                'margin-top':'0.3em'
                               });
        },
        mouseleave: function() {
             $('#pp').fadeOut(1000);
             $('.pp-title').fadeIn(1000);
        }
    });
    
    //END PP
//START CQ
       $(".qe").on({
        mouseenter: function() {
            $('#cq').fadeIn(3000);
             $('#ce').fadeIn(3000);
           
          //   $('.pp-title').fadeOut(1000);

             $('#cq').css({'font-size':'1.2em',
                                'margin-top':'0.3em'
                               });
             $('#ce').css({'font-size':'1.2em',
                                'margin-top':'0.3em'
                               });
        },
        mouseleave: function() {
             $('#cq').fadeOut(1000);
            $('#ce').fadeOut(1000);
            // $('.pp-title').fadeIn(1000);
        }
    });
    //END CQ
    
    
   
});
