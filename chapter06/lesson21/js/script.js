$(function(){
    var bannerArray = ["red", "yellow", "green", "blue", "brown"];

    var num = Math.random();
    num *= 5;
    num = Math.floor(num);
    // console.log(num);

    $("aside img").attr("src", "img/" + bannerArray[num] + ".jpg");
});
