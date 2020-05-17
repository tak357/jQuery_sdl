$(function(){
  $("td").hover(function(){
    $(this).parent().addClass("target");

    var myIndex = $(this).index();
        myIndex++ ;
    
    console.log(myIndex);

    $("td:nth-child("+ myIndex +")").addClass("target");

  }, function(){
    $(".target").removeClass("target");

  });
});
