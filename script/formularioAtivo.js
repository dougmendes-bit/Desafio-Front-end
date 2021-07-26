import { inputBotao, inputCpf, inputEmail, inputNome, inputTelefone } from "./main.js";

//--- checando se são valores válidos

inputNome.addEventListener('focusout', function(){
    if(checarValor4(inputNome)){
        removerClasseDeErro(this)
    }   else{
        adicionaClasseDeErro(this)
    }
})

inputCpf.addEventListener('focusout', function(){
    if(checarValor10(this)){
        removerClasseDeErro(this)
    }   else{
        adicionaClasseDeErro(this)
    }
})

inputTelefone.addEventListener('focusout', function(){
    if(checarValor10(this)){
        removerClasseDeErro(this)
    }   else{
        adicionaClasseDeErro(this)
    }
})

inputEmail.addEventListener('focusout', function(){
    if(checarValor4(this)){
        removerClasseDeErro(this)
    }   else{
        adicionaClasseDeErro(this)
    }
})

//-- função pra checar tamanho

function checarValor4(elemento){
    if(elemento.value.length < 4) return false
    
    return true
}

function checarValor10(elemento){
    if(elemento.value.length < 10) return false
    
    return true
}

//-- Adicionando e retirando classe de erro
function adicionaClasseDeErro(elemento){
    elemento.classList.add('vazio')
}

function removerClasseDeErro(elemento){
    elemento.classList.remove('vazio')
}
