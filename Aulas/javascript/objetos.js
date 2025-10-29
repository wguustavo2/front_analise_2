// dados simples: numerico, strings, boolean...
// array: [1,2,3 ,´ana´]
// objetos: {nome: 'leblon', idade:30}
// funções: function somar(){}, () => {}

// Objetos Literais
{
    // propriedade: valor 
    //   key   : value
}

const perfil = {
    nome: 'Wilian',
    idade: 33,
    profissao: "Medico",
    solteiro: true,
    roupas: ['camiseta', 'short', 'jeans']
    }

console.log(Object.entries(perfil)) // Traz chave e valor
console.log(Object.keys(perfil)) // Traz só as chaves
console.log(Object.values(perfil)) // Traz só os valores


// let dadosPerfil = []

// for(let dado in perfil){
//     dadosPerfil.push(perfil[dado])
// }
// alert(dadosPerfil)

// for(let dados in perfil){
//     console.log(perfil[dados])
// }


// atribuicao dinamica
// perfil.roupas = ['camiseta', 'short', 'jeans']

// console.log(perfil.nome)
// console.log(perfil.idade)
// console.log(perfil.profissao)
// console.log(perfil.solteiro)
// console.log(perfil.roupas)

