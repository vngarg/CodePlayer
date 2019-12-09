$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton")
},
function(){
    $(this).removeClass("highlightedButton")
})
$(".toggleButton").click(function(){
    $(this).toggleClass("active")
    $(this).removeClass("highlightedButton")
})
$(".panel").height($(window).height()-$("#header").height()-14)
$(".panel").width($(window).width()/2-4)

$("textarea").on("change keyup paste",function(){
    $("iframe").contents().find("html").html($("#htmlPanel").val())
})
