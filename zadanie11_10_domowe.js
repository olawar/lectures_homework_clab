/**
 * Created by Awar on 2015-10-11.
 */
// zadanie 12



var n=3;
var html = "";
for(var i = 1; i <= n; i++) {
    html = html + "<tr>";
        for(var j = 1; j <= n; j++) {
        var value = 1;
        value = i * j;
            html = html + "<td>" + i + "*" + j + " = " + value + "</td>";
    }
    html = html + "</tr>";
}
//console.log(html);
var table = document.getElementById("task");
table.innerHTML = html;



/*
n=3;
for(var i = 1; i <= n; i++) {
    var value1 = 1;
    value1 = i * 1;
    console.log( i + " * 1 = " + value1); {
        for(var j = 2; j <= n; j++) {
            var value2 = 1;
            value2 = value1 * j;
            console.log(value1 + "*" + j + " = " + value2 );
        }
    }
}
*/


/*
n=3;
for(var i = 1; i <= n; i++) {
    var value1 = 1;
    value1 = i;
    console.log(i + " * 1 = " + value1);
    }
for(var j = 1; j <= n; j++) {
    var value2 = 1;
    value2 = 2 * j;
    console.log(j + " * 2 = " + value2);
}
*/
