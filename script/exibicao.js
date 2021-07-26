const pessoas = JSON.parse(localStorage.getItem('pessoas'))

window.addEventListener('load', function(){
pessoas.forEach((pessoa) =>{
    criarElementos(pessoa)
})
})


//-- criando elementos

function criarElementos(pessoa){
    const newDiv = document.createElement('div')
    const nome = document.createElement('span')
    const cpf = document.createElement('span')
    const telefone = document.createElement('span')
    const email = document.createElement('span')

    nome.textContent = `Nome: ${pessoa.name}`
    cpf.textContent = `Cpf: ${pessoa.cpf}`
    telefone.textContent = `Telefone: ${pessoa.phone}`
    email.textContent = `Email: ${pessoa.email}`

    newDiv.appendChild(nome)
    newDiv.appendChild(cpf)
    newDiv.appendChild(telefone)
    newDiv.appendChild(email)

    newDiv.classList.add('containerInfo')
    document.querySelector('.containerExibicao').appendChild(newDiv)
}

//-deletando elementos

document.querySelector('.containerExibicao').addEventListener('dblclick', function(evento){
    if(evento.target.parentElement == document.querySelector('body')) return
    if(evento.target.parentElement == document.querySelector('main')) return

    console.log(evento.target.parentElement.firstChild.textContent)

    //--

    for(let i = 0; i < pessoas.length; i++){
        if(`Nome: ${pessoas[i].name}` == evento.target.parentElement.firstChild.textContent){
            pessoas.splice(i, 1)
            evento.target.parentElement.remove()
        }
    }

    localStorage.setItem('pessoas', JSON.stringify(pessoas))
})


