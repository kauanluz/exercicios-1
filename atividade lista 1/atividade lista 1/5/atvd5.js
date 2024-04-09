function transformarNumero(){
    let numero = parseInt(prompt("Digite um número:"))

    if (numero % 2 == 0){
        numero++;
    } else {
        numero--;
    }
    alert("Numero transformado " + numero);
}
window.onload = transformarNumero