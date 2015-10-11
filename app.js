/**
 * Created by Awar on 2015-10-05.
 */
//console.log("Hello world");
/*
dzisiaj testujemy JS
 */


/*var dzien = 31;

if(dzien < 31){
    console.log(dzien + " mniejsza od 31");
}
else if (dzien > 31){
    console.log(dzien + " wieksza od 31");
}
else{
    console.log("dzis jest " + dzien);
}
console.log("Koniec");
*/

/*
//zadanie 4
var liczba1 = 15;
var liczba2 = 20;
var liczba3 = 30;

if(liczba1 > liczba2){
    if(liczba1 > liczba3){
        console.log("liczba 1 jest najwieksza");
    }
    else{
        console.log("liczba 3 jest nawieksza");
    }
}
else if(liczba2 > liczba3) {
        console.log("liczba 2 jest najwieksza");
    }
else {
    console.log("liczba 3 jest najwieksza")
}
*/

/*
//zadanie 5
var wynik = 65;

if(wynik < 40){
    console.log(wynik + " ocena niedostateczna");
}
else if(wynik < 55){
    console.log(wynik + " ocena dopuszczajaca");
}
else if(wynik < 70){
    console.log(wynik + " ocena dostateczna");
}
else if(wynik < 85){
    console.log(wynik + " ocena dobra");
}
else if(wynik < 99){
    console.log(wynik + " ocena bardzo dobra");
}
else if(wynik < 101){
    console.log(wynik + " ocena celujaca");
}
else{
    console.log("Zly wynik");
}
*/

/*
var i = 0;
while(i < 10){
    console.log("Wartosc i = " + i);
    i = i + 1;
}
console.log("koniec while")


for(var j = 0; j < 10; j = j + 1){
    console.log("Wartosc j = " + j);
}
console.log("koniec for");
*/

/*
// zadanie 6
var l = Math.floor(Math.random() * (20));
while (l != 10){
    console.log("Zla liczba: " +l);
    l = Math.floor(Math.random() * (20));
  }
console.log("Dobra liczba: " + l);
*/

/*
//zadanie 7
var n = 50;
var silnia = 1;

for(var i = 1; i <= n; i = i + 1){
    console.log(i);
    silnia = silnia * i;
}
console.log(silnia);


var m = 1;
var silnia2 = 1;
while(m<=n){
    console.log(m);
    silnia2 = silnia2 * m;
    m=m+1;
}
console.log(silnia2);
*/

/*
// zadanie 8
var x = 5;
var y = 10;
var suma = 0;
for(var i = x; i <= y; i = i + 1){
    console.log(i);
    suma = suma + i;
    }
console.log(suma);
*/


// niezalezny
/*
var line;
for(var i = 0; i < 10; i = i + 1){
    line = i + ": ";
    for(var j = 0; j < 5; j=j+1) {
        line = line + " " + j;
    }
    console.log(line);
    }

*/
//zalezny

/*
var line2;
for(var i2 = 0; i2 < 10; i2 = i2 + 1){
    line2 = i2 + ": ";
    for(var j2 = i2 ; j2 < 5; j2=j2+1) {
        line2 = line2 + " " + j2;
    }
    console.log(line2);
}
*/

/*
//zadanie 9
var n = 7;
var line;
for(var i = n; i >= 1; i = i - 1){
    line = "";
    for(var j = i; j <= n; j = j + 1) {
        line = line + " *";
       }
 console.log(line);
}
for(var i = 1; i <= n; i = i + 1){
    line = "";
    for(var j = i; j <= n; j = j + 1) {
        line = line + " *";
    }
    console.log(line);
}
*/

/*
//zadanie 10
var n = 5
var line;
for(var i = 1; i <= n; i = i + 1){
    line = " ";
    for(var j = 1; j <= n; j = j + 1) {
        if(j <= i) {
            line = line + " *";
        }
        else {
            line = line + " " + j;
        }
    }
    console.log(line);
}
for(var i = n; i >= 1; i = i - 1){
    line = " ";
    for(var j = 1; j <= n; j = j + 1) {
        if(j <= i) {
            line = line + " *";
        }
        else {
            line = line + " " + j;
        }
    }
    console.log(line);
}
*/

//zadanie 11 - licz¹c od n do zera sprawdzam czy j >= i i wtedy zastêpujê je spacj¹

//rozwiazanie 1 - osobna pêtla na ostatni¹ liniê
/*
var n = 9
var line;
for(var i = n; i >= 1; i = i - 1){
    line = " ";
    for(var j = 1; j <= n; j = j + 1) {
        if(j > i) {
            line = line + "  ";
        }
        else {
            line = line + " " + j;
        }
    }
    for(var k = n-1; k >= 1 ; k = k - 1) {
        if(k > i) {
            line = line + "  ";
        }
    else {
            line = line + " " + k;
        }
    }
    console.log(line);
}
for(var l = 1; l > 0; l = l - 1) {
    line = " ";
    for(var m = 1; m <= n; m = m + 1) {
        line = line + " " + m;
    }
    for(var o = n-1; o >= 1 ; o = o - 1) {
        line = line + " " + o;
    }
    console.log(line);
}

//rozwiazanie 2 - dwa warunki w if
var n = 9
var line;
for(var i = n; i >= 0; i = i - 1){
    line = " ";
    for(var j = 1; j <= n; j = j + 1) {
        if(j > i && i>0) {
            line = line + "  ";
        }
        else {
            line = line + " " + j;
        }
    }
    for(var k = n-1; k >= 1 ; k = k - 1) {
        if(k > i && i>0) {
            line = line + "  ";
        }
        else {
            line = line + " " + k;
        }
    }
    console.log(line);
}
 */


