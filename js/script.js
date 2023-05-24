
// function demoDisplay() {
//     document.getElementById("myid").style.visibility = "hidden";
// }

const textArea = document.querySelector("textArea");



function encriptar(){

    let x = document.getElementById("textIngresar").value;

    let text = x;

    document.getElementById("mostrando").innerHTML = text;

    document.getElementById("textIngresar").style.visibility = "hidden";
}



