/**
 * Created by Awar on 2015-10-14.
 */

//Zadanie 1
document.addEventListener("DOMContentLoaded", function(event) {
//
//    var myArticle = document.querySelector("article");
//    myArticle.addEventListener("mouseover", function(event){
//        console.log(myArticle);
//            });

//Zadanie2
//
//    var myMenu = document.querySelector("nav");
//
//    console.log(myMenu);
//
//    function manageElement(element) {
//        console.log(element.tagName);
//        console.log(element.parentElement.tagName);
//        console.log(element.parentElement.classList);
//    }
//
//    myMenu.addEventListener("click", function(event){
//        manageElement(myMenu);
//        console.log(event.type);
//    });
//
//});


//Zadanie 3

// var myHeader = document.querySelector("h2");
//
//console.log(myHeader);
//
//function show(element) {
//    element.classList.add("tooltip");
//};
//
//function hide(element) {
//    element.classList.remove("tooltip");
//};
//
//myHeader.addEventListener("mouseover", function(event){
//    show(myHeader);
//});
//
//myHeader.addEventListener("mouseout", function(event){
//    hide(myHeader);
//});


//Zadanie 1 dodatkowe

    var myButton = document.querySelector("button");
    var blocks = document.querySelector(".blocks");


    myButton.addEventListener("click", function(event){
        console.log(blocks.classList);
        blocks.classList.toggle("blocks");
        blocks.classList.toggle("displayNone");
        console.log(blocks.classList);
        });


});
