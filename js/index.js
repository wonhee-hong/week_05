$(document).click(function(){
	$(".open").on("click",Slide1)
	$(".open").on("click",Slide2)
})

function Slide1(){
	$(".doorLeft").css(".doorLeft:hover")
}
function Slide2(){
	$( ".doorRight").css(".doorRight:hover")
}
