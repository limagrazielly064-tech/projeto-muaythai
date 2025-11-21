// 1. Função para Simular Login
function fazerLogin(event) {
    event.preventDefault(); // Impede o recarregamento da página
    const email = document.getElementById('emailInput').value;
    
    // Alerta de sucesso
    alert(`Bem-vindo de volta, ${email}! Sawadee Krap!`);
    
    // Fecha o modal (usando a ferramenta do Bootstrap)
    const modalElement = document.getElementById('loginModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance.hide();
}

// 2. Função para Assinar Newsletter
function assinarNewsletter(event) {
    event.preventDefault();
    alert('Inscrição realizada! Agora você faz parte da família.');
}

// 3. Função para Comentários
function enviarComentario(event) {
    event.preventDefault();
    alert('Obrigado! Seu comentário foi enviado para aprovação.');
    event.target.reset(); // Limpa o campo de texto
}

// 4. Função para "Ler Mais"
function lerArtigoCompleto(titulo) {
    alert(`Abrindo o artigo completo sobre: ${titulo}...`);
}

// 5. Rolar suavemente até a newsletter
function rolarParaNewsletter() {
    const box = document.getElementById('newsletter-box');
    box.scrollIntoView({ behavior: 'smooth' });
    // Adiciona um efeito visual temporário (piscar borda)
    box.classList.add('border-light');
    setTimeout(() => {
        box.classList.remove('border-light');
    }, 1000);
}