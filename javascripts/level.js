document.addEventListener("DOMContentLoaded", function () {
    // Check if level 1 is passed
    var level1 = document.querySelector(".level-1");
    if (localStorage.getItem("level1StatusOne") === "passed" && level1) {
        level1.classList.add("passed");
        console.log("Added 'passed' class to .level-1");
    }

    // Update the comman-1 element
    var comman1 = document.querySelector(".comman-1");
    if (localStorage.getItem("comman1StatusOne") && comman1) {
        comman1.innerHTML = localStorage.getItem("comman1Status");
        console.log("Updated 'comman-1' element");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Check if level 2 is passed
    const level2 = document.querySelector(".level-2");
    if (localStorage.getItem("level2Status") === "passed" && level2) {
        level2.classList.add("passed");
        console.log("Added 'passed' class to .level-2");
    }

    // Update the comman-2 element
    const comman2 = document.querySelector(".comman-2");
    if (localStorage.getItem("comman2Status") && comman2) {
        comman2.innerHTML = localStorage.getItem("comman2Status");
        console.log("Updated 'comman-2' element");
    }
});