// zadanie 13

/*
var n=1000000
var myPi = 0;
for(var i=1; i<=n; i = i + 1) {
    if(i%2 == 0) {
        myPi = myPi - (1/(2*i-1));
    }
    else {
        myPi = myPi + (1/(2*i-1));
    }
}
console.log(4 * myPi);

console.log(Math.PI);

console.log(Math.PI - (4* myPi));
*/

//zadanie 14

//sama pêtla
/*
var x = 30;
for (var i = 1; i <= x; i++) {
    if (i %3 == 0 && i % 5 == 0) {
        console.log("FooBar");
    }
    else if (i % 3 == 0) {
        console.log("Foo");
    }
    else if (i % 5 == 0) {
        console.log("Bar");
    }
    else {
        console.log(i);
    }
}
*/

//funkcja

/*
function FooBar(x) {
    var val = "";
    for (var i = 1; i <= x; i++) {
        if (i %3 == 0 && i % 5 == 0) {
            val = val + " " + "FooBar";
        }
        else if (i % 3 == 0) {
           val = val + " " + "Foo";
        }
        else if (i % 5 == 0) {
            val = val + " " + "Bar";
        }
        else {
            val = val + " " + i;
        }
    }
    console.log(val);
}

FooBar(30);
*/

//zadanie 16

/*
function power1(a,b) {
    var value = 1;
    for(var i=1; i <= b; i++) {
        value = value*a;
    }
    console.log(value);
}

power1(5,4);

*/

/*
function power(a,b) {
    var val = Math.pow(a,b);
    console.log(val);
}

power(2,3);
*/

//zadanie 17

/*
function isItPrime(n) {
    var isPrime = true;
    var value;
    for(var x=2; x<n; x++) {
        if (n % x == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n + " jest liczba pierwsza");
    }
    else {
        console.log(n + " nie jest liczba pierwsza");
    }
}

isItPrime (1000000);
*/


//zadanie*

//iteracja
/*
function fib(n) {
    var a = 0, b = 1, c = 1;
    for(var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
    return c;
}
console.log(fib(10));
*/


/*
function fib(n) {
    var a = 0, b = 1, c = 1;
    for (var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}

fib(10);
*/

//rekurencja

/*
function fib2(m) {
   if(m <= 2) {
       return 1;
   }
    else {
       return this.fib2(m - 1) + this.fib2(m - 2);
       }
   }
console.log(fib2(3));
*/


//zadanie**

/*
function silnia(x) {
    var silnia = 1;
    for(var i = 1; i <= x; i = i + 1){
        silnia = silnia * i;
    }
    return(silnia);
}

function power(x,b) {
    var value = 1;
    for(var j=1; j <= b; j++) {
        value = value*x;
    }
    return(value);
}

*/
/*
//robocza
function mySin(x){
    var iterNum = 5;
    var mySin = x;
    for(var k=2; k<=iterNum; k = k + 1) {
        if(k%2 == 0) {
            console.log("-");
            console.log (2*k-1);
            mySin = mySin - ( power(x, (2*k-1) ) / silnia(2*k-1) );
        }
        else {
            console.log("+");
            console.log (2*k-1);
            mySin = mySin + (power(x,(2*k-1))/silnia(2*k-1));
        }
    }
    console.log(mySin);
}
*/

/*
//finalna
function mySin(x, iterNum){
    var mySin = x;
    for(var k=2; k<=iterNum; k = k + 1) {
        if(k%2 == 0) {
            mySin = mySin - ( power(x, (2*k-1) ) / silnia(2*k-1) );
        }
        else {
            mySin = mySin + (power(x,(2*k-1))/silnia(2*k-1));
        }
    }
    console.log(mySin);
}
*/
/*
//robocza
function myCos(x){
    var iterNum = 5;
    var myCos = 1;
    for(var k=2; k<=iterNum; k = k + 1) {
        if(k%2 == 0) {
            console.log("-");
            console.log (2*k-2);
            myCos = myCos - ( power(x, (2*k-2) ) / silnia(2*k-2) );
        }
        else {
            console.log("+");
            console.log (2*k-2);
            myCos = myCos + (power(x,(2*k-2))/silnia(2*k-2));
        }
    }
    console.log(myCos);
}
*/

/*
function myCos(x, iterNum){
    var myCos = 1;
    for(var k=2; k<=iterNum; k = k + 1) {
        if(k%2 == 0) {
            myCos = myCos - ( power(x, (2*k-2) ) / silnia(2*k-2) );
        }
        else {
            myCos = myCos + (power(x,(2*k-2))/silnia(2*k-2));
        }
    }
    console.log(myCos);
}

mySin(3.14159265/2, 5);

myCos(3.14, 5);


console.log(Math.sin(3.14159265/2));
console.log(Math.cos(3.14159265));

*/

//zadanie***


/*
function sumFactors(x) {
    var sum = 0;
    for(var i = 1; i < x; i++) {
        if( x % i == 0) {
            sum = sum + i;
        }
    }
    return sum;
}

function isNumberPerfect(x) {
    if(sumFactors(x) == x) {
        console.log(x + " to jest liczba doskonala");
    }
    else if (sumFactors(x) < x) {
        console.log(x + " to jest liczba niekompletna");
    }
    else {
        console.log(x+ " to nie jest zadna z nich");
    }
}


function areNumbersPerfect (x) {
    for(var j=1; j <= x; j++) {
        isNumberPerfect(j);
    }
}

areNumbersPerfect(100);

    */