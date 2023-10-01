$(document).ready(function(){

    $("#text1").mouseenter(function(){
        $("#text2").show();
    })
       
    $("#text1").mouseout(function(){
        $("#text2").hide();
    })


    $("#caja2").click(function(){
        $("#caja2").width("200%");
    })

    $("#caja2").mouseout(function(){
        $("#caja2").width("100%");
    })

    $("#caja3").dblclick(function(){
        $("#caja3").attr("style","font-size: 50px");
    })
});