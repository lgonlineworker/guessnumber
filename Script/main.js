var numeroAleatorio= Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpite = 1;
var botaoReinicio;

campoPalpite.focus();

function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpite === 1){
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
        
    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent='Parabéns! Você acertou o numero aleatório';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else if(contagemPalpite>10){
        ultimoResultado.textContent='Fim de jogo, acabaram seus palpites!'
        ultimoResultado.style.backgroundColor = 'red';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';

        }else if (palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        }
    }

    contagemPalpite++;
    campoPalpite.value = "";
    campoPalpite.focus();
}
envioPalpite.addEventListener('click', conferirPalpite)

function configFimDeJogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpite = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i=0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent = '';
    }
    
    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random()*100) +1;
}