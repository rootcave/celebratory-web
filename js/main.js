/**
 * Created by melkotoury on 12/22/2015.
 */
$(function(){
    $('.categories a').click(function(e){
        $('.categories ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        var itemSelected = $(this).attr('data-filter');
        $('.portfolio-item').each(function(){
            if (itemSelected == '*'){
                $(this).removeClass('filtered').removeClass('selected');
                return;
            } else if($(this).is(itemSelected)){
                $(this).removeClass('filtered').addClass('selected');
            } else{
                $(this).removeClass('selected').addClass('filtered');
            }
        });
    });
});