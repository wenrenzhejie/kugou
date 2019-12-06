$(document).on("pagecreate","#pageIndex",function(){
    $(".index_nav_me").on("tap",function(){
        console.log("index");
        $.mobile.changePage("index.html","slideup");
    });
    $(".index_nav_listen").on("tap",function(){
        console.log("listen");
        $.mobile.changePage("listen.html","slideup");
    });
    $(".index_nav_look").on("tap",function(){
        $.mobile.changePage("look.html","slideup");
    });
});
$(document).on("pagecreate","#pageListen",function(){
    lunbotu();
    function lunbotu(){
        console.log("Jinlaile");
        let imageArray = ["../images/1.jpg","../images/2.jpg","../images/3.jpg","../images/4.jpg","../images/5.jpg"];
        let temp;
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
    $(".index_nav_me").on("tap",function(){
        console.log("index");
        $.mobile.changePage("index.html","slideup");
    });
    $(".index_nav_listen").on("tap",function(){
        console.log("listen");
        $.mobile.changePage("listen.html","slideup");
    });
    $(".index_nav_look").on("tap",function(){
        $.mobile.changePage("look.html","slideup");
    });
});
