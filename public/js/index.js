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

btnTodos.addEventListener("click", todos )
function todos() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "flex"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnTodos.innerHTML = "todos"
}

btnTodos.addEventListener("click", aventura)
function aventura() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "flex"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAventura.innerHTML = "aventura"
}

btnTodos.addEventListener("click", acao)
function acao() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "flex"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnAcao.innerHTML = "acao"
}

btnTodos.addEventListener("click", terror)
function terror() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "flex"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnTerror.innerHTML = "terror"
}


btnTodos.addEventListener("click", estrategia)
function estrategia() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "flex"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnEstrategia.innerHTML = "estrategia"
}

btnTodos.addEventListener("click", esportes)
function esportes() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "flex"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnEsporte.innerHTML = "esportes"
}

btnTodos.addEventListener("click", diversao)
function diversao() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "flex"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "none"
    
    btnDiversao.innerHTML = "diversao"
}

btnTodos.addEventListener("click", FPS)
function FPS() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "flex"
    areaJogos_9.style.display = "none"
    
    btnFPS.innerHTML = "FPS"
}

btnTodos.addEventListener("click", RPG)
function RPG() {
    let areaJogos_1 = document.getElementById("areaJogos_1")
    let areaJogos_2 = document.getElementById("areaJogos_2")
    let areaJogos_3 = document.getElementById("areaJogos_3")
    let areaJogos_4 = document.getElementById("areaJogos_4")
    let areaJogos_5 = document.getElementById("areaJogos_5")
    let areaJogos_6 = document.getElementById("areaJogos_6")
    let areaJogos_7 = document.getElementById("areaJogos_7")
    let areaJogos_8 = document.getElementById("areaJogos_8")
    let areaJogos_9 = document.getElementById("areaJogos_9")

    areaJogos_1.style.display = "none"
    areaJogos_2.style.display = "none"
    areaJogos_3.style.display = "none"
    areaJogos_4.style.display = "none"
    areaJogos_5.style.display = "none"
    areaJogos_6.style.display = "none"
    areaJogos_7.style.display = "none"
    areaJogos_8.style.display = "none"
    areaJogos_9.style.display = "flex"
    
    btnRPG.innerHTML = "RPG"
}