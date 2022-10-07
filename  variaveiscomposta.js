let num = [6,4,6,2,7]
let cont = 0
for (let conta = 0; conta<num.length; conta++)
    console.log(`A posição ${conta} tem valor ${num[conta]}`)
///OU PODEMOS SIMPLIFICAR
console.log('---------------')
for (let cont in num){
    console.log(`A posição ${cont} vale ${num[cont]}`)
}

let posicao = num.indexOf(6)
if (posicao == -1){
    console.log('Infelizmente não achei o número 3')
}else{
    console.log(`Ele está na posição ${posicao}`)
}