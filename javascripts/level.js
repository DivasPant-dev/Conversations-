document.addEventListener("DOMContentLoaded", function () {
    // Check if level 1 is passed
    var level1 = document.querySelector(".level-1");
    if (localStorage.getItem("level1Status") === "passed" && level1) {
        level1.classList.add("passed");
        console.log("Added 'passed' class to .level-1");
    }

    // Update the comman-1 element
    var comman1 = document.querySelector(".comman-1");
    if (localStorage.getItem("comman1Status") && comman1) {
        comman1.innerHTML = localStorage.getItem("comman1Status");
        console.log("Updated 'comman-1' element");
    }
});