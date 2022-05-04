var nome = window.prompt('Qual é o seu nome?')
document.write(`<p>Olá ${nome}. Seu nome tem ${nome.length} letras.</p>`)
document.write(`<p>Seu nome em MAIUSCULAS é: ${nome.toUpperCase()}</p>`)
document.write(`<p>Seu nome em minusculas é: ${nome.toLowerCase()}.</p>`)
// Pode colocar tags HTML nas strings de Javascript.
document.write(`<p>${5 == '5' ? 'true' : 'false'}</p>`)
document.write(`<p>${5 === '5' ? 'true' : 'false'}</p>`)
