/*
Criamos uma função que será chamada a partir do clique no botão "login". Essa função verificará se os dados são verdadeiros.
*/
function verificaLogin() {
    /*
    Criamos uma variável "email" que receberá o valor do input "email" que está no login.html.
    O document é um objeto pelo qual podemos acessar tudo que contém no nosso html, inclusive os ID, ou classes.
    O Método getElementById, pega o id no html, passado por parâmetro.
    */
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    if(email === "luiz" && senha === "lulu") {
        window.location.href = "homepage.html";
    }
}