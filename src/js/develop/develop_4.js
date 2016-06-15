function massonry(){
    $('.good_grid').masonry({
      columnWidth: 315,
      itemSelector: '.good_grid_item',
      gutter: 3,
      fitWidth: true
    });
}


$(document).ready(function(){
    massonry();
});

$(window).load(function(){

});

$(window).resize(function(){

});
