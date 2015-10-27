/**
 * Created by Awar on 2015-10-14.
 */


document.addEventListener("DOMContentLoaded", function(){

    var resultElement = document.getElementById("results");
    var buttons = document.querySelectorAll("button");
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    var list = document.getElementById("oldResults");


    var lastResult = null;
    var lastType = null;
    var lastInput1 = null;
    var lastInput2 = null;

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(event) {
            console.log(this.dataset.type);
            var result = 0;
            var value1 = parseFloat(input1.value);
            var value2 = parseFloat(input2.value);
            if(isNaN(value1) || isNaN(value2)){
                resultElement.innerHTML = "podaj poprawne liczby";
                return;
            }
            switch(this.dataset.type) {
                case"plus":
                {
                    result = value1 + value2;
                    break;
                }
                case"minus":
                {
                    result = value1 - value2;
                    break;
                }
                case"divide":
                {
                    result = value1 / value2;
                    break;
                }
                case"multiply":
                {
                    result = value1 * value2;
                    break;
                }
                default:
                {
                    console.log("Error");
                }
            }
                    console.log(result);
            resultElement.innerHTML = result;

            if(lastResult != null) {
                var newListElement = document.createElement("li");
                newListElement.innerHTML = lastInput1 + " " + lastType + " " + lastInput2 + " = " + lastResult;
                list.appendChild(newListElement);
            }
            lastInput1 = value1;
            lastInput2 = value2;
            lastType = this.dataset.type;
            lastResult = result;
        });
    }










});