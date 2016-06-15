function massonry(){
    $('.good_grid').masonry({
      columnWidth: 315,
      itemSelector: '.good_grid_item',
      gutter: 3,
      fitWidth: true
    });
}


$(document).ready(function(){
    $('input, select').styler();
    massonry();
});

$(window).load(function(){

});

$(window).resize(function(){

});
