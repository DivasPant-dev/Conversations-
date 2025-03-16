var input1one = document.querySelector(".input1one");
var input2one = document.querySelector(".input2one");
var displayQues = document.getElementById("displayQues");

input1one.addEventListener("click", function() {
    if (input1one.innerHTML.trim() === "Maddy") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    } else if (input1one.innerHTML.trim() === "Policeman") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "What is your age?";
        input1one.innerHTML = "24";
        input2one.innerHTML = "23";
    } else if(input1one.innerHTML.trim() === "24") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "How many cases have you solved?";
        input1one.innerHTML = "10";
        input2one.innerHTML = "9";
    } else if(input1one.innerHTML.trim() === "10") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    } else if(input1one.innerHTML.trim() === "William") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "What is your mother's name?";
        input1one.innerHTML = "Jessica";
        input2one.innerHTML = "Mary";
    } else if(input1one.innerHTML.trim() === "Jessica") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    }
});

//*******************************************************

input2one.addEventListener("click", function() {
    if (input2one.innerHTML.trim() === "David") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "What work do you do?";
        input1one.innerHTML = "Policeman";
        input2one.innerHTML = "Care Taker";
    } else if(input2one.innerHTML.trim() === "Care Taker") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    } else if(input2one.innerHTML.trim() === "23") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    }
    
    else if(input2one.innerHTML.trim() === "9") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "What is your father's name?";
        input1one.innerHTML = "William";
        input2one.innerHTML = "George";
    } else if (input2one.innerHTML.trim() === "George") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Y-YOU LOSTTTT";
        input1one.innerHTML = "";
        input2one.innerHTML = "";
    } 
    
    else if (input2one.innerHTML.trim() === "Mary") {
        input1one.classList.add("displayNone");
        input2one.classList.add("displayNone");
        displayQues.classList.add("displayNone");
    
        setTimeout(() => {
            input1one.classList.remove("displayNone");
            input2one.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);
    
        displayQues.innerHTML = "Successfully Passed Level 1";
        displayQues.style.color = "darkgreen";
        input2one.innerHTML = "";
        input1one.innerHTML = "";
        input1one.style.border = "none";
        input2one.style.border = "none";

        localStorage.setItem("level1Status", "passed");
        localStorage.setItem("comman1Status", "Passed");
    }
});