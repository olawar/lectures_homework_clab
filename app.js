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
    silnia2 = silnia2*m;
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
var n = 5;
var line;
for(var i = n; i >= 1; i = i - 1){
    line = "";
    for(var j = 0; j < n; j = j + 1) {
        line = line + " "+ j;
    }
    console.log(line);
}
*/
var n= 5;
var line;
for(var i = 1; i <= n; i = i + 1){
    line = "";
    for(var j = 1; j <= n; j = j + 1) {
        if(j <= i) {
            console.log(line = line + " *");
        }
        else {
            console.log(line = line + " " + j);
        }
    }
}
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