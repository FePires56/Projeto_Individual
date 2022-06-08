b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

/* INICIO - Carrosel */
var count = 1 

/*Essa linha está pegando a INPUT Radio1 e deixando ela selecionada*/
document.getElementById("radio1").checked=true; 
/*Da linha 4 até a 7 está colocando um intervalo para executar a função nextImagem()*/
setInterval(function () { 
    nextImagem();
}, 4000)

/*A função NextImagem() está aumentando em 1 a variável "count" e caso ela seja maior que 3, 
o count volta para 1. O numero do count determina qual carrosel será exibido. */
function nextImagem(){
    count++;
    if(count > 3){
        count = 1;
    }

    /*Aqui ele está pegando a palavra "radio" e concatenando com o "count" para assim dar o id do carrosel.*/
    let item = document.getElementById("radio" + count)
    item.checked = true

    // Mudando a cor da bolinha do carrosel ativo
    if (count == 1) {
        document.getElementsByClassName("manual-btn")[0].classList.add('active')
        document.getElementsByClassName("manual-btn")[1].classList.remove('active')
        document.getElementsByClassName("manual-btn")[2].classList.remove('active')
    }else if (count == 2) {

        document.getElementsByClassName("manual-btn")[0].classList.remove('active')
        document.getElementsByClassName("manual-btn")[1].classList.add('active')
        document.getElementsByClassName("manual-btn")[2].classList.remove('active')
    }else{

        document.getElementsByClassName("manual-btn")[0].classList.remove('active')
        document.getElementsByClassName("manual-btn")[1].classList.remove('active')
        document.getElementsByClassName("manual-btn")[2].classList.add('active')
    }
}

// Função para detectar o local do menu que foi clicado
const list = document.querySelectorAll('.manual-btn')

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item) =>
    item.addEventListener('click', activeLink))
/* FIM - Carrosel */

// Áreas das categorias

var btnTodos = document.getElementById("btn_todos")
var btnAventura = document.getElementById("btn_aventura")
var btnAcao = document.getElementById("btn_acao")
var btnTerror = document.getElementById("btn_terror")
var btnEstrategia = document.getElementById("btn_estrategia")
var btnEsporte = document.getElementById("btn_esporte")
var btnDiversao = document.getElementById("btn_diversao")
var btnFPS = document.getElementById("btn_FPS")
var btnRPG = document.getElementById("btn_RPG")


function todos() {


    areaJogos_1.style.display = "block"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"

    btnAventura.innerHTML = "todos"
}

function aventura() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "block"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "aventura"
}

function acao() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "block"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "acao"
}

function terror() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "block"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "terror"
}

function estrategia() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "block"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "estrategia"
}

function esporte() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "block"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "esporte"
}

function diversao() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "block"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "diversao"
}

function FPS() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "block"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "FPS"
}

function RPG() {


    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "block"
    
    btnAventura.innerHTML = "RPG"
}