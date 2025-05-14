const quizData = [
    {
        question: "Qual a temperatura ideal de armazenamento da maioria das vacinas?",
        options: ["Entre 2°C e 8°C", "Abaixo de 0°C", "Entre 10°C e 15°C", "Temperatura ambiente"],
        answer: "Entre 2°C e 8°C"
    },
    {
        question: "O que é a Rede de Frio?",
        options: ["Rede de farmácias", "Sistema de transporte e armazenamento de vacinas", "Rede de hospitais", "Rede de internet para vacinação"],
        answer: "Sistema de transporte e armazenamento de vacinas"
    },
    {
        question: "Qual personagem é símbolo das campanhas de vacinação no Brasil?",
        options: ["Zé Gotinha", "Vacina Boy", "Doutor Saúde", "Capitão Seringa"],
        answer: "Zé Gotinha"
    },
    {
        question: "O que pode acontecer se uma vacina for armazenada fora da temperatura ideal?",
        options: ["Ela pode perder a eficácia", "Ela se transforma em remédio", "Ela vira veneno", "Nada acontece"],
        answer: "Ela pode perder a eficácia"
    },
    {
        question: "Qual desses equipamentos é essencial na Rede de Frio?",
        options: ["Computador", "Refrigerador com termômetro", "Ventilador", "Fogão"],
        answer: "Refrigerador com termômetro"
    }
];

let currentQuestion = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersEl.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
        resultEl.textContent = "✅ Resposta correta!";
    } else {
        resultEl.textContent = `❌ Errado! A resposta certa é: ${correct}`;
    }

    setTimeout(() => {
        resultEl.textContent = "";
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            questionEl.textContent = "🎉 Você concluiu o quiz!";
            answersEl.innerHTML = "";
        }
    }, 1500);
}

loadQuestion();
