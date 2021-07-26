//------ Pegando elementos rápido

function pegarDados(elemento){
    return document.querySelector(elemento)
}

//------- Pegando os elementos

export const inputNome = pegarDados('[data-form-nome]')
export const inputCpf = pegarDados('[data-form-cpf]')
export const inputTelefone = pegarDados('[data-form-telefone]')
export const inputEmail = pegarDados('[data-form-email]')
export const inputBotao = pegarDados('[data-form-botao]')

//---

fazerRequisicao()

inputBotao.addEventListener('click', ()=>{
    if(inputBotao.classList.contains('inativo')) return
    
    mandarProBanco()
})



//--- Montanto o objeto

function montarObjeto(){

    const name = inputNome.value
    const cpf = inputCpf.value
    const phone = inputTelefone.value
    const email = inputEmail.value

    //---

    const pessoa = {
        name: name,
        cpf: cpf,
        phone: phone,
        email: email
    }


    return pessoa 
}

//-- Mandar pro banco de dados

function mandarProBanco(){
    const pessoasCadastradas = JSON.parse(localStorage.getItem('pessoas'))  || []
    
    const pessoas2 = [...pessoasCadastradas, montarObjeto()]
    if(pessoas2.length < 3){
        pessoas2.push(...dados)
    }

    localStorage.setItem('pessoas', JSON.stringify(pessoas2))

}

//-- Fazer requisição
let dados = []

function fazerRequisicao(){
    const requisicao = new XMLHttpRequest()

    requisicao.open('get', 'https://private-21e8de-rafaellucio.apiary-mock.com/users')

    requisicao.onload = function(){
        const pessoasDoBanco = JSON.parse(this.response)
        pessoasDoBanco.forEach((pessoa) =>{
            dados.push(pessoa)
        })
                
    }

    requisicao.send()


}




