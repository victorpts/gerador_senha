const senha_gerada = document.getElementById('senha_gerada');
const botao_gerador = document.getElementById('btn_gerador');
const quantidade_caracteres = document.getElementById('quantidade_caracteres')
const btn_senha = document.getElementById('img_senha');

let quantidade = quantidade_caracteres;

let caracteres = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
				 "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
				 "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "(", ")", "?"];

botao_gerador.addEventListener('click', function(){
	if(parseInt(quantidade.value) <= 10 && parseInt(quantidade.value) >= 2){
		let senha = [];
		for(let i=0; i<parseInt(quantidade.value); i++){
			senha[i] = caracteres[Math.floor(Math.random() * caracteres.length)];
		}
		senha_gerada.value = senha.join('');
		}else {
			alert("Digite um valor entre 2 e 10");
		}
})


//função manter pressionado
btn_senha.addEventListener('mousedown', function(){
	senha_gerada.type = 'text';
	btn_senha.src = 'senha_esconder.png';
})

btn_senha.addEventListener('mouseup', function(){
	senha_gerada.type = 'password';
	btn_senha.src = 'senha_mostrar.png';
})

btn_senha.addEventListener('mousemove', function(){
	senha_gerada.type = 'password';
	btn_senha.src = 'senha_mostrar.png';
})

//função com o click
/*btn_senha.addEventListener('click', function(){
	if(senha_gerada.type == 'password'){
		senha_gerada.type = 'text';
		btn_senha.src = 'senha_esconder.png';
	}else{
	senha_gerada.type = 'password';
	btn_senha.src = 'senha_mostrar.png';
	}
})*/