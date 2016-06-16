
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

/* card slider */

    function cardSlider(){

        $('.good_slider_big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable:false,
            asNavFor: '.good_slider_small'
        });

        $('.good_slider_small').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            dots:false,
            arrows:true,
            vertical:true,
            focusOnSelect:true,
            asNavFor:'.good_slider_big'
        });

    }

/* /card slider */

/* card show info */

    function cardShowInfo(){

        $(document).on('click','.good_card_trader_right_text span', function(){
            $(this).parents('.good_card_trader_right_row').addClass('good_active');
        });

    }

/* /card show info */


/* deferred scripts */

    function deferredScripts(){

        if($('.good_deferred .good_item').length){
            $('.good_deferred_top').removeClass('good_hide');
        }

        $(document).on('click', '.good_deferred_chose_all label', function(){
            if($(this).find('.good_checkbox').is('.checked')){
                $('.good_deferred .good_item:not(.good_chossen)').addClass('good_chossen');
                $('.good_deferred .good_name .good_checkbox:not(.checked) input').prop('checked', true);
                $('.good_deferred .good_name .good_checkbox:not(.checked)').addClass('checked');
            }else{
                $('.good_deferred .good_item.good_chossen').removeClass('good_chossen');
                $('.good_deferred .good_name .good_checkbox.checked input').prop('checked', false);
                $('.good_deferred .good_name .good_checkbox.checked').removeClass('checked');
            }

        });

        $(document).on('click', '.good_deferred .good_other-items .good_checkbox', function(){

            if($(this).is('.checked')){
                $(this).parents('.good_item').addClass('good_chossen');
            }else{
                $(this).parents('.good_item').removeClass('good_chossen');
            }

            if($('.good_deferred .good_item').length == $('.good_deferred .good_item.good_chossen').length && !$('.good_deferred_chose_all .good_checkbox').is('.checked')){

                $('.good_deferred_chose_all .good_checkbox').addClass('checked');
                $('.good_deferred_chose_all .good_checkbox input').prop('checked', true);

            }else if($('.good_deferred .good_item').length != $('.good_deferred good_item .good_item.good_chossen').length && $('.good_deferred_chose_all .good_checkbox').is('.checked')){

                $('.good_deferred_chose_all .good_checkbox').removeClass('checked');
                $('.good_deferred_chose_all .good_checkbox input').prop('checked', false);

            }

        });

    }

/* /deferred scripts */

$(document).ready(function(){

    toggleLeftLinksSecondLevel();
    showHeaderSearchInput();
    submitFormByChange();
    cardSlider();
    cardShowInfo();
    deferredScripts();

});

$(window).load(function(){

    formStylerWithImg();

});

$(window).resize(function(){

});