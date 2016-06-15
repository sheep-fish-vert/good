
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

/* form styler with img */

    function formStylerWithImg(){

        $('.good_select_has_img').each(function(){

            var selectImg = $(this);

            $(this).styler({
                onFormStyled:function(){
                    var parent = $(this).parents('.good_select_has_img');
                    parent.find('li').removeAttr('style');
                    parent.find('li').each(function(){
                        parent.append('<img src='+$(this).attr('data-image')+' alt="" />');
                    });

                },
                onSelectClosed:function(){

                }
            });

        });




    }

/* /form styler with img */

$(document).ready(function(){

    toggleLeftLinksSecondLevel();

});

$(window).load(function(){

    formStylerWithImg();

});

$(window).resize(function(){

});