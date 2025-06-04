document.addEventListener('DOMContentLoaded', function() {
    // 1. Obter referências aos elementos HTML
    const gerarFraseBtn = document.getElementById('gerarFraseBtn');
    const mensagemMotivacional = document.getElementById('mensagemMotivacional');

    // Array de frases motivacionais
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

    // 2. Adicionar um "ouvinte de evento" (event listener) ao botão
    // Isso fará com que uma função seja executada toda vez que o botão for clicado.
    gerarFraseBtn.addEventListener('click', function()
        {
        // 3. Selecionar uma frase motivacional aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        const fraseSelecionada = frases[indiceAleatorio];

        // 4. Exibir a frase abaixo do botão
        mensagemMotivacional.textContent = fraseSelecionada;

        // 5. Adicionar a classe 'show' para ativar a transição CSS e tornar a mensagem visível
        // Remove a classe primeiro para permitir a animação toda vez que o botão é clicado
        mensagemMotivacional.classList.remove('show');
        // Pequeno atraso para garantir que a transição ocorra se a mesma frase for clicada rapidamente
        setTimeout(() => {
            mensagemMotivacional.classList.add('show');
        }, 10); 
        });
        });
