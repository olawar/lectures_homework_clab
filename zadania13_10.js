/**
 * Created by Awar on 2015-10-13.
 */

    /*
//switch
var day = "Piatek";

switch (day) {
    case "Poniedzialek":{
        console.log("Jest Poniedzialek");
        break;
    }
    case "Wtorek":{
        console.log("Jest Wtorek");
        break;
    }
    case "Sroda":{
        console.log("Jest Sroda");
        break;
    }
    default :{
        console.log("Nie jest ani poniedzialek ani wtorek ani sroda");
        break;
    }
}

//bez break zosta³yby uruchomione wszystkie linijki
//default dobrze wpisac ze wzgledu na nieprzewidywalnosc uzytkownika
//mo¿na te¿ wpisaæ liczby dla var
//jedna wartosc na jeden case


switch (day) {
    case "Poniedzialek":
    case "Wtorek":
    case "Sroda":
    case "Czwartek":
    case "Piatek":{
        console.log("ide do pracy");
        break;
}
    case "Sobota":
    case "Niedziela":{
        console.log("Nie ide do pracy");
        break;
    }
    default :{
        console.log("To nie jest dzien tygodnia");
        break;
    }
}
*/
//Zadanie 1

/**
 * Function that writes down a sentence given on argument's value - 0 or 1
 * @param zeroOrOne
 */

/*
function hero(zeroOrOne) {
    if(zeroOrOne == 0){
        return "From zero to hero";
    }
    else if(zeroOrOne == 1){
        return "ok";
    }
    else {
        return "Use zero or one!";
    }
}

console.log(hero(0));
*/
//Zadanie 2
/*
var zeroOrOne = 1

function zeroOne(zeroOrOne) {
    var result = (zeroOrOne == 1)? "ok":"from zero to hero";
    return result;
}

console.log(zeroOne(1));

*/
//Zadanie 3

/**
 * A function returning temperature for a given season
 * @param season
 */
/*
function temperature(season) {
    switch (season){
        case "Spring":{
            console.log("Temperature is between 5-15 degrees Celsius");
            break;
        }
        case "Summer":{
            console.log("Temperature is between 15-30 degrees Celsius");
            break;
        }
        case "Autumn":{
            console.log("Temperature is between -3 - 15 degrees Celsius");
            break;
        }
        case "Winter":{
            console.log("Temperature is between -30 - 5 degrees Celsius");
            break;
        }
        default :{
            console.log("You didn't give a season's name");
            break;
        }
    }
}

temperature("Summer");

    */

////Petle
//
//for(var j = 0; j < 10; j++) {
//    for(var i=0; i< 10; i++){
//        console.log("Wartosc i: " + i + "Wartosc j: " + j);
//        if (i == 4){
//            break;
//        }
//        console.log("koniec wew");
//    }
//}
//console.log("Koniec");

//
//for(var j = 0; j < 10; j++) {
//    for(var i=0; i< 10; i++){
//        console.log("Wartosc i: " + i + "Wartosc j: " + j);
//        if (i == 4){
//            continue;
//        }
//        console.log("koniec wew");
//    }
//}
//console.log("Koniec");
//

//var napis = "Totoro";
//for(var i=0; i<napis.length; i++) {
//    console.log("Wartosc na pozycji " + i + " to " + napis.charAt(i));
//}
//
//var tablica = [1,2,3,4,5,6,7,8,9];
//for(var j=0; j<tablica.length; j++) {
//    console.log("Wartosc na pozycji " + j + " to " + tablica[j]);
//}

//Tablice
//
//var tab = [
//    1,
//    2.6,
//    true,
//    "Janusz"
//];
//
//console.log(tab);
////tab.push("Nowy element");
////var lastElement = tab.pop();
////console.log(lastElement);
////var firstElement = tab.shift();
////console.log(firstElement);
////tab.unshift("Nowy el");
//tab.reverse();
//console.log(tab);
//
//// chaining
//function reverseString(strToReverse) {
//    return strToReverse.split("").reverse().join("");
//}
//// ("") oznacza, ¿e ma dzielic co litere, analogicznie w join ten znak oznacza, ¿e ma nic nie wstawiaæ ³¹cz¹c litery
//console.log(reverseString("Ala ma kota"));

//
//var tab = [1,4,6,"Ala", true, 5, 34, 234, 56,5];
//
//var suma = 0;
//var ilosc = 0;
//
//tab.forEach(function(element, index, array) {
//    if(typeof element == "number") {
//        suma += element;
//        ilosc++;
//    }
//});
//
//console.log("Srednia danych to " + (suma/ilosc));

//tab.forEach(function(element, index, array) {
//    console.log("Na tablicy " + array + " pod indeksem " + index + " jest wartosc " + element);
//});

//var foo=[ 2, 2,10];
//var ret = foo.every( function(element, index, array) {
//    return element % 2 === 0;
//});
//
//console.log(ret);
//
//var foo=[ 1, 2, 3];
//var ret = foo.some( function(element, index, array) {
//    return element % 2 !== 0;
//});
//console.log(ret);
//
//
//var foo=[ 1, 2, 3, 4, undefined, null, 107];
//var bar = foo.filter( function(element, index, array) {
//    if(typeof element === "number"){
//        return true;
//        }
//    return false;
//});
//console.log(bar);
////zaczyna tworzyæ now¹ tablicê, w której s¹ wartoœci spe³niaj¹ce warunek

//var foo=[ 1, 2, 3, 4, undefined, null, 107];
//var bar = foo.map( function(element, index, array) {
//    return typeof element;
//});
//
//console.log(bar);

