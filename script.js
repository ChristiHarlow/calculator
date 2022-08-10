const buttonClicked = (event) => {
    const buttonText = event.target.innerHTML;
    const screen = document.getElementById("screen");
    if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
        screen.innerHTML = buttonText;
    } else {
        screen.innerHTML = screen.innerHTML + buttonText;
    }
};

const equalClicked = (event) => {
    try {
        //get the input from the screen
        const input = document.getElementById("screen").innerHTML;
        //run the input to get the output
        const output = eval(input);
        //put the output back on the screen
        document.getElementById("screen").innerHTML = output;
    } catch (e) {
        document.getElementById("screen").innerHTML = "ERROR";
    }
};

const clearClicked = () => {
    document.getElementById("screen").innerHTML = "0";
};
