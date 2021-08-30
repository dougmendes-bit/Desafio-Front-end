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


//restrição de dados para os campos de cpf/telefone

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

setInputFilter(inputCpf, function(value) {
    return /^-?\d*$/.test(value); });

setInputFilter(inputTelefone, function(value) {
    return /^-?\d*$/.test(value); });
