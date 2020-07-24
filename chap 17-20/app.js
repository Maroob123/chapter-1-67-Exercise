function disp1() {
    var emparr = [[], [], []];
    document.getElementById("disp1").innerHTML = "var emparr = [[],[],[]];";
}
// function disp2(){

// }
function disp3() {
    var co = "";
    for (var i = 1; i <= 10; i++) {
        co = co + i + "<br>";
    }
    document.getElementById("disp3").innerHTML = co;
}
function disp4() {
    var tt = "";
    var mul = "";
    var tab = prompt("Enter a number to show its multiplication")
    var l = prompt("Enter Length of table")
    for (var j = 1; j <= l; j++) {
        mul = tab * j;
        tt += tab + " x " + j + " = " + mul + "<br>";
    }
    document.getElementById("disp4").innerHTML = "Multiplication table of " + tab + "<br>Length " + l + "<br>" + tt;
}
function disp5() {
    var ss = "";
    var vv = "";
    var fArr = ["apple", "banana", "mango", "orange", "strawberry"];
    for (var f = 0; f <= fArr.length; f++) {
        ss = ss + fArr[f] + "<br>";
        vv = vv + "Element of Index " + f + " is " + fArr[0] + "<br>";
    }
    document.getElementById("disp5").innerHTML = ss + "<br>" + vv;

}
function disp6() {
    var co = "";
    var rco = "";
    var ev = "";
    var od = "";
    var sr = "";
    for (var Co = 1; Co <= 15; Co++) {
        co = co + Co + " , ";
    }
    for (var revco = 10; revco >= 0; revco--) {
        rco = rco + revco + " , ";
    }
    for (var Ev = 0; Ev <= 20; Ev += 2) {
        ev = ev + Ev + " , ";
    }
    for (var Od = 1; Od <= 20; Od += 2) {
        od = od + Od + " , ";
    }
    for (var Sr = 2; Sr <= 20; Sr += 2) {
        sr = sr + Sr + "k,";
    }
    console.log(rco)
    document.getElementById("disp6").innerHTML = "<h3>Counting</h3><br>" + co + "<br><h3>Reverse Counting</h3><br>" + rco + "<br><h3>Even</h3><br>" + ev + "<br><h3>Odd</h3><br>" + od + "<br><h3>Series</h3><br>" + sr;
}
function disp7() {
    var shop = prompt("Welcome to ABC Backery What do You want to order\n sir \\ ma'am ?");
    shop = shop.toLowerCase()
    var array = ["cake", "apple pie", "cookie", "chips", "patties"]
    for (var i = 0; i < array.length; i++) {
        if (array[i] === shop) {
            document.getElementById("disp7").innerHTML=array[i]+ " is <strong>avaliable</strong> at index "+ i + " in our backery";
            break
        }
    }
    if (array.indexOf(shop) === -1) {
        document.getElementById("disp7").innerHTML="We are sorry. "+ shop +" is <strong>not avaliable</strong> in our backery";
    }
}
function disp8() {
    var temp = 0;
    var A = [24, 53, 78, 91, 12];
    for (var g = 0; g <= A.length; g++) {
        if (temp < A[g]) {
            temp = A[g];
        }
    }
    document.getElementById("disp8").innerHTML = "Array Items = " + A + "<br>The largest Number is " + temp;
}
function disp9() {
    var z = [24, 53, 78, 91, 12];
    let max = Number.MAX_VALUE;
    for (let n of z) {
        if (n < max) {
            max = n;
        }
    }
    document.getElementById("dis9").innerHTML = "Array Items = " + z + "<br>The Smallest Number is " + max;
}
function disp10() {
    var five = "";
    for (var n = 5; n <= 100; n += 5) {
        five = five + n + " , ";
    }
    document.getElementById("disp10").innerHTML = five;
}
