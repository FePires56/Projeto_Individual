function mostrar() {

    if (in_senha.type == "password") {
        img_ocultar.src = "img/exibindo.png"
        in_senha.type = "text"
        in_senha2.type = "text"
    } else {
        img_ocultar.src = "img/oculto.png"
        in_senha.type = "password"
        in_senha2.type = "password"
    }
}

function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var emailVar = email_input.value;
    var senhaVar = in_senha.value;

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        
    });

    return false;
}
