/**
 * Created by Awar on 2015-10-12.
 */

/*

//przyklady z zajec - zmienne
var table = ["ala", "ma", 13];
var table2 = new Array("inna", "tablica", 15);
// ten drugi to starszy zapis, potrzebny jest raczej przy pracy na obiektach (dziedziczenie, prototypy)

console.log(table);
console.log(table2);

//to jest konkatenacja:
console.log("Element 2 tablicy to: " + table[1]);
table[1] = "cos innego";
console.log("Element 2 tablicy to: " + table[1]);

//dziura miêdzy 3-5 - te elementy nie istniej¹
table[6] = "cos innego2";
console.log(table);


var mercedes = {
    numOfDoors: 5,
    hp: 150,
    plates: "AUM45678",
    color: "red"
};

console.log(mercedes);
console.log(mercedes.numOfDoors);
//przypisanie nowej wartosci
mercedes.color = "green";
console.log(mercedes);

//Zadanie 1
var tekst1 = "To jest string";
var liczba1 = 2;
var boolean1 = true;
var tablica1 = ["Ala", "Ola", 23];
var samochod = {
    marka: "Peugeot",
    model: "208",
    numOfDoors: 5
};
var foo = null;

//Zadanie 2
console.log(liczba1 + samochod.numOfDoors);
console.log(tablica1[2] + tekst1);
console.log(typeof "Ala");
console.log(typeof (tablica1[2] + tekst1));
console.log(typeof (liczba1 + tablica1[2]));
console.log(typeof (liczba1 + tablica1[0]));
console.log(typeof (tablica1[0] + liczba1));
console.log(typeof (samochod.numOfDoors + tablica1[2]));

//Zadanie 3

var zmienna = 2;
var zmienna = "Ala ma kota";

//nie da sie wywolac pierwszej - druga ja nadpisala
console.log(zmienna);

//Zadanie 4

var basket = ["mango", "apple", "orange"];
console.log(basket[0], basket[2]);

//Zadanie 5
var car = {
    marka: "Peugeot",
    model: "208",
    numOfDoors: 5
};

// Math - w tych funkcjach podajemy tylko liczby!!! Mog¹ to byæ konkretne pozycje z tablicy, ale nie ca³a tablica

var abs4 = Math.abs(-4);
console.log(abs4);

var table2 = [2,5,7,3,-7,10,456];
var min = Math.min(2,5,7,3,-7,10,456);
console.log(min);

var min2 = Math.min(Math.abs(2,5,7,3,-7,10,456));
console.log(min2);

var max = Math.max(table2[0], table2[5], parseInt("76"));
console.log(max);

var pow2 = Math.pow(2,5);
console.log(pow2);

console.log(Math.sqrt(9));


//zadanie 1

console.log(Math.random()(20 - 2 + 1) + 2);
console.log(Math.floor(Math.random(20 - 2 + 1) + 2));

//zadanie 2
console.log(Math.pow(2,3));

//zadanie 3

console.log(Math.sqrt(10));
console.log(Math.floor(Math.sqrt(10)));

*/
/*
// Stringi - pozycjê znaku liczymy od 0

var napis = "To jest moj napis. To jest inne zdanie. 3cie zdanie.";
var literka = napis.charAt(5);
console.log(literka);

var foo = napis.indexOf("moj");
console.log(foo);
// zwraca pierwsze wystapienie
var bar = napis.indexOf("To");
console.log(bar);

//chyba ze dodamy drugi warunek
var baz = napis.indexOf("To", 4);
console.log(baz);

var position = 0;
while(position != -1) {
    position = napis.indexOf(".", position + 1);
    if(position !=-1) {
        console.log("Kropka jest na pozycji " + position);
    }
}

var napis2 = "Ala ma kota";
var napis3 = napis2.replace("Ala", "Maciek");
console.log(napis2);
console.log(napis3);

console.log(napis2.slice(0,4));
console.log(napis2.substr(0,6));

var napis4 = "Ala, ma, kota, 153";
var napis5 = napis4.split(", ");
var napis6 = napis4.split(", ", 3);
console.log(napis5);
console.log(napis6);
*/

