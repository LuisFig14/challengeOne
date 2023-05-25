const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo = [
    ["e","enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "over"],
    ["u", "ufat"]
]

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)

    mensaje.value = textoEncriptado;
    textArea =""; 
}

function btnDesencriptar(){
    const textDesencriptado = desencriptar(textArea.value)

    mensaje.value = textDesencriptado
    textArea = "";
}

function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}


