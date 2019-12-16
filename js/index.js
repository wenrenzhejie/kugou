$(document).on("pagecreate","#pageIndex",function(){
    /*$(".index_nav_me").on("tap",function(){
        console.log("index");
        $.mobile.changePage("index.html","slideup");
    });*/
    $(".nav_me_listen").on("tap",function(){
        console.log("listen");
        $.mobile.changePage("listen.html","slideup");
    });
    $(".nav_me_look").on("tap",function(){
        $.mobile.changePage("look.html","slideup");
    });
    $("#song").on("tap",function () {
        console.log("aaaaa");
        $.mobile.changePage("song.html","slideup");
    });

    $.event.special.swipe.horizontalDistanceThreshold = 5;
    $("#pageIndex").on("swipeleft",function(){
        $.mobile.changePage("listen.html","slide");
    });

});
$(document).on("pagecreate","#pageListen",function(){
    console.log("aaaaaaaaaaaaaaaaa");
    let temp = null;
    lunbotu();
    function lunbotu(){
        console.log("Jinlaile");
        let imageArray = ["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg"];
        if (temp == null){
            temp = setInterval(fn,3000);
        }
        function fn() {
            let index = parseInt($("#imgIndex").val());
            index = ++index%5;
            let bg = "url(" + imageArray[index] + ")";
            $("#lunbotu").css("backgroundImage",bg);
            $("#imgIndex").val(index);
        }

    }
    $(".listen-nav-me").on("tap",function(){
        console.log("index");
        $.mobile.changePage("index.html","slideup");
    });
    /*$(".listen-nav-listen").on("tap",function(){
        console.log("listen");
        $.mobile.changePage("listen.html","slideup");
    });*/
    $(".listen-nav-look").on("tap",function(){
        $.mobile.changePage("look.html","slideup");
    });
    $(document).on("pagebeforehide","#pageListen",function(){
        console.log("pagebeforeHide");
        console.log(temp);
        clearInterval(temp);
        temp = null;
    });
    $.event.special.swipe.horizontalDistanceThreshold = 5;
    $("#pageListen").on("swipeleft",function(){
        $.mobile.changePage("look.html","slide");
    });
    $("#pageListen").on("swiperight",function(){
        $.mobile.changePage("index.html","slide");
    });
});
$(document).on("pagecreate","#pageLook",function(){
    $(".look_nav_me").on("tap",function(){
        console.log("index");
        $.mobile.changePage("index.html","slideup");
    });
    $(".look_nav_listen").on("tap",function(){
        console.log("listen");
        $.mobile.changePage("listen.html","slideup");
    });
    $.event.special.swipe.horizontalDistanceThreshold = 5;
    $("#pageLook").on("swiperight",function(){
        $.mobile.changePage("listen.html","slide");
    });
    /*$(".look_nav_look").on("tap",function(){
        $.mobile.changePage("look.html","slideup");
    });*/
});
