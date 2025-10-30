// Funções são blocos de codigo que podem ser
// reaproveitadas ao longo de execução do programa
// caracteristicas:
//        >podem ser nomeados ou não
//        >podem receber parametros ou não
//        >podem retornar valores ou não

// Declaração de função
function dizOla(){
    alert("Diz olá")
}
function dizOlaPessoa(nome){
    alert(`Não seja timido(a) ${nome}. Fala oi`)
}
const jogadores = ['Neymar', 'Ronaldinho', 'Messi']
const frutas = ['Banana', 'Morango', 'Uva']

function formataTexto(lista){
    for(let texto of lista){
        console.log(texto.toUpperCase())
        //texto.tolowerCase() > tudo para minusculo
        //texto.trim() > elimina espacos em branco
        //texto.join(' outra coisa') > junta com os outros
    }
}
//formataTexto(jogadores)
//formataTexto(frutas)
function adicao(n1, n2){
    return n1 + n2
}
// faça uma versão para subtracao

const resultadoadicao = adicao(5, 25)
console.log(`Adição: ${resultadoadicao}`) // valor 30

// Invocar ou chamar a função
// dizOla()
// dizOlaPessoa("Cleitinho")
// dizOlaPessoa("Ana")
// dizOlaPessoa("Julius")
// dizOlaPessoa(13)
