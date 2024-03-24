
document.getElementById("Concatenate").onclick = function () {
    let num1 = "10"
    let num2 = "20"
    let sum = num1 + num2;
    document.getElementById("Statement").innerHTML = '"10" + "20" '
    document.getElementById("output").innerHTML = sum
}

document.getElementById("Clear").onclick = function () {
    document.getElementById("Statement").innerHTML = ""
}

document.getElementById("Clearout").onclick = function () {
    document.getElementById("output").innerHTML = ""
}

document.getElementById("asknamefromuser").onclick = function () {
    let firstName = prompt("Enter Your First Name")
    let lastName = prompt("Enter Your Last Name")
    let fullName = firstName + " " + lastName

    document.getElementById("Statement").innerHTML = "First name = " + firstName + " " + "Last name =" + lastName;
    document.getElementById("output").innerHTML = fullName

}
document.getElementById("comparisonoperator").onclick = function () {
    let number1 = prompt("Enter your 1st number")
    let number2 = prompt("enter your 2nd number")
    if (number1 === number2) {
        document.getElementById("Statement").innerHTML = "1st number == 2nd number !"
        document.getElementById("output").innerHTML = "<span class=' text-success'> Condition is true  </span>"
    }
    else {
        document.getElementById("Statement").innerHTML = " 1st number !== 2nd number"
        document.getElementById("output").innerHTML = "<span class='text-danger'>Condition is false </span>"
    }
}

document.getElementById("ifelseif").onclick = function () {
    let marks = prompt("Enter your marks")
    if (marks >= 90) {
        document.getElementById("output").innerHTML = "Congratulations You are pass<br> you got A+ Grade"
    }
    else if (marks >= 80) {
        document.getElementById("output").innerHTML = "Congratulations You are pass<br> you got A Grade"
    }
    else if (marks >= 70) {
        document.getElementById("output").innerHTML = "Congratulations You are pass<br> you got B Grade"
    }

    else if (marks >= 60) {
        document.getElementById("output").innerHTML = "Congratulations You are pass<br> you got C Grade"
    }
    else {
        document.getElementById("output").innerHTML = "<span class='text-danger'>You are Fail .! <br>Try Again</span>"
    }
}



document.getElementById("testingsetsofcondition").onclick = function () {
    let age = prompt("Enter your age ")
    let weight = prompt("Enter your weight")


    if (age <= 20 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a teenager  "
    }
    else if (age <= 40 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a young man "
    }
    else if (age <= 55 && weight <= 80) {
        document.getElementById("output").innerHTML = "you are senior person"
    }
    else if (age <= 65 && weight <= 80) {
        document.getElementById("output").innerHTML = "you are older man "
    }
    else {
        document.getElementById("output").innerHTML = "you are a very old  citizen of society"
    }
}


document.getElementById("ifnested").onclick = function () {
    let userName = prompt("Enter your userName")
    if (userName === "sheraz") {
        let password = prompt("Enter Your password")
        if (password === "sheraz") {
            document.getElementById("output").innerHTML = "You are successfully logged in"

        }
        else {
            document.getElementById("output").innerHTML = "<span class='text-danger'>Wrong Password</span>"
        }
    }
    else {
        document.getElementById("output").innerHTML = "Wrong userNAme <br> Correct user name is Sheraz"
    }
}



document.getElementById("login").onclick = function () {
    let Username = prompt("Enter Your username ")
    let Password = prompt("Enter your password")
    if (Username === "sheraz") {
        if (Password === "834834") {
            document.getElementById("output").innerHTML = "You are successfully logged in"

        }
        else {
            document.getElementById("output").innerHTML = "incorrect password or username <br> use sheraz as user name and 834834 as passward "
        }
    }
    else {
        document.getElementById("output").innerHTML = " invailed username or password"
    }
}
