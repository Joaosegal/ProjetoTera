const textarea = document.querySelector('textarea');
const twitokar = document.querySelector('button');
const feed = document.querySelector('.conteudo-principal-lista-twitoks')

function pegarTwitok(event) {
    event.preventDefault();

const twitokTextarea = textarea.value;
criarTwetok(twitokTextarea)

}

twitokar.addEventListener('click' , pegarTwitok);

function criarTwetok(twitokTexto){
    

let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getMinutes('');

const twitok = {
nome: 'Luis',
foto:'../assets/imgs/pngegg (2).png',
usuario: 'LuisCastro',
texto:twitokTexto,
tempo: hora+":"+minutos,
    
    }
    
    listarTemplateTwitok(twitok);

}

function listarTemplateTwitok(twitok){

const {nome,foto,usuario,texto,tempo} = twitok
console.log(nome);
console.log(foto);
console.log(usuario);
console.log(texto);
console.log(tempo);

let li   = document.createElement('li');
li.classList.add('conteudo-principal-twitoks');
let img   = document.createElement('img');
img.src = foto
img.classList.add('twitok-fotoperfil');
let div  = document.createElement('div');
div.classList.add('twitok-conteudo');
let h2   = document.createElement('h2');
h2.innerText = nome;
console.log(h2);
let span = document.createElement('span');
span.innerText = usuario +" "+tempo;
let p    = document.createElement('p');
p.innerText = texto;

 div.appendChild(h2);
 div.appendChild(span);
 div.appendChild(p);

 li.appendChild(img);
 li.appendChild(div);
 feed.appendChild(li);
 textarea.value = ''

} 



