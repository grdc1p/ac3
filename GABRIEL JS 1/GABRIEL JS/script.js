document.getElementById('start-button').addEventListener('click', function () {
    const Pergunta1 = document.getElementById('question1').value;
    const Pergunta2 = document.getElementById('question2').value;
    const Pergunta3 = document.getElementById('question3').value;
    const Pergunta4 = document.getElementById('question4').value;
    const Pergunta5 = document.getElementById('question5').value;

    let result = '';

    if (Pergunta1 === "Sim" && Pergunta2 === "Sim" && Pergunta3 === "Não" && Pergunta4 === "Sim" && Pergunta5 === "Não") {
        result = "O seu personagem medieval é REI.";
    } else if (Pergunta1 === "Não" && Pergunta2 === "Sim" && Pergunta3 === "Não" && Pergunta4 === "Não" && Pergunta5 === "Não") {
        result = "O seu personagem medieval é CAVALHEIRO.";
    } else if (Pergunta1 === "Não" && Pergunta2 === "Não" && Pergunta3 === "Sim" && Pergunta4 === "Não" && Pergunta5 === "Não") {
        result = "O seu personagem medieval é a FEITICEIRA.";
    } else if (Pergunta1 === "Não" && Pergunta2 === "Não" && Pergunta3 === "Não" && Pergunta4 === "Não" && Pergunta5 === "Não") {
        result = "O seu personagem medieval é CAMPONÊS.";
    } else if (Pergunta1 === "Não" && Pergunta2 === "Não" && Pergunta3 === "Não" && Pergunta4 === "Não" && Pergunta5 === "Sim") {
        result = "O seu personagem medieval é DRAGÃO.";
    } else {
        result = "Putz, Não sei esse, tente novamente!";
    }

    document.getElementById('result').textContent = result;
});