//var foo=[ 1, 2, 3, 4, undefined, null, 107];
//var bar = foo.map( function(element, index, array) {
//    return typeof element === "number";
//});
//
//console.log(bar);

//
//var foo=[ 1, 2, 3, 4];
//var bar = foo.reduce(function(prevElem, nextElem, index, array) {
//    console.log("***********next iteration************");
//    console.log(prevElem);
//    console.log(nextElem);
//    console.log("Returns " + (prevElem + nextElem));
//    return prevElem+ nextElem;
//}, 0 );
//console.log(bar);
//
//
//var foo=[ 1, 2, 3, 4];
//var bar = foo.reduce(function(prevElem, nextElem, index, array) {
//    return prevElem + ", "+ nextElem.toString();
//}, "" );
//console.log(bar);

//Petle - zadanie 1

//var array = [1,2,3];
//
//
//console.log(array[2]);
//
//function arraySum(array){
//    var sum = 0;
//    for( i = 0; i < array.length; i++) {
//        sum = sum + array[i];
//    }
//    return sum;
//}
//console.log(arraySum(array));

//
//////Zadanie 2

//var vegetables = ["apple", "banana", "kiwi"];
//var fruits = ["carrot", "potato", "tomato"];
//
//console.log(vegetables);
//console.log(fruits);
//
//function swapArrays(array1, array2) {
//    if(array1.length !== array2.length) {
//        return false;
//    }
//    var temp;
//    for(var i = 0; i<array1.length; i++){
//        temp = array1[i];
//        array1[i] = array2[i];
//        array2[i] = temp;
//    }
//    return true;
//}
//
//swapArrays(vegetables, fruits);
//
//console.log(vegetables);
//console.log(fruits);
////
//////Zadanie 3
//
//
//function addFruits(array3) {
//    array3.push("mango", "grapes");
//    return array3;
//}
//
//console.log(addFruits(fruits));
//
//function addVegetables(array4) {
//    array4.push("salad", "celery");
//    return array4;
//}
//
//console.log(addFruits(fruits));
//console.log(addVegetables(vegetables));
//
//
////Zadanie 4
//
//function removeIDontLike(array7) {
//    array7.splice(0,1);
//    array7.shift();
//    array7.pop();
//    return array7;
//}
//
//console.log(removeIDontLike(vegetables));
//
////Zadanie 5
//
//
//var arrayTest = ["Przyjedz natychmiast", "Azor bardzo chory", "Konrad"];
//
//function joinElem(array5) {
//    var result = array5.join(". ");
//    console.log(result);
//}
//
//joinElem(arrayTest);
//
//
////Zadanie 6
//
//var results = [2,4,53,23];
//
//function evenToOdd(array6) {
//    for( var i = 0; i < results.length; i++) {
//        if(results[i] % 2 == 0) {
//            results[i] = results[i] + 1;
//        }
//        else{
//            continue;
//        }
//        return results;
//    }
//}
//
//console.log(evenToOdd(results));

//Objects
//
//var dog ={
//    name: "Azor",
//    age: 3,
//    color: "brazowy",
//    bark: function(){
//        console.log("Pies o imieniu: " + this.name);
//        console.log("HauHau");
//    },
//    eat: function(food) {
//        console.log("Pies je " + food);
//    }
//}
//
////this to obiekt na którym wywo³ujemy metode
//
//console.log(dog.age);
//dog.age = 13;
//console.log(dog.age);
//dog.bark();
//dog.eat("karme");
//dog.name = "Ciapek";
//dog.bark();
//
//console.log(dog);
//
////alternatywny zapis
//console.log(dog["name"]);
//dog["bark"]();
//
//
//
//var dogProperties = Object.keys(dog);
//console.log(dogProperties);
//
//var values = Object.keys(dog).map(function(key) {
//    return dog[key];
//});
//console.log(values);
//
//dog.owner = "Janek";
//console.log(dog);
//
//
//dog.owner = function(){
//    console.log("Owner function");
//};
//
//console.log(dog);
//dog.owner();




//Zadanie1

/**
 * Program egzamin dzia³aj¹cy dla studenta i egzaminatora
 * @type {{imie: string, nazwisko: string, wiek: number, rok: number, przedmioty: string[], indeks: number[], zakuj: Function, odpowiedz: Function}}
 */

var student = {
    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 20,
    rok: 2,
    przedmioty: ["math", "statistics", "physics"],
    indeks: [4, 4],
    zakuj: function(){
        console.log(this.imie + " sie uczy");
    },
    odpowiedz: function(){
        console.log(this.imie + " odpowiada z " + egzaminator.przedmiot);
    }
};

var egzaminator = {
    imie: "Czeslaw",
    nazwisko: "Profesor",
    przedmiot: "math",
    pyta: function(){
        console.log(this.nazwisko + " zadaje pytanie " + student.imie);
    },
    ocen: function(){
        var ocena = (Math.floor(Math.random()*6+1));
        console.log(egzaminator.nazwisko + " wystawia ocene " + ocena);
        student.indeks.push(ocena);
        console.log(student.imie + " ma oceny: " + student.indeks.join("; "));
    }
};

var egzamin = {
    start: function(){
        console.log(student.imie + " " + student.nazwisko  + " i " + egzaminator.imie + " " + egzaminator.nazwisko);
        egzaminator.pyta();
        student.odpowiedz();
        egzaminator.ocen();
    }
};

egzamin.start();

//teraz student siê uczy
//teraz odpowiada
//
//teraz egzaminator pyta
//wstaw ocene - dopisuje losowa ocene miedzy 1 a 6
//powiedz cos o sobie - wszystkie przedmioty + wszystkie oceny