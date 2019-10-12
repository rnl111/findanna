
$ (document) .ready(function(){

    $(".all") .on("click",function(){
        $(".nav").addClass("on");
        $(".dim").show();
    });
    $(".nav .닫기") .on("click",function(){
        $(".nav").removeClass("on");
        $(".dim").hide();

});

});
