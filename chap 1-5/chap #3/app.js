function varinum1() {
    var age = 21;
    alert("I am " + age + " years old");

}

function varinum2() {
    function nameDefined(ckie, nme) {
        var splitValues
        var i
        for (i = 0; i < ckie.length; ++i) {
            splitValues = ckie[i].split("=")
            if (splitValues[0] == nme) return true
        }
        return false
    }

    function delBlanks(strng) {
        var result = ""
        var i
        var chrn
        for (i = 0; i < strng.length; ++i) {
            chrn = strng.charAt(i)
            if (chrn != " ") result += chrn
        }
        return result
    }

    function getCookieValue(ckie, nme) {
        var splitValues
        var i
        for (i = 0; i < ckie.length; ++i) {
            splitValues = ckie[i].split("=")
            if (splitValues[0] == nme) return splitValues[1]
        }
        return ""
    }

    function insertCounter() {
        readCookie()
        displayCounter()
    }

    function displayCounter() {
        // document.write('<H3 ALIGN="CENTER">')
        // document.write("You've visited this page ")
        // if (counter == 1) document.write("the first time.")
        // else document.write(counter + " times.")
        // document.writeln('</H3>')
        if (counter == 1) {
            document.getElementById("do").innerHTML = "You've visited this page the first time.";
        } else {
            var v = "You've visited this page" + counter + " times";
            document.getElementById("do").innerHTML = v;
        }
    }

    function readCookie() {
        var cookie = document.cookie
        counter = 0
        var chkdCookie = delBlanks(cookie) //are on the client computer
        var nvpair = chkdCookie.split(";")
        if (nameDefined(nvpair, "pageCount"))
            counter = parseInt(getCookieValue(nvpair, "pageCount"))
            ++counter
        var futdate = new Date()
        var expdate = futdate.getTime()
        expdate += 3600000 * 24 * 30 //expires in 1 hour
        futdate.setTime(expdate)

        var newCookie = "pageCount=" + counter
        newCookie += "; expires=" + futdate.toGMTString()
        window.document.cookie = newCookie
    }
    insertCounter();

}

function varinum3() {
    var birthYear = 1999;
    var type = typeof birthYear;
    document.getElementById("ss").innerHTML = "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + type;

}

function varinum4() {
    var customer = "John Doe";
    var order = "5 T-shirts";
    document.getElementById("p").innerHTML = "<b>" + customer + "</b>" + " ordered " + "<b>" + order + "</b>" + "(s) on XYZ Clothing store";
}