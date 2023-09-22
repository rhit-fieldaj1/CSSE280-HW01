document.addEventListener("DOMContentLoaded", (event) => {
    main();
});


main = function () {
    console.log("Ready");

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter--;
        updateView();
    }

    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter++;
        updateView();
    }

    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    }

    document.querySelector("#blueButton").onclick = (event) => {
        console.log("blue button");
        color = "blue";
        updateColor();
    }

    document.querySelector("#greenButton").onclick = (event) => {
        console.log("green button");
        color = "green";
        updateColor();
    }

    document.querySelector("#redButton").onclick = (event) => {
        console.log("red button");
        color = "red";
        updateColor();
    }

    document.querySelector("#purpleButton").onclick = (event) => {
        console.log("purple button");
        color = "purple";
        updateColor();
    }


}





let counter = 0;

updateView = function () {
    console.log("clicked");
    document.querySelector("#counterText").innerHTML = counter;
}

let color = "black";

updateColor = function() {
    console.log("clicked");
    document.querySelector("#colorContainer").style.backgroundColor = color;
    document.querySelector("#colorContainer").style.color = "white";
    document.querySelector("#colorContainer").innerHTML = color;
}