$(function(){
    $("#bg").hide();

    $("#click").click(function(){
        $("#bg").fadeIn(300);
    })
    $("#ok").click(function(){
        $("#bg").fadeOut();
    })
});
