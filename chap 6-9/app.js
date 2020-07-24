function k1() {
    var a = 10;
    document.getElementById("k1").innerHTML = "Result:<br>The value of a is : " + a + "<br>----------------------<br><br>the value of ++a is : " + (++a) + "<br>Now the value of a is : " + a + "<br><br>The value of a++ is : " + (a++) + "<br>Now the value of a is : " + a + "<br><br>The value of --a is : " + (--a) + "<br>Now the value of a is : " + a + "<br><br>The value of a-- is : " + (a--) + "<br>Now the value of a is : " + a;
}

function k2() {
    var a = 2,
        b = 1;
    var result = --a - --b + ++b + b--;
    document.getElementById("k2").innerHTML = "a  is " + a + "<br>b is " + b + "<br>Result is " + result;
}

function k3() {
    var greet = prompt("Enter Your name");
    alert("Asslam-o-Alikum " + greet)
}

function table(num) {

    var button = document.getElementById('multiplication');

    var showTables = '';
    for (var i = 1; i < 11; i++) {
        showTables += num + "x" + i + "=" + num * i + '<br>';
    }
    var p_tables = document.getElementById('k4').innerHTML = showTables;
}

function k4() {
    var num = prompt("Enter Number");
    if (num != "") {
        num = Number(num);
        table(num);
    } else {
        num = 5;
        table(5);
    }
}

function k5() {
    var sub1 = prompt("Enter subject-1 name");
    var sub2 = prompt("Enter subject-2 name");
    var sub3 = prompt("Enter subject-3 name");
    var total = 100;
    var m_sub1 = Number(prompt("Enter Obtain marks for " + sub1))
    var m_sub2 = Number(prompt("Enter Obtain marks for " + sub2))
    var m_sub3 = Number(prompt("Enter Obtain marks for " + sub3))
    var obt_tot = m_sub1 + m_sub2 + m_sub3;
    var g_tot = 300;
    var per_tot = (obt_tot / g_tot) * 100;
    document.getElementById("k5").innerHTML = "<table><tr><td><center><strong> Subjects </strong></center></td><td><center><strong> Total Marks </strong></center></td><td><center><strong> Obtained Marks </strong></center></td><td><center><strong> Percentage </strong></center></td></tr><tr><td><center> " + sub1 + "</td><td><center> " + total + " </center></td><td><center> " + m_sub1 + " </center></td><td><center> " + ((m_sub1 / 100) * 100) + "%" + " </center></td></tr><tr><td><center> " + sub2 + " </center></td><td><center> " + total + " </center></td><td><center> " + m_sub2 + " </center></td><td><center> " + ((m_sub2 / 100) * 100) + "%" + " </center></td></tr><tr><td><center> " + sub3 + " </center></td><td><center> " + total + " </center></td><td><center> " + m_sub3 + " </center></td><td><center> " + ((m_sub3 / 100) * 100) + "%" + " </center></td></tr><tr><td><center><strong><strong></center></td><td><center><strong>" + g_tot + "<strong></center></td><td><center><strong>" + obt_tot + "<strong></center></td><td><center><strong>" + per_tot + "%" + "<strong></center></td></tr></table>"

}