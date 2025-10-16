
/*
Arrays são agrupadores de valores numericos, textuais, boleanos, objects, Etc... Eles são
ordenados a partir do indice '0'
Ex: const time = ['Pedro', 22, 'Julio', 'Ana']
    // indices       0      1      2      3 
*/
const vestuario = ['camiseta', 'tenis nike', 'calça', 'bone', 'chinelo',]
vestuario[33] = 'regata'
vestuario[4] = 'chapeu'

for(let valor of vestuario) {
    console.log(valor)
}
// console.log(vestuario[0])
// console.log(vestuario[1])
// console.log(vestuario[2])
// console.log(vestuario[3])
// console.log(vestuario[4])
// console.log(vestuario[33])