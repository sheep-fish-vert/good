
/* left columns second level toggle */

    function toggleLeftLinksSecondLevel(){

        $(document).on('click', '.good_second_level .good_second_level_icon', function(){

            var toggleItem = $(this).parents('.good_second_level').find('ul');

            if($(this).is('.active')){
                $(this).removeClass('active');
            }else{
                $(this).addClass('active');
            }

            toggleItem.stop().slideToggle(300);

        });

    }

/* /left columns second level toggle */

$(document).ready(function(){

    toggleLeftLinksSecondLevel();

});

$(window).load(function(){

});

$(window).resize(function(){

});