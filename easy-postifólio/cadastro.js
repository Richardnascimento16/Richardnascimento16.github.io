function required(){
    var email=document.getElementById("email_e");
    var senha=document.getElementById("senha_s");

    if(email.value=="" && senha.value==""){
        alert("campo EMAIL e SENHA vazio");
    }else if(email.value==""){
        alert("campo EMAIL vazio");
    }else if(senha.value==""){
        alert("campo SENHA vazio");
    }else{
        window.location.href= "home.html"
    }
}
