// script.js

// 1. Efeito de rolagem suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// 2. Animação de digitação no hero
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

const heroTitle = document.querySelector('.hero-content h1');
const heroSubtitle = document.querySelector('.hero-content h2');

// Só animar se os elementos existirem
if (heroTitle && heroSubtitle) {
    // Resetar o texto original para animação
    const originalTitle = heroTitle.textContent;
    const originalSubtitle = heroSubtitle.textContent;
    
    heroTitle.textContent = '';
    heroSubtitle.textContent = '';
    
    setTimeout(() => {
        typeWriter(heroTitle, originalTitle, 100);
    }, 500);
    
    setTimeout(() => {
        typeWriter(heroSubtitle, originalSubtitle, 50);
    }, 1500);
}

// 3. Contador de promoções (tempo limitado)
function setupCountdown() {
    const promoItems = document.querySelectorAll('.promo-item');
    if (!promoItems.length) return;
    
    // Definir tempo final (24 horas a partir de agora)
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);
    
    function updateCountdown() {
        const now = new Date();
        const diff = endTime - now;
        
        if (diff <= 0) {
            document.querySelector('.promo-badge').textContent = 'ENCERRADO';
            return;
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.querySelector('.promo-badge').textContent = 
            `FALTAM ${hours}h ${minutes}m ${seconds}s`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

setupCountdown();

// 4. Animação de itens do cardápio quando aparecem na tela
function animateOnScroll() {
    const items = document.querySelectorAll('.item, .promo-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

animateOnScroll();

// 5. Efeito de hover 3D nos itens do cardápio
function setup3DHover() {
    const items = document.querySelectorAll('.item, .promo-item');
    
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const x = e.offsetX;
            const y = e.offsetY;
            const centerX = item.offsetWidth / 2;
            const centerY = item.offsetHeight / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            item.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

setup3DHover();

// 6. Validação do formulário de contato com feedback visual
function setupFormValidation() {
    const form = document.getElementById('form-contato');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validar campos
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const telefone = document.getElementById('telefone');
        const assunto = document.getElementById('assunto');
        const mensagem = document.getElementById('mensagem');
        
        let isValid = true;
        
        // Resetar erros
        document.querySelectorAll('.error').forEach(el => el.remove());
        
        // Validar nome
        if (nome.value.trim() === '') {
            showError(nome, 'Por favor, insira seu nome');
            isValid = false;
        }
        
        // Validar email
        if (email.value.trim() === '' || !isValidEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido');
            isValid = false;
        }
        
        // Validar telefone (formato simplificado)
        if (telefone.value.trim() === '' || !isValidPhone(telefone.value)) {
            showError(telefone, 'Por favor, insira um telefone válido');
            isValid = false;
        }
        
        // Validar assunto
        if (assunto.value === '') {
            showError(assunto, 'Por favor, selecione um assunto');
            isValid = false;
        }
        
        // Validar mensagem
        if (mensagem.value.trim() === '') {
            showError(mensagem, 'Por favor, escreva sua mensagem');
            isValid = false;
        }
        
        // Se tudo estiver válido, mostrar mensagem de sucesso
        if (isValid) {
            showSuccessMessage();
        }
    });
    
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error';
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        input.parentNode.appendChild(errorElement);
        input.style.borderColor = '#e74c3c';
        
        setTimeout(() => {
            input.style.borderColor = '#ccc';
        }, 2000);
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function isValidPhone(phone) {
        return /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/.test(phone);
    }
    
    function showSuccessMessage() {
        const form = document.getElementById('form-contato');
        form.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4CAF50"/>
                </svg>
                <h3 style="color: #4CAF50; margin-top: 20px;">Mensagem enviada com sucesso!</h3>
                <p style="margin-top: 10px;">Entraremos em contato em breve.</p>
                <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Enviar outra mensagem</button>
            </div>
        `;
    }
}

setupFormValidation();

// 7. Botão flutuante de WhatsApp
function setupWhatsAppButton() {
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/5511123456789';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Peça pelo WhatsApp</span>
    `;
    
    document.body.appendChild(whatsappButton);
    
    // Estilos do botão (pode ser movido para o CSS)
    whatsappButton.style.position = 'fixed';
    whatsappButton.style.bottom = '20px';
    whatsappButton.style.left = '20px';
    whatsappButton.style.backgroundColor = '#25D366';
    whatsappButton.style.color = 'white';
    whatsappButton.style.padding = '12px 20px';
    whatsappButton.style.borderRadius = '30px';
    whatsappButton.style.display = 'flex';
    whatsappButton.style.alignItems = 'center';
    whatsappButton.style.gap = '10px';
    whatsappButton.style.textDecoration = 'none';
    whatsappButton.style.fontWeight = 'bold';
    whatsappButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    whatsappButton.style.zIndex = '1000';
    whatsappButton.style.transition = 'transform 0.3s, box-shadow 0.3s';
    
    whatsappButton.addEventListener('mouseenter', () => {
        whatsappButton.style.transform = 'translateY(-5px)';
        whatsappButton.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
    });
    
    whatsappButton.addEventListener('mouseleave', () => {
        whatsappButton.style.transform = 'translateY(0)';
        whatsappButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
}

setupWhatsAppButton();

// 8. Efeito de confete ao clicar nos botões de pedido
function setupConfettiButtons() {
    const buttons = document.querySelectorAll('.btn-promo');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animação de confete
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            // Feedback visual
            button.textContent = 'Adicionado ao carrinho!';
            button.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                button.textContent = 'Peça Agora';
                button.style.backgroundColor = '';
            }, 2000);
        });
    });
}

setupConfettiButtons();

// 9. Carregamento de imagens com efeito de fade
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });
    
    images.forEach(img => {
        observer.observe(img);
    });
}

// Para usar lazy loading, substitua os src das imagens por data-src no HTML
// Exemplo: <img data-src="imagem.jpg" alt="...">

// 10. Mostrar horário atual na seção de horários
function updateCurrentTime() {
    const timeElement = document.createElement('div');
    timeElement.className = 'current-time';
    timeElement.style.textAlign = 'center';
    timeElement.style.marginTop = '20px';
    timeElement.style.fontWeight = 'bold';
    timeElement.style.color = '#e74c3c';
    
    const horariosSection = document.querySelector('.horarios .container');
    if (horariosSection) {
        horariosSection.appendChild(timeElement);
        
        function updateTime() {
            const now = new Date();
            const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
            const dayName = days[now.getDay()];
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            
            timeElement.textContent = `Hoje é ${dayName}, horário atual: ${hours}:${minutes}`;
        }
        
        updateTime();
        setInterval(updateTime, 60000); // Atualizar a cada minuto
    }
}

updateCurrentTime();

// 11. Efeito de neve no inverno (pode ser ativado apenas em dezembro/janeiro)
function setupSeasonalEffects() {
    const today = new Date();
    const month = today.getMonth() + 1; // Janeiro = 1, Dezembro = 12
    
    if (month === 12 || month === 1) {
        // Adicionar efeito de neve
        const snowScript = document.createElement('script');
        snowScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        snowScript.onload = function() {
            particlesJS('hero', {
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#ffffff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 3,
                        "direction": "bottom",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": true,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 100,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        };
        document.head.appendChild(snowScript);
    }
}

// 12. Animação para títulos das seções
function animateSectionTitles() {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        const letters = title.textContent.split('');
        title.textContent = '';
        
        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `opacity 0.3s ${i * 0.05}s, transform 0.3s ${i * 0.05}s`;
            
            title.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 500);
        });
    });
}

// Chame a função quando a página carregar
window.addEventListener('load', animateSectionTitles);