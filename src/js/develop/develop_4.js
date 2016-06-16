function massonry(){
    $('.good_grid').masonry({
      columnWidth: 315,
      itemSelector: '.good_grid_item',
      gutter: 3,
      fitWidth: true
    });
}
function filterCatalog(){
    if( $('.good_filter_catalog_price_range').length>0 ){
        var range = $('.good_filter_catalog_price_range'),
            input = range.parent().siblings('input'),
            inputVal = input.val(),
            minVal = input.data('min'),
            maxVal = input.data('max'),
            nowVal = input.data('now-value'),
            step = input.data('step'),
            thousand = input.data('thousand'),
            postfix = input.data('postfix');

        noUiSlider.create(range[0], {
            start: [ nowVal ],
            step: step,
            range: {
                'min': [  minVal ],
                'max': [ maxVal ]
            },
            format: wNumb({
                decimals: 0,
                thousand: thousand,
                postfix: " " + postfix,
            })
        });

        range[0].noUiSlider.on('update', function( values, handle ) {
           input.val(values[handle]);
        });

        $(document).on('click', '.good_filter_catalog_price_minus', function(event) {
            var val = range[0].noUiSlider.get();
            val = parseInt(val.replace(' ',''));
            range[0].noUiSlider.set(val-step);
        });

        $(document).on('click', '.good_filter_catalog_price_plus', function(event) {
            var val = range[0].noUiSlider.get();
            val = parseInt(val.replace(' ',''));
            range[0].noUiSlider.set(val+step);
        });
    }
}

function tabsAboutService(){
    $('.good_about_service_right li').not(':first').hide();
    $('.good_about_service_body .good_about_service_left li').click(function(){
        $('.good_about_service_body .good_about_service_left li').removeClass('active').eq($(this).index()).addClass('active');
        $('.good_about_service_right li').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');
}

$(document).ready(function(){
    $('input:not(.good_filter_catalog_checkbox):not(.good_not_style), select:not(.good_select_has_img)').styler();
    massonry();
    filterCatalog();
    tabsAboutService();
});

$(window).load(function(){

});

$(window).resize(function(){

});
