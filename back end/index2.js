const readline=require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
  output: process.stdout,
})

leitor.question('Digite um número de 1 100:',function(resposta){
console.log(resposta)
leitor.close ()

const numero=5;

if (numero>1){
    console.log('Digiite um número positivo,por favor :)')
}

else { console.log ('Digite o número negativo,por favor :)')

}
})

