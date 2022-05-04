//--- Comentario aleatorio. ---
window.confirm('Olá mundo.')
num1 = Number(window.prompt('Digite um número.').replace(',', '.'))
num2 = Number(window.prompt('Digite outro número.').replace(',', '.'))
soma = num1 + num2
window.alert(`O resultado da soma entre ${num1} e ${num2} é: ${soma}`)
//--- Caso queira testar uma operação de True ou False, utilizar codigo abaixo. ---
window.alert(soma % 2 == 0 ?/* Se True */ 'Número PAR.':/* Se False */ 'Número IMPAR.')
