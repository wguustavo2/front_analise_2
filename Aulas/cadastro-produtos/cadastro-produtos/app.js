const formulario = document.querySelector("#form-user")

const btnRemover = document.querySelector("#remover")
const conteinerCards = document.querySelector("#conteinerCards")

const ItensProdutos = [
    //{nome:"Prod1" = descricao "" url" http://dfaffdas},
    //{nome:"Prod1" = descricao "" url" http://dfaffdas},
]
// addEventilistener => Escutador de Eventos
formulario.addEventListener("submit", function(event){
    event.preventDefault()
    const titulo = document.querySelector("#nome").value.trim()
    const descricao = document.querySelector("#descricao").value.trim()
    const urlImagens = document.querySelector("#img").value.trim()
    ItensProdutos.push({titulo, descricao, urlImagens})

    console.log(ItensProdutos)

    alert("funfou")
    formulario.reset() 
})

// CRIAR UMA FUNÇAO QUE GERA O TEMPLATE DO CARD
function criarCardNovo(){
    // TODO: Inserir card atualizado na pagina
}

btnRemover.addEventListener("click"), function(){
    alert("Isso vai acabar deletando um card")
}