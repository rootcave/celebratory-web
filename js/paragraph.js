$(document).ready(function() {
    //START WELCOME
    $(".welcome").on({
        mouseenter: function() {
            $('#welcome').show(100);
           $('.welcome').css({
               'opacity':'0.8'
           });

             $('#welcome').css({'font-size':'1em'

                               });
        },
        mouseleave: function() {
             $('#welcome').hide();
            $('.welcome').css({
                'opacity':'1'
            });
        }
    });

  //END WELCOME
    //START PP
      $(".slid").on({
        mouseenter: function() {
            $('#pp').show();

            $('.slid').css({
                'opacity':'0.8'
            });
             $('#pp').css({'font-size':'1em'
                               });
        },
        mouseleave: function() {
            $('#pp').hide();
            $('.slid').css({
                'opacity':'1'
            });
        }
    });
    
    //END PP
//START CQ
       $(".qe").on({
        mouseenter: function() {
            $('#cq').show();
             $('#ce').show();
            $('.qe').css({
                'opacity':'0.8'
            });
          //   $('.pp-title').fadeOut(1000);

             $('#cq').css({'font-size':'1em'

                               });
             $('#ce').css({'font-size':'1em'
                               });
        },
        mouseleave: function() {
             $('#cq').hide();
            $('#ce').hide();
            $('.qe').css({
                'opacity':'1'
            });
            // $('.pp-title').fadeIn(1000);
        }
    });
    //END CQ
    
    
   
});
