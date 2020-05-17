$(function(){
  var h = 0;

  $("main div").each(function(){
      if($(this).height() > h){
          h = $(this).height();
          console.log(h);
      }
  });

  $("main div").css("height", h + "px");

});
