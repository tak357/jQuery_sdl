$(function(){
  $("li").append("<div>");
  $("div").each(function(){
    $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
  });

  $("li").hover(function(){
    $(this).children("div").stop().fadeIn();
    $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
  }, function(){
    $(this).children("div").stop().fadeOut();
    $(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
  });
});
