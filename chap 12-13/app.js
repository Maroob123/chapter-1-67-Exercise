function show1() {
    var user_try = prompt("Enter String")
    var num=0;
    var cap_letter=0;
    var sm_letter=0;
    var sam_num="0123456789";
    var sam_cap_letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var sam_sm_letter="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<=sam_num.length;i++){
        for(var j=0;j<=sam_num.length;j++){
             if(user_try.charCodeAt(i) === sam_num.charCodeAt(j)){
            num=num+1;
        }
       
        }
    }
    for(var y=0;y<=sam_sm_letter.length;y++){
        for(var k =0;k<=sam_sm_letter.length;k++){
             if(user_try.charCodeAt(y) === sam_sm_letter.charCodeAt(k)){
            sm_letter=sm_letter+1;
        }
         if(user_try.charCodeAt(y) === sam_cap_letter.charCodeAt(k)){
            cap_letter=cap_letter+1;
        }
        }
       
    }
    alert("The string you have entered includes \n Numbers = "+num+"\nCapital Alphabet = "+cap_letter+"\nSmall Alphabet = "+sm_letter)
}

function show2() {
    var user1 = Number(prompt("Enter first number"))
    var user2 = Number(prompt("Enter second number"))
    if (user1 > user2) {
        alert(user1 + " is graeter than " + user2)
    } else if (user2 > user1) {
        alert(user2 + " is graeter than " + user1)
    } else {
        alert("both the values are equal")
    }
}


function show3() {
    var num = Number(prompt("Enter number"))
    if (num > 0) {
        alert("Number is positive")
    } else if (num < 0) {
        alert("Number is positive")
    } else {
        alert("Number is zero")
    }
}

function show4() {
    var char = prompt("Enter Character")
    if (char === "a") {
        alert("true")
    } else if (char === "e") {
        alert("true")
    } else if (char === "i") {
        alert("true")
    } else if (char === "o") {
        alert("true")
    } else if (char === "u") {
        alert("true")
    } else {
        alert("false")
    }
}

function show5() {
    var password = "shahsahab#786";
    var check = prompt("Enter your password")
    if (password === check) {
        alert("Correct")
    } else if (check === "") {
        alert("Please Enter your password")
    } else {
        alert("incorrect password")
    }
}

function show6() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting)
    } else {
        greeting = "Good evening";
        alert(greeting)
    }
}

function show7() {
    var input = Number(prompt("Enter time as input like:1900\nDont use collons(:)"))
    if (input > 1200) {
        input -= 1200;
        alert((1200 + input) + " = " + input + " P.M")
    } else if (input === 0) {
        alert(input + " = 12 A.M")
            // input /= 100;
            // alert(input + " = " + input + " A.M")
    } else {
        input /= 100;
        alert((input * 100) + " = " + input + " A.M")
            // alert(input + " = 12 A.M")
    }

}