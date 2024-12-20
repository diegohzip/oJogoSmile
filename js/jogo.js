// jogo.js

// Declaração das variáveis globais
let desempenho = 0;
let tentativas = 0;
let acertos = 0;
let jogar = true;

// Captura os botões pelos ids e adiciona um evento de clique
const btnReiniciar = document.getElementById('reiniciar');
const btnJogarNovamente = document.getElementById('joganovamente');

// Função que zera os valores das variáveis controladoras e reinicia o jogo
function reiniciar() {
    desempenho = 0;
    tentativas = 0;
    acertos = 0;
    jogar = true;
    jogarNovamente();
    atualizaPlacar(0, 0);
    // Torna os botões "Jogar novamente" e "Reiniciar" visíveis
    btnJogarNovamente.className = 'visivel btn btn-primary';
    btnReiniciar.className = 'visivel btn btn-secondary';
}

// Função jogar novamente (não altera tentativas, apenas reinicializa o estado do jogo)
function jogarNovamente() {
    jogar = true;
    let divis = document.getElementsByClassName("card-container");
    for (let i = 0; i < divis.length; i++) {
        divis[i].className = "inicial card-container";
        const imagem = divis[i].querySelector('img');
        if (imagem) {
            imagem.remove(); // Remove a imagem ao reiniciar
        }
    }
    document.getElementById("resposta").innerHTML = '';
}

// Função que atualiza o placar
function atualizaPlacar(acertos, tentativas) {
    desempenho = tentativas === 0 ? 0 : (acertos / tentativas) * 100;
    document.getElementById("resposta").innerHTML = `Placar - Acertos: ${acertos} Tentativas: ${tentativas} Desempenho: ${Math.round(desempenho)}%`;
}

function mostrarImagem(obj, imgSrc) {
    // Remove a imagem anterior, se houver
    const imgExistente = obj.querySelector('img');
    if (imgExistente) {
        imgExistente.remove();
    }

    const img = new Image();
    img.src = imgSrc;
    obj.appendChild(img);
}

// Função que sorteia um número aleatório entre 0 e 3 e verifica se o jogador acertou
function verifica(obj) {
    if (jogar) {
        jogar = false;
        tentativas++;
        let sorteado = Math.floor(Math.random() * 4); // Para considerar id 0 a 3

        if (obj.id == sorteado) {
            obj.className = "acertou card-container";
            mostrarImagem(obj, "https://clipart.info/images/ccovers/1532055357Neymar-Brazil-Png-2018.png"); // Imagem do Neymar
            acertos++;
        } else {
            obj.className = "errou card-container";
            mostrarImagem(obj, "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62bf873b-e9df-40d4-828c-afc8da770e1d/dg3dkjf-3fdf4256-9240-4f0f-9069-560f5289f601.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyYmY4NzNiLWU5ZGYtNDBkNC04MjhjLWFmYzhkYTc3MGUxZFwvZGczZGtqZi0zZmRmNDI1Ni05MjQwLTRmMGYtOTA2OS01NjBmNTI4OWY2MDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4IMTzEb-LHENJEDBRShZGgKC0GJK11ndaxjqxwQUq0k"); // Imagem do Messi
            const objSorteado = document.getElementById(sorteado);
        }
        atualizaPlacar(acertos, tentativas);
    } else {
        alert('Clique em "Jogar novamente" para tentar novamente.');
    }
}


// Adiciona eventos aos botões
btnJogarNovamente.addEventListener('click', jogarNovamente);
btnReiniciar.addEventListener('click', reiniciar);
