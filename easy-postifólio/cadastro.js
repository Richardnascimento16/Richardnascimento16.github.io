function required() {
    var email = document.getElementById("email_e");
    var senha = document.getElementById("senha_s");

    // Verificando se ambos os campos estão vazios
    if (email.value == "" && senha.value == "") {
        alert("Campos EMAIL e SENHA estão vazios.");
    } 
    // Verificando se o campo EMAIL está vazio
    else if (email.value == "") {
        alert("Campo EMAIL está vazio.");
    } 
    // Verificando se o campo SENHA está vazio
    else if (senha.value == "") {
        alert("Campo SENHA está vazio.");
    } 
    else {
        // Se ambos os campos forem preenchidos, redireciona para a página home.html
        window.location.href = "home.html";
    }
}
