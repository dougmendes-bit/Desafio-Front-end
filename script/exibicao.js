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

//-abrindo editor de elementos

document.querySelector('.containerExibicao').addEventListener('click', function(evento){
    if(evento.target.parentElement == document.querySelector('body')) return
    if(evento.target.parentElement == document.querySelector('main')) return

    //--

    const modal = document.querySelector('.modal')
    modal.style.display = 'block'

    //-- selecionando elementos
    const nome = document.querySelector('.modal__input-nome')
    const cpf = document.querySelector('.modal__input-cpf')
    const telefone = document.querySelector('.modal__input-telefone')
    const email = document.querySelector('.modal__input-email')

    //-- exibindo e alterando os dados
        
    for(let i = 0; i < pessoas.length; i++){
        if(`Nome: ${pessoas[i].name}` == evento.target.parentElement.firstChild.textContent){
            nome.value = pessoas[i].name
            cpf.value = pessoas[i].cpf
            telefone.value = pessoas[i].phone
            email.value = pessoas[i].email

            const botaoConcluir = document.querySelector('.modal__botao')

            botaoConcluir.addEventListener('click', function(){
                console.log('clicado')
                pessoas[i].name = nome.value
                pessoas[i].cpf = cpf.value
                pessoas[i].phone = telefone.value
                pessoas[i].email = email.value

                localStorage.setItem('pessoas', JSON.stringify(pessoas))
                modal.style.display = 'none'
                location.reload();
            })

        }
    }

})




