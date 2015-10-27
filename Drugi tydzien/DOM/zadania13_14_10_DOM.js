/**
 * Created by Awar on 2015-10-13.
 */

document.addEventListener("DOMContentLoaded", function(){
    var header = document.querySelector("h1");
    var myInput = document.querySelector("#myInput");

    myInput.addEventListener("keypress", function(event){
        console.log(event);
        console.log(event.keyCode);
        header.innerHTML = header.innerHTML + String.fromCharCode(event.keyCode);
    })


    //var c1Div = document.querySelector(".c1");
    //var par = document.querySelector("p");
    //
    //c1Div.addEventListener("click", function(event){
    //    console.log("click on div");
    //    console.log(event.currentTarget);
    //    console.log(event.target);
    //})
    //
    //par.addEventListener("click", function(event){
    //    console.log("click on p");
    //    console.log(event.currentTarget);
    //    console.log(event.target);
    //    event.stopImmediatePropagation();
    //})
    //
    //par.addEventListener("click", function(event){
    //    console.log("click2 on p");
    //    console.log(event.currentTarget);
    //    console.log(event.target);
    //    //event.stopPropagation();
    //})
    //
    //par.addEventListener("mouseup", function(event){
    //    console.log("mouseup on p");
    //    console.log(event.currentTarget);
    //    console.log(event.target);
    //    //event.stopImmediatePropagation();
    //})



//    var counter = 0;
//
//    header.addEventListener("click", function(event){
//        console.log(this);
//        console.log("Click function started");
//        console.log("Function used " + counter + " times");
//        counter++;
//    });
//
//    header.addEventListener("click", function(event){
//        this.innerText = "This header was clicked " + counter + " times";
//        counter++;
//    });
//
//
//    var paragraphs = document.querySelectorAll("p");
//
////anonimowe wyra¿enie funkcyjne - raz za³o¿onego nie da siê usun¹æ, tylko nazwan¹ funkcjê mo¿na usun¹æ
//    for(var i=0; i<paragraphs.length; i++) {
//        paragraphs[i].addEventListener("click", function(event){
//            console.log("Clicked on paragraph with text " + this.innerText);
//        });
//    }
//
//
//    var header = document.querySelector("h1");
//
//    header.addEventListener("mouseover", function(event){
//        console.log("Myszka najechala");
//    });
//
//    header.addEventListener("mouseout", function(event){
//        console.log("Myszka wyjechala");
//    });
//

    //
    //var header = document.querySelector("h1");
    //
    ////header.addEventListener("click"function(event){
    ////    console.log(event);
    ////});
    //
    //var lastClickTime = -1;
    //
    //header.addEventListener("click", function(event){
    //    if(lastClickTime === -1) {
    //        console.log("First click");
    //    }
    //    else{
    //        var timeDiff = event.timeStamp - lastClickTime;
    //        console.log("Last click: " + timeDiff + " ms ago");
    //        }
    //    lastClickTime = event.timeStamp;
    //})


});
