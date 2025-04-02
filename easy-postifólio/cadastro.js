function required(event) {
    var email = document.getElementById("email_e");
    var senha = document.getElementById("senha_s");

    if (email.value === "" && senha.value === "") {
        alert("Campos EMAIL e SENHA estão vazios.");
    }
    else if (email.value === "") {
        alert("Campo EMAIL está vazio.");
    }
    else if (senha.value === "") {
        alert("Campo SENHA está vazio.");
    } else {
        window.location.href = "home.html";
    }

}
