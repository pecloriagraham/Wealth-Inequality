$(document).ready(function() {
    $(".page2").hide();
    $(".page3").hide();
});
$("#page").click(function() {
    $(".page2").show();
    $(".page1").hide();
});
$("#image").click(function() {
    $(".page3").show();
    $(".page2").hide();
});