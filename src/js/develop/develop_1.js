
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
            var parent = null;

            $(this).styler({
                onFormStyled:function(){

                    parent = selectImg.parents('.good_select_has_img');
                    parent.find('li').removeAttr('style');
                    parent.find('li').each(function(){
                        $(this).append('<img src='+$(this).attr('data-image')+' alt="" />');
                    });

                    parent.find('.jq-selectbox__select-text').removeAttr('style').append('<img src='+parent.find('.selected').attr('data-image')+' alt="" />');

                },
                onSelectClosed:function(){

                    if(!parent.find('.jq-selectbox__select-text img').length){
                        parent.find('.jq-selectbox__select-text').removeAttr('style').append('<img src='+parent.find('.selected').attr('data-image')+' alt="" />');
                    }

                }
            });

        });




    }

/* /form styler with img */

/* show header search input */

    function showHeaderSearchInput(){

        $(document).on('click touchstart', function(event){

            if(!$('.good_header_search').is(event.target) && $('.good_header_search').has(event.target).length === 0){
                $('.good_header_search').removeClass('active');
            }

        });

        $(document).on('click', '.good_header_search_icon', function(){
            $('.good_header_search').addClass('active');
            $('.good_header_search input').focus();
        });

    }

/* /show heade search input */

/* submit form by change */

    function submitFormByChange(){

        $('.good_submit_change select').change(function(){

            $(this).parents('form').submit();

        });

    }

/* /submit form by change */

$(document).ready(function(){

    toggleLeftLinksSecondLevel();
    showHeaderSearchInput();
    submitFormByChange();

});

$(window).load(function(){

    formStylerWithImg();

});

$(window).resize(function(){

});