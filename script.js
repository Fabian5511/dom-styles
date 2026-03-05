console.log("Script started");

function changeStyle() {
    console.log("click");

    let p = document.getElementById("text");
    p.innerText = "The text has been changed";

    p.style.color = "green";
    p.style.fontSize = "40px";
    p.style.border = "4px solid green";
    p.style.backgroundColor = "white";
    
}