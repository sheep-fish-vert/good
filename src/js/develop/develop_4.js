function massonry(){
    $('.good_grid').masonry({
      columnWidth: 315,
      itemSelector: '.good_grid_item',
      gutter: 3,
      fitWidth: true
    });
}
function filterCatalog(){
    var range = $('.good_filter_catalog_price_range'),
        input = range.siblings('input');

    var minVal = input.data('min');
    var maxVal = input.data('max');
    var nowVal = input.data('now-value');
    var step = input.data('step');
    var thousand = input.data('thousand');
    var postfix = input.data('postfix');

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
}

$(document).ready(function(){
    $('input, select:not(.good_select_has_img)').styler();
    massonry();
    filterCatalog();
});

$(window).load(function(){

});

$(window).resize(function(){

});