/*
//zadanie 1
var zdanie = "Mam ochote na burgera";
var zdanie2 = zdanie.replace("burgera", "salate");
console.log(zdanie2);

//zadanie 2
var kontakt = "kontakt@coderslab.pl";
var kontakt2 = kontakt.split("@");
console.log(kontakt2);

//zadanie 3
var mysl = "Myslenie nie jest latwe, ale mozna sie do niego przyzwyczaic.";
var lat = mysl.indexOf("latwe");
console.log(lat);
console.log(mysl.substr(18, 5));

//zadanie 4
var akapit = "Puchatek spojrza³ na obydwie ³apki. Wiedzia³, ¿e jedna z nich jest prawa, i wiedzia³ jeszcze, ¿e kiedy ju¿ siê ustali³o, która z nich jest prawa, to druga by³a lew¹, ale nigdy nie wiedzia³, jak zacz¹æ.";
var akapit2 = akapit.toUpperCase();
console.log(akapit2);

*/

//zdanie 5 - funkcja, która odwraca dany napis


/*
var sent = "Ala ma kota";
console.log(sent.length);
var position = 10;
while(position > -1) {
    position = position - 1;
    if (position > -1) {
        console.log(sent.charAt(position));
    }
}

*/

/*
var sent = "Ala ma kota";
var result = "";
for( var i = sent.length -1; i >= 0; i = i-1){
    result = result + sent.charAt(i);
}
console.log(result);

*/


//Operatory

/*
var foo1 = 6;
var bar = "4";

var baz = foo1-bar;
console.log(typeof baz);
console.log(baz);
*/


/*
var foo = 0;

//post inkrementacja

foo=foo+1;
console.log(foo); // foo = 1
foo++
var bar = foo++;
console.log(foo); //foo = 2
console.log(bar); //foo = 1

//pre inkrementacja - przed przypisaniem do nowej wartoœci
    ++foo

//post dekrementacja
foo--
*/

/*
//operator warunkowy

var foo = false;
var bar = (!foo === true) ? "Foo jest prawda" : "foo jest false";
console.log(bar);

*/
/*
//Zadanie 1

var foo = "5";
var bar = "2";
var baz = foo + bar;
console.log(baz);

var baz2 = foo - bar;
console.log(baz2);
*/

function junction(word1, word2) {
    console.log(word1 + word2);
}

junction("Ola", "Ada");


    /*
//Zadanie 2

var number1 = "34";
var number2 = 34;

console.log(number1 == number2);
console.log(number1 === number2);


//Zadanie 3
console.log(!(4<2));
console.log(!(!(4<2)));

//Zadanie 4
*/
/*

var i = Math.floor(Math.random() *20 + 1);
var j = ((i%2 == 0) && (i > 5)) ? i : "to jest liczba nieparzysta";
console.log(j);

*/

//Funkcje

/*
var bar = function() {
    console.log(arguments);
};

bar();
bar("Ala");
bar("ala", 4, 5, 6);
bar("Ala", true, -2, null);

function myMax() {
    if(arguments.length === 0) {
        return undefined;
    }
    if (arguments.length === 1) {
        return arguments[0];
    }
    var max = arguments[0];
    for(var i=0; i<arguments.length; i++) {
        if(max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}


var foo = myMax(1,4,6,7,9,23,56, 101, 23);
console.log(foo);

*/

/*

//to jest wyra¿enie funkcyjne, nie mo¿na jej wywo³aæ wczeœniej ni¿ pojawi siê zapis
var foo = function() {
    console.log("Funkcja foo");
};


//to jest funkcja, mozna j¹ wywo³aæ w ka¿dym miejscu dokumentu, bo JS przenosi sobie funkcje na sam¹ góre
function bar() {
    console.log("Funkcja bar");
};

bar();
foo();

*/

//Zadanie 1

/**
 * adds three numbers
 * @param a,b,c numbers
 * @return number
 */

/*

function add(a, b, c) {
    var suma = a+b+c;
    return suma;
}
*/
/*
function add(a, b, c) {
    return a+b+c;
}

console.log(add(5,6,7));
*/

//Zadanie 2
/**
 * adds 3 numbers wu=ithin an array
 * @param 3 number array
 * return number
 */

/*
function addArrayElements(a) {
        return a[0] + a[1] + a[2];
 }

console.log(addArrayElements(a=[6,2,3]));
*/
//Zadanie 3
/**
 * function that writes down a given sentence
 * it repeats itself 10 times
 */

/*
var wypisuje = function() {
    for(var i=1; i <= 10; i++) {
        console.log("cos tam");
    }
}

wypisuje();

*/
//Zadanie 4
