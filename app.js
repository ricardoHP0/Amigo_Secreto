// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let inputAmigo = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    if(inputAmigo.value !== '') {
        amigos.push(inputAmigo.value);
        inputAmigo.value = '';

        lista.innerHTML = '';
        amigos.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
    else {
        alert('Por favor, inserte un nombre.');
    }
}

let resultado = document.getElementById('resultado');

function sortearAmigo(){
    if(amigos.length > 0){
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = 'El amigo secreto sorteado es: ' + amigoSorteado;
    }
}
