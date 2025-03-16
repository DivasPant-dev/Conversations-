var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var displayQues = document.getElementById("displayQues");

input1.addEventListener("click", function() {
    if (input1.innerHTML.trim() === "Yes") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "What is your salary buddy?";
        input1.innerHTML = "$18000";
        input2.innerHTML = "I don't know";
    } else if(input1.innerHTML.trim() === "$18000") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "I know you are a policeman but I will offer you $100,000 if you will work for me. So will you work for me?";
        input1.innerHTML = "I will";
        input2.innerHTML = "I will not";
    } else if(input1.innerHTML.trim() === "I will") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Okay, your task will be told in next level";
        input1.innerHTML = ":)";
        input2.innerHTML = ":)";

        localStorage.setItem("level2Status", "passed");
        localStorage.setItem("comman2Status", "Passed");
    } else if(input1.innerHTML.trim() === "I am a honest police man") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "I will offer you $200,000. What about noww?";
        input1.innerHTML = "Say, Yes";
        input2.innerHTML = "Say, No";
    } else if(input1.innerHTML.trim() === "Say, Yes") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Forget your $200,000. HAHA and your task will be displayed in next level";
        input1.innerHTML = "";
        input2.innerHTML = "";

        localStorage.setItem("level2Status", "passed");
        localStorage.setItem("comman2Status", "Passed");
    } else if (input2.innerHTML.trim() === "Yes") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Your task will be displayed in next level";
        input1.innerHTML = "";
        input2.innerHTML = "";

        localStorage.setItem("level2Status", "passed");
        localStorage.setItem("comman2Status", "Passed");
    }
});

//************************************************

input2.addEventListener("click", () => {
    if (input2.innerHTML.trim() === "No") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Come back when you are ready";
        input1.innerHTML = "";
        input2.innerHTML = "";
    } else if(input2.innerHTML.trim() === "I don't know") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "You don't even know your salary?? You are a Idiottt";
        input1.innerHTML = "";
        input2.innerHTML = "";
    } else if (input2.innerHTML.trim() === "I will not") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Why not";
        input1.innerHTML = "I am a honest police man";
        input2.innerHTML = "Why would I tell you?";

        input1.style.width = "200px";
        input2.style.width = "200px";
    } else if (input2.innerHTML.trim() === "Why would I tell you?") {

        setTimeout(() => {
            input1.classList.add("displayNone");
            input2.classList.add("displayNone");
            displayQues.classList.add("displayNone");
            document.querySelector("body").style.backgroundColor = "black";
        }, 4000);

        displayQues.innerHTML = "I don't like people like you so dieeeee";
        input1.innerHTML = "";
        input2.innerHTML = "";
    } else if(input2.innerHTML.trim() === "Say, No") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "I will kill your mom. What now Yes or...";
        input1.innerHTML = "Yes";
        input2.innerHTML = "Yes";
    } else if (input2.innerHTML.trim() === "Yes") {
        input1.classList.add("displayNone");
        input2.classList.add("displayNone");
        displayQues.classList.add("displayNone");

        setTimeout(() => {
            input1.classList.remove("displayNone");
            input2.classList.remove("displayNone");
            displayQues.classList.remove("displayNone");
        }, 100);


        displayQues.innerHTML = "Your task will be displayed in next level";
        input1.innerHTML = "";
        input2.innerHTML = "";

        localStorage.setItem("level2Status", "passed");
        localStorage.setItem("comman2Status", "Passed");
    }
});