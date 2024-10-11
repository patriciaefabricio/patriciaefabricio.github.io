var btnPix = document.querySelector(".btnPix");
var allertPix = document.querySelector(".alertChave");

btnPix.addEventListener('click', copiarChave);

function copiarChave() {
    
    var chave = "038.636.693-47";
    navigator.clipboard.writeText(chave);
    alert("Chave PIX Copiada!");
    

}

