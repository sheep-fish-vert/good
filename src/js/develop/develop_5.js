function showItem() {
    $('.good_show').click(function () {

        $(this).next('.good_hide').css('display','inline');
        $(this).remove();

    });
}


$(document).ready(function(){
    showItem();
});

$(window).load(function(){

});

$(window).resize(function(){

});