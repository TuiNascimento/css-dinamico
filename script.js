
function login(){
    valorUsuario = document.getElementById("usuario").value
    valorSenha = document.getElementById("senha").value
    console.log ("valorUsuario:",valorUsuario,"//valorSenha:",valorUsuario)
        sucessoUsuario=valorUsuario=="usuarioteste"
        sucessoSenha=valorSenha=="senhateste"
        emptyUsuario=valorUsuario==""
        emptySenha=valorSenha==""
        
            if(sucessoUsuario && sucessoSenha){
                alert("Login efetuado com sucesso")
                usuario.style.borderColor=""
                senha.style.borderColor=""
                document.getElementById("avisoUsuario").innerHTML=""
                document.getElementById("avisoSenha").innerHTML=""

            }
            if(emptyUsuario){
                usuario.style.borderColor="yellow"
                alert("Campo de usuário em branco!")
            }
            if(emptySenha){
                senha.style.borderColor="yellow"
                alert("Campo de senha em branco!")
            }
            if(!sucessoUsuario && !emptyUsuario){
                document.getElementById("usuario").value=("")
                usuario.style.borderColor="red"
                document.getElementById("avisoUsuario").innerHTML="Usuário inválido!"
            }
            if(!sucessoSenha && !emptySenha){
                senha.style.borderColor="red"
                document.getElementById("senha").value=("")
                document.getElementById("avisoSenha").innerHTML="Senha inválida!"
            }

}

function cancel(){
    document.getElementById("usuario").value=""
    usuario.style.borderColor="black"
    document.getElementById("avisoUsuario").innerHTML=""
    document.getElementById("senha").value=""
    senha.style.borderColor="black"
    document.getElementById("avisoSenha").innerHTML=""
    
}

function naoSei(){
    alert("\n \n Usuario:usuarioteste\n Senha:senhateste")
}

function focusInputLogin(){ 
    document.getElementById("usuario").focus();  
}
function focusInputPassword(){ 
    document.getElementById("senha").focus();  
}
    
