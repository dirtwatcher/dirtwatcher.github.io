const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/marth-awakening.jpg") {
        myImage.setAttribute("src", "images/call-me-marth.jpg");
    } else {
        myImage.setAttribute("src", "images/marth-awakening.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `I am your dad, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `I am your dad, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};