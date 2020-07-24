function one() {
    var city = prompt("Enter City Name");
    if (city === "karachi") {
        alert("Welcome to the city of lights")
    }
}

function two() {
    var gender = prompt("Enter gender");
    if (gender === "male") {
        alert("Good Morning Sir.!");
    }
    if (gender === "female") {
        alert("Good Morning Ma’am!");
    }
}

function three() {
    var color = prompt("Enter Signal Color");
    if (color === "red") {
        alert("Must Stop");
    }
    if (color === "yellow") {
        alert("Ready yo move");
    }
    if (color === "green") {
        alert("Move Now");

    }

}

function four() {
    var fuel = prompt("Input Remaining Fuel in car (in liters)");
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    }
}

function five_1() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}

function five_2() {
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
}

function five_3() {
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
}

function five_4() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
}

function five_5() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
}

function five_6() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}

function Six() {
    var marks_obt = prompt("Enter Obtained Marks");
    var grade = '';
    var remarks = '';
    var tot_marks = 300;
    var percentage = (marks_obt / tot_marks) * 100;
    if (percentage >= 80) {
        grade = 'A-One';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'A';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'B';
        remarks = 'You need to improve';
    } else if (percentage < 60) {
        grade = 'Fail';
        remarks = 'Sorry';
    }

    document.getElementById("six").innerHTML = "<h1>Mark Sheet</h1><br>Total Marks : " + tot_marks + "<br>Marks Obtained : " + marks_obt + "<br>Percentage : " + percentage + "<br>Grade : " + grade + "<br>Remarks : " + remarks;
}

function seven() {
    var user_guess = prompt("Enter number between 1-10");
    user_guess = Number(user_guess);
    var guess = Math.random() * 10;
    guess = (Math.floor(guess)) + 1;
    if (user_guess === guess) {
        alert("Bingo! Correct answer")
    } else if (user_guess === guess + 1) {
        alert("Close enough to the correct answer")
    } else {
        seven();
    }
}

function eight() {
    var your_number = prompt("Enter Number");
    your_number = Number(your_number);
    if (your_number % 3 === 0) {
        alert("The Number you Entered " + your_number + " is divisible by 3");
    } else if (your_number % 3 != 0) {
        alert("The Number you Entered " + your_number + " is not divisible by 3");
    }
}

function nine() {
    var yourNumber = Number(prompt("Enter Number"));
    if (yourNumber % 2 === 0) {
        alert("The Number you entererd is even");
    } else {
        alert("The Number you entererd is odd");
    }
}

function ten() {
    var T = prompt("Enter temperature");
    if (T < 40) {
        alert("It is too hot outside.");
    } else if (T < 30) {
        alert("The Weather today is Normal.");
    } else if (T < 20) {
        alert("Today’s Weather is cool.");
    } else if (T < 10) {
        alert("OMG! Today’s weather is so Cool.");
    }
}

function eleven() {
    var first_num = Number(prompt("Enter first number"));
    var second_num = Number(prompt("Enter Second Number"));
    var operator = prompt("Enter Operator (+, -, *, /, %)");
    if (operator === "+") {
        alert(first_num + " + " + second_num + " = " + (first_num + second_num));
    }
    if (operator === "-") {
        alert(first_num + " - " + second_num + " = " + (first_num - second_num));

    } else if (operator === "*") {
        alert(first_num + " * " + second_num + " = " + (first_num * second_num));

    } else if (operator === "/") {
        alert(first_num + " / " + second_num + " = " + (first_num / second_num));

    } else if (operator === "%") {
        alert(first_num + " % " + second_num + " = " + (first_num % second_num));
    }
}