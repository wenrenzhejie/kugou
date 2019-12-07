$(document).on("pagecreate","#pageSong",function(){
    $("#pageSong").on("swipeleft",function(){
        $.mobile.changePage("detail.html","slide");
    });
});