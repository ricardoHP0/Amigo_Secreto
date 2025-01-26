// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

let inputAmigo = document.getElementById('amigo');

function agregarAmigo() {
    if(inputAmigo.value !== '') {
        amigos.push(inputAmigo.value);
        console.log(amigos);
        inputAmigo.value = '';
    }
    else {
        alert('Por favor, inserte un nombre.');
    }
}

