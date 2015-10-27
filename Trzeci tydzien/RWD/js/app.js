$(function(){

console.log("dziala");

    if(window.matchMedia("(max-width: 800px)").matches){
        $(".myButton").css("display", "block");
        $("nav").removeClass("desktopView").addClass("smartphoneView").addClass("clickClass");
        $("button").on("click", function(){
            $("nav").toggleClass("clickClass");
        });
    }


});