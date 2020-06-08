var btnLogin = document.getElementById("btn-login");
var formLogin = document.querySelector("#form-login");




btnLogin.addEventListener("click", e=>{
    console.log("Botão clicado")
});

formLogin.addEventListener("mouseenter", e=>{
    console.log("Mouse sobre o formulario")
});

formLogin.addEventListener("submit", e=>{
    e.preventDefault()
    
    var email = document.querySelector("#email").value;
    var password = document.querySelector('#password').value;


    console.log(email, password)
})