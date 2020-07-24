
function pow(a, b) {
    var ext = Math.pow(a, b);
    document.getElementById("c").innerHTML = "<strong>Answer = </strong>" + ext;
}
function now() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    a = Number(a);
    b = Number(b);
    pow(a, b);
}

function leapYear() {
    var year = document.getElementById("leapyear").value;
    year = Number(year);
    if (year % 4 === 0) {
        document.getElementById("c1").innerHTML = "Year " + year + " is a leap year";
    }
    else {
        document.getElementById("c1").innerHTML = "Year " + year + " is not a leap year";
    }
}

function calculateS(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    var s = (a + b + c) / 2;
    return s;
}

function triArea() {
    var a = document.getElementById("side1").value;
    var b = document.getElementById("side2").value;
    var c = document.getElementById("side3").value;
    var S = calculateS(a, b, c);
    var area = S * (S - a) * (S - b) * (S - c);
    document.getElementById("c2").value = area;
}

function Averag(j, m, n) {
    var avg = (j + m + n) / 3;
    return avg;
}

function percentage(j, m, n) {
    var per = ((+j + m + n) / 300) * 100;
    return per;
}

function mainFunction() {
    var j = document.getElementById("sub1").value;
    var m = document.getElementById("sub2").value;
    var n = document.getElementById("sub3").value;
    j = Number(j);
    m = Number(m);
    n = Number(n)
    var perc = percentage(j, m, n).toFixed(2);
    var av = Averag(j, m, n).toFixed(2);
    document.getElementById("c3").value = av;
    document.getElementById("c31").value = perc + "%";
}

;
function indexOF() {
    var str = document.getElementById("st").value.toLowerCase()
    var cha = document.getElementById("ch").value;
    var kl = 0;
    var i = 0;
    while (i <= str.length) {
        if (cha === str[i]) {
            document.getElementById("c4").value = kl;
            break;
        }
        else {
            kl++;
            i++;
        }
    }
}

function delVowel() {
    var stri = document.getElementById("vow").value;
    var vowels = "aeiou";
    var strArr = stri.toLowerCase().split("");
    var newArr = strArr.filter(function (letter) {
        if (vowels.indexOf(letter) == -1) {
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function (letter) {
        string += letter;
    });
    // return string;
    document.getElementById("c5").value = string;
}

function findOccurrences() {
    var st = "Pleases read this application and give me gratuity";
    var chars = st.toLowerCase().split("");
    var count = 0;
    for (var i = 0; i < chars.length - 1; i++) {
        var char = chars[i];
        var next = chars[i + 1];

        if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
            count++;
        }
    }
    document.getElementById("c6").innerHTML = "<strong>The Number of occurrences are = </strong>" + count;
}

function isCorrectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}


function calCm(meas) {
    var cm = meas * 1000 * 100;
    document.getElementById("c71").innerHTML = "<strong>Converted Distance in Centimeters = </strong>" + cm;
}
function calInch(meas) {
    var inc = meas * 39370.08;
    document.getElementById("c72").innerHTML = "<strong>Converted Distance in Inches = </strong>" + inc;
}
function calMeter(meas) {
    var met = meas * 1000;
    document.getElementById("c73").innerHTML = "<strong>Converted Distance in Meters = </strong>" + met;
}
function calfeets(meas) {
    var fe = meas * 3280.84;
    document.getElementById("c74").innerHTML = "<strong>Converted Distance in Feets = </strong>" + fe;
}

function showmeasurment() {
    var meas = document.getElementById("takeinp").value;
    meas = Number(meas);
    calCm(meas);
    calInch(meas);
    calMeter(meas);
    calfeets(meas);
}

function overtime(){
    var otime = document.getElementById("whour").value;
    otime = Number(otime);
    if(otime>40){
        overtime = otime - 40;
        var pay = overtime *12.00;
        document.getElementById("overtime").innerHTML="Employee Overtime pay is ="+pay;
    }
    else{
        document.getElementById("overtime").innerHTML="You have to work for more than 40 hours to get over time pay";
    }
}

function amount(){
    var cash = document.getElementById("amount").value;
    cash = Number(cash);
    var hundred = Math.floor((cash/100));
    var fifty = Math.floor(((cash%100)/50));
    var ten = Math.floor((((cash%100)%50)/10));
    var remaining = Math.floor((((cash%100)%50)%10));
    document.getElementById("notes").innerHTML="<strong>Required notes of Rs. 100  : </strong>"+hundred+"<br><br><strong>Required notes of Rs. 50   : </strong>"+fifty+"<br><br><strong>Required notes of Rs. 10   :  </strong>"+ten+"<br><br><Strong>Amount still remaining Rs. :  </strong>"+remaining;
}