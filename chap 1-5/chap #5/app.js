function m1() {
    var a = 3,
        b = 5;
    document.getElementById("m1").innerHTML = "Sum of " + a + " and " + b + " is " + (a + b);
}

function m2() {
    var a = 3,
        b = 5;
    document.getElementById("m2").innerHTML = "Sum of " + a + " and " + b + " is " + (a - b) + "<br>" + "Multiplication of " + a + " and " + b + " is" + (a * b) + "<br>" + "Division of " + a + " and " + b + " is" + (a / b) + "<br>" + "Modulus of " + a + " and " + b + " is" + (a % b);
}

function m3() {
    var hmm;
    document.getElementById("m31").innerHTML = "Value after variable declaration is " + hmm;
    hmm = 5;
    document.getElementById("m32").innerHTML = "Initial value " + hmm;
    ++hmm;
    document.getElementById("m33").innerHTML = "Value after increment " + hmm;
    hmm += 7;
    document.getElementById("m34").innerHTML = "Value after addition " + hmm;
    --hmm;
    document.getElementById("m35").innerHTML = "Value after decrement " + hmm;
    hmm %= 3;
    document.getElementById("m36").innerHTML = "The reminder is " + hmm;

}

function m4() {
    var tik = 600;
    document.getElementById("m4").innerHTML = "Total cost to buy 5 tickets to a movie is " + (600 * 5) + " PKR";

}

function m5() {

    var button = document.getElementById('multiplication');

    var showTables = '';
    for (var i = 1; i < 11; i++) {
        showTables += 4 + "x" + i + "=" + 4 * i + '<br>';
    }
    var p_tables = document.getElementById('tables').innerHTML = showTables;
}

function m6() {
    var c = 25;
    document.getElementById("m6").innerHTML = c + " &#8451; is " + ((c * 9 / 5) + 32) + " &#8457;";
    var f = 70;
    document.getElementById("m61").innerHTML = f + " &#8457; is " + ((f - 32) * 5 / 9) + " &#8451";

}

function m7() {
    var item_1 = 650;
    var item_1_Q = 3;
    var item_2 = 100;
    var item_2_Q = 7;
    var s_charges = 100;
    document.getElementById("m7").innerHTML = "<h1>Shopping Cart </h1><br>Price of item 1 is " + item_1 + "<br>" + "Quantity of item 1 is " + item_1_Q + "<br>Price of item 2 is " + item_2 + "<br>" + "Quantity of item 2 is " + item_2_Q + "<br><br> Total cost of your order is " + ((item_1 * item_1_Q) + (item_2 * item_2_Q));
}

function m8() {
    var obt_marks = 804;
    var t_marks = 980;
    var percentage = (obt_marks * 100) / 980;
    document.getElementById("m8").innerHTML = "<h1>Mark Sheet</h1><br>Total marks: " + t_marks + "<br>Marks obtained: " + obt_marks + "<br>Percentage: " + percentage;
}

function m9() {
    var US_Dollar = 104.80;
    var Saudi_Riyal = 28;
    var US_Dollar_Q = 10;
    var Saudi_Riyal_Q = 25;
    var Pak_Rupee = (US_Dollar * US_Dollar_Q) + (Saudi_Riyal * Saudi_Riyal_Q);
    document.getElementById("m9").innerHTML = "<h1>Currency in PKR</h1><br>Total currency in PKR is " + Pak_Rupee;

}

function m10() {
    var choose = 10;
    var Choose = (((choose + 5) * 10) / 2);
    document.getElementById("m10").innerHTML = "Number is " + choose + " <br>After calculation it becomes " + Choose;
}

function m11() {
    var cur_year = 2020;
    var bir_year = 1999;
    var m_age = cur_year - bir_year;
    document.getElementById("m11").innerHTML = "<h1>Age Calculator</h1><br> Current yaer: " + cur_year + "<br>Birth year: " + bir_year + "<br>Your age " + m_age;
}

function m13() {
    var snack = "Pringles";
    var age = 20;
    var max_age = 63;
    var snacks_perDay = 3;
    document.getElementById("m13").innerHTML = "<h1>The Lifetime Supply Calculator</h1><br>Favourite Snacks: " + snack + "<br>Current age: " + age + "<br>Estimated Maximum Age(<b>Allah</b> knows only, its just a guess): " + max_age + "<br>Amount of snacks per day: " + snacks_perDay + "<br>You will need " + ((max_age - age) * snacks_perDay) + " " + snack + " to last you until the ripe old age of " + max_age;
}

function m12() {
    var radius = 20;
    var circumference_of_circle = 2 * 3.142 * radius;
    var area_of_circle = 3.142 * radius * radius;
    document.getElementById("m12").innerHTML = "<h1>The Geometrizer</h1><br>Radius of a circle: " + radius + "<br>The Circumference is: " + circumference_of_circle + "<br>The Area is: " + area_of_circle;
}