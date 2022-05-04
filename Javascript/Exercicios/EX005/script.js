d = window.document.getElementById('area')
d.addEventListener('click', clicar)
d.addEventListener('mouseenter', porCima)
d.addEventListener('mouseout', sair)

function clicar(){
    d.innerText = 'Clicou!'
    d.style.backgroundColor = 'red'
}

function porCima(){
    d.innerText = 'Mouse entrou.'
}

function sair(){
    d.innerText = 'Mouse saiu.'
    d.style.backgroundColor = 'green'
}