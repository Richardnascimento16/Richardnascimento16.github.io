function required(event) {
    var email = document.getElementById("email_e");
    var senha = document.getElementById("senha_s");
    var valid = true;

    // Resetando estilos anteriores
    email.classList.remove("is-invalid");
    senha.classList.remove("is-invalid");

    if (email.value.trim() === "" && senha.value.trim() === "") {
        alert("Campos EMAIL e SENHA estão vazios.");
        email.classList.add("is-invalid");
        senha.classList.add("is-invalid");
        valid = false;
    } 
    else if (email.value.trim() === "") {
        alert("Campo EMAIL está vazio.");
        email.classList.add("is-invalid");
        valid = false;
    } 
    else if (senha.value.trim() === "") {
        alert("Campo SENHA está vazio.");
        senha.classList.add("is-invalid");
        valid = false;
    } 

    if (!valid) {
        event.preventDefault(); // Impede o envio do formulário
        return false;
    }
    
    return true; // Permite o envio do formulário
}
