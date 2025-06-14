document.addEventListener('DOMContentLoaded', function() {
    // Lógica para mudar a cor de fundo
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const selectedColor = box.dataset.color;
            document.body.style.backgroundColor = selectedColor;
        });
    });

    // Lógica para gerar frase motivacional
    const gerarFraseBtn = document.getElementById('gerarFraseBtn');
    const mensagemMotivacional = document.getElementById('mensagemMotivacional');

    const frases = [
        "Acredite no seu potencial. Você é capaz de coisas incríveis!",
        "Não espere por oportunidades, crie-as.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "A persistência é o caminho do êxito.",
        "Seja a mudança que você deseja ver no mundo.",
        "Cada dia é uma nova chance para mudar sua vida.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
        "A jornada de mil milhas começa com um único passo.",
        "Sua única limitação é aquela que você impõe à sua própria mente."
    ];

    gerarFraseBtn.addEventListener('click', function() {
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        const fraseSelecionada = frases[indiceAleatorio];

        mensagemMotivacional.textContent = fraseSelecionada;

        // Animação da frase motivacional
        mensagemMotivacional.classList.remove('show');
        setTimeout(() => {
            mensagemMotivacional.classList.add('show');
        }, 10);
    });
});
