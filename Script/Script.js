const campo1 = document.getElementById("text");
const campo2 = document.getElementById("password");
const campo3 = document.getElementById("password2");
const link = document.getElementById("Button");

function verificar(){
    const texto1 = campo1.value.trim()
    const texto2 = campo2.value.trim()
    const texto3 = campo3.value.trim()

    
    if(texto1&&texto2&&texto3){
        link.href = "tela_inicial.html"
    } else{
        link.removeAttribute("href");
        alert("Por Favor, Preencha este campo")
    }
}

link.addEventListener("click",verificar);


