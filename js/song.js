$(document).on("pagecreate","#pageSong",function(){
    $.event.special.swipe.horizontalDistanceThreshold = 5;
    $("#pageSong").on("swipeleft",function(){
        $.mobile.changePage("detail.html","flow");
    });
});
