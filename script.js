// ========== CONFIGURAÇÃO DOS PROJETOS ==========
const projetosData = {
    vectors: [
        {
            id: 'vector1',
            titulo: 'Brasília Vetor para Ecobag',
            descricao: 'Comissão para estampa de ecobag, cidade de Brasilia vetorizada',
            imagem: 'mídia/vetores/Frame 1(2).png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector2',
            titulo: 'Zé Gotinha Monge Vetor',
            descricao: 'Comissão distribuidor, Zé Gotinha com quimono de monge',
            imagem: 'mídia/vetores/Frame 2.png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector3',
            titulo: 'Zé Gotinha trajado branco da Umbanda Vetor',
            descricao: 'Comissão distribuidor, Zé Gotinha com vestes características de religiões afro-brasileiras',
            imagem: 'mídia/vetores/Frame 8(1).png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector4',
            titulo: 'Logo SUS Vetor',
            descricao: 'Comissão distribuidor, logo do SUS vetorizada',
            imagem: 'mídia/vetores/Frame-SUS-Logo.png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector5',
            titulo: 'Zé Gotinha Vetor Mulher Maravilha',
            descricao: 'Comissão distribuidor, Zé Gotinha como Mulher Maravilha',
            imagem: 'mídia/vetores/Frame-Wonder-Woman.png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector6',
            titulo: 'Zé Gotinha Vetor',
            descricao: 'Comissão distribuidor, Zé Gotinha vetorizado',
            imagem: 'mídia/vetores/Frame-Zé-Gotinha.png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        },
        {
            id: 'vector7',
            titulo: 'Símbolo Vetor Silhueta',
            descricao: 'Silhueta de personagem de videogame para o Navega Arcade, projeto de interface de emulador web de fliperama',
            imagem: 'mídia/vetores/Frame 1(3).png',
            categoria: 'Vetor',
            ano: '2025',
            ferramentas: 'Figma'
        }
    ],
};

const webProjects = [
    {
        id: 'andreLanches',
        name: 'André Lanches',
        path: 'projetos/André-Lanches (4)/',
        mainFile: 'index.html',
        type: 'website',
        year: '2025',
        description: 'Website completo para lanchonete com cardápio online, sistema de pedidos e informações de contato.',
        fileCount: 15,
        icon: 'fas fa-hamburger',
        color: '#FF6B35'
    },
    {
        id: 'bellaVida',
        name: 'Bella Vida Estética',
        path: 'projetos/Bella-Vida/',
        mainFile: 'index.html',
        type: 'website',
        year: '2025',
        description: 'Site completo para clínica de estética com múltiplas páginas e agendamento online.',
        fileCount: 25,
        icon: 'fas fa-spa',
        color: '#9D4EDD'
    },
    {
        id: 'defensoriaCartilhas',
        name: 'Cartilhas Defensoria',
        path: 'projetos/Defensoria Cartilhas Versão final/',
        mainFile: 'index.html',
        type: 'catalog',
        year: '2025',
        description: 'Catálogo digital de cartilhas jurídicas com sistema de busca e filtros.',
        fileCount: 20,
        icon: 'fas fa-book',
        color: '#4361EE'
    },
    {
        id: 'landingAdvogados',
        name: 'Landing Page Advogados',
        path: 'projetos/landingpage-pra-advogados/',
        mainFile: 'index.html',
        type: 'landing-page',
        year: '2025',
        description: 'Página de captura para escritório de advocacia, com formulário de contato e informações de serviços.',
        fileCount: 18,
        icon: 'fas fa-gavel',
        color: '#7209B7'
    },
    {
        id: 'navegaArcade',
        name: 'Navega Arcade',
        path: 'projetos/navega arcade/',
        mainFile: 'game.html',
        type: 'emulator',
        year: '2025',
        description: 'Emulador de jogos arcade online com KOF 2002. Interface completa com controles.',
        fileCount: 35,
        icon: 'fas fa-gamepad',
        color: '#FF006E'
    },
    {
        id: 'ronronCafe',
        name: 'Ronron Café',
        path: 'projetos/Ronron café/',
        mainFile: 'index.html',
        type: 'website',
        year: '2025',
        description: 'Website para cafeteria temática de gatos com cardápio, galeria e informações sobre o espaço.',
        fileCount: 12,
        icon: 'fas fa-coffee',
        color: '#F3722C'
    },
    {
        id: 'vetCare',
        name: 'VetCare Clínica',
        path: 'projetos/VetCare2/',
        mainFile: 'index.html',
        type: 'website',
        year: '2025',
        description: 'Site para clínica veterinária, com informações de serviços, equipe e agendamento.',
        fileCount: 22,
        icon: 'fas fa-paw',
        color: '#90BE6D'
    },
    {
        id: 'educacao',
        name: 'Portal Educação',
        path: 'projetos/Educação/',
        mainFile: 'Educação.html',
        type: 'portal',
        year: '2025',
        description: 'Portal de aprendizado online que visa preparar professores ao lecionamento tecnológico e automatizado',
        fileCount: 10,
        icon: 'fas fa-graduation-cap',
        color: '#577590'
    },
    {
        id: 'setembroAmarelo',
        name: 'Setembro Amarelo',
        path: 'projetos/Setembro Amarelo/',
        mainFile: 'index.html',
        type: 'landing-page',
        year: '2025',
        description: 'Landing page tematizada para o mês de setembro amarelo, com foco em conscientização sobre saúde mental.',
        fileCount: 8,
        icon: 'fas fa-heart',
        color: '#FFD700'
    }
];

const uiuxProjects = [
    {
        id: 'interfaceCurso',
        name: 'Interface_Curso',
        image: 'mídia/interface-preview/iPhone 16 Pro Max - 6.png',
        thumbnail: 'mídia/interface-preview/iPhone 16 Pro Max - 6.png',
        type: 'Mobile App',
        year: '2025',
        description: 'Interface projetada nos primeiros dias de curso. Proposta consiste em monitoramento e informações sobre plantas domésticas, com alame aplicado',
        figmaUrl: 'https://www.figma.com/proto/NPin6sG7lCxynbgtnYzZ85/Untitled?node-id=1-35&p=f&t=wcJSM4PRjw5ajlnM-0',
        color: '#3498DB'
    },
    {
        id: 'comissãoPI',
        name: 'Comissão_PI',
        image: 'mídia/interface-preview/iPhone 16 Plus - 1.png',
        thumbnail: 'mídia/interface-preview/iPhone 16 Plus - 1.png',
        type: 'Mobile App',
        year: '2025',
        description: 'Comissão feita para projeto integrador de terceiros para faculdade. Rede-Social profissional, voltada a conexões de trabalho, networking e oportunidades de estágio para estudantes universitários.',
        figmaUrl: 'https://www.figma.com/proto/XyLoZIii7uQnngcMTip6PF/Gest%C3%A3o-de-Carreiras--login-aluno-?node-id=131-156&p=f&t=i9CiCogSDlCOhMIN-0',
        color: '#9B59B6'
    },
    {
        id: 'relógioFaculdade',
        name: 'Relógio_Faculdade',
        image: 'mídia/interface-preview/Apple Watch 45mm - 11.png',
        thumbnail: 'mídia/interface-preview/Apple Watch 45mm - 11.png',
        type: 'Smartwatch Interface',
        year: '2024',
        description: 'Atividade da faculdade. Consiste em criar uma interface completa de um relógio inteligente, minha proposta foi apresentar um design amigável inspirado na arte modernista, com uso de cores e geometria.',
        figmaUrl: 'https://www.figma.com/proto/NuKAcCxwGd4e88Bl4k6KJl/Untitled?node-id=23-9&p=f&t=5im1049G4FtZFtWO-0',
        color: '#E74C3C'
    },
    {
        id: 'interfaceFaculdade',
        name: 'Interface_Faculdade',
        image: 'mídia/interface-preview/Página de login.png',
        thumbnail: 'mídia/interface-preview/Página de login.png',
        type: 'Mobile App',
        year: '2024',
        description: 'Trabalho em grupo para faculdade. Aplicativo de receitas culinárias com possibilidade de compartilhamento e interação entre usuários. Seu mascote é um guaxinim',
        figmaUrl: 'https://www.figma.com/proto/urKU8NGcyIyI6ubYlDkeXg/RacCook?node-id=15-35&p=f&t=EkmEb2LO1ku9UCNy-0',
        color: '#2ECC71'
    }
];

// ========== ELEMENTOS DO DOM ==========
const elements = {
    loadingScreen: document.getElementById('loadingScreen'),
    progressFill: document.getElementById('progressFill'),
    progressPercentage: document.getElementById('progressPercentage'),
    navToggle: document.getElementById('navToggle'),
    navMenu: document.getElementById('navMenu'),
    contactForm: document.querySelector('.contact-form'),
    projectModal: document.getElementById('projectModal'),
    modalContent: document.getElementById('modalContent'),
    modalProjectTitle: document.getElementById('modalProjectTitle'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    fullscreenModal: document.getElementById('fullscreenModal'),
    fullscreenIframe: document.getElementById('fullscreenIframe'),
    fsCloseBtn: document.getElementById('fsClose'),
    animatedSubtitle: document.getElementById('animatedSubtitle')
};

// ========== VARIÁVEIS GLOBAIS DO MODAL ==========
let currentModalProjects = [];
let currentModalIndex = 0;
let currentModalCategory = '';

// ========== LOADING SCREEN ==========
function simulateLoading() {
    let progress = 0;
    document.body.style.overflow = 'hidden';
    
    const loadingInterval = setInterval(() => {
        let increment = progress < 30 ? Math.random() * 3 + 1 :
                       progress < 70 ? Math.random() * 4 + 2 :
                       Math.random() * 2 + 0.5;
        
        progress = Math.min(progress + increment, 100);
        
        if (elements.progressFill) elements.progressFill.style.width = progress + '%';
        if (elements.progressPercentage) elements.progressPercentage.textContent = Math.round(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                if (elements.loadingScreen) {
                    elements.loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        elements.loadingScreen.style.display = 'none';
                        document.body.style.overflow = 'auto';
                        initPortfolio();
                    }, 800);
                }
            }, 300);
        }
    }, 20);
}

// ========== INICIALIZAÇÃO DO PORTFÓLIO ==========
function initPortfolio() {
    verificarScroll();
    initNavigation();
    initSubtitleAnimation();
    initAboutSection();
    initPortraitAnimation();
    initModalSystem();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
    initWebPreview();
    initUIUXPreview();
    updateCopyright();
}

// ========== NAVEGAÇÃO ==========
const navbar = document.getElementById('navbar');

function verificarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('black');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('black');
    }
}

window.addEventListener('scroll', verificarScroll);

function initNavigation() {
    if (!elements.navToggle || !elements.navMenu) return;
    
    elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.navToggle.innerHTML = elements.navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            elements.navMenu.classList.remove('active');
            elements.navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    window.addEventListener('scroll', () => {
        document.querySelector('.main-nav')?.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ========== ABOUT SECTION ==========
function initAboutSection() {
    initFloatingElements();
}

function initFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((el, index) => {
        const duration = 8 + Math.random() * 4;
        const delay = Math.random() * 3;
        el.style.animation = `floatElement ${duration}s ease-in-out ${delay}s infinite`;
    });
}

// ========== ANIMAÇÃO DE RETRATO ==========
function initPortraitAnimation() {
    const container = document.querySelector('.portrait-animation-container');
    if (!container) return;
    
    const portraitItems = container.querySelectorAll('.portrait-item');
    const indicatorDots = container.querySelectorAll('.indicator-dot');
    let currentIndex = 0;
    let autoInterval = null;
    
    function switchPortrait(targetIndex) {
        portraitItems.forEach(item => item.classList.remove('active'));
        indicatorDots.forEach(dot => dot.classList.remove('active'));
        
        portraitItems[targetIndex].classList.add('active');
        indicatorDots[targetIndex].classList.add('active');
        currentIndex = targetIndex;
    }
    
    indicatorDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            switchPortrait(index);
            resetAutoSwitch();
        });
    });
    
    function startAutoSwitch() {
        if (autoInterval) clearInterval(autoInterval);
        autoInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % portraitItems.length;
            switchPortrait(nextIndex);
        }, 5000);
    }
    
    function resetAutoSwitch() {
        if (autoInterval) {
            clearInterval(autoInterval);
            startAutoSwitch();
        }
    }
    
    startAutoSwitch();
    switchPortrait(0);
}

// ========== ANIMAÇÃO DO SUBTÍTULO ==========
function initSubtitleAnimation() {
    const subtitle = document.getElementById('animatedSubtitle');
    if (!subtitle) return;
    
    const words = subtitle.querySelectorAll('.word');
    let delay = 0;
    
    // Reset inicial - todas as palavras invisíveis
    words.forEach(word => {
        word.style.transitionDelay = '0s';
        word.style.transform = 'translateY(20px) rotateX(90deg)';
    });
    
    // Função para revelar sequencialmente
    function revealWords() {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('revealed');
                
                // Efeito adicional para palavras-chave
                if (['design', 'impactante', 'código', 'impecável', 'experiências', 'únicas'].includes(word.textContent.toLowerCase())) {
                    word.style.animationDelay = `${index * 0.1}s`;
                    
                    // Adicionar um efeito especial para essas palavras
                    setTimeout(() => {
                        word.style.transform = 'scale(1.05)';
                        setTimeout(() => {
                            word.style.transform = 'scale(1)';
                        }, 150);
                    }, 300);
                }
                
            }, delay + (index * 120)); // 120ms entre cada palavra
        });
    }
    
    // Delay inicial antes de começar a animação
    setTimeout(() => {
        revealWords();
    }, 1000);
    
    // Interatividade: reanimar ao passar o mouse
    subtitle.addEventListener('mouseenter', () => {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.transform = 'translateY(-5px)';
                word.style.textShadow = '0 0 15px rgba(255, 215, 0, 0.8)';
                
                setTimeout(() => {
                    word.style.transform = '';
                    word.style.textShadow = '';
                }, 300);
            }, index * 50);
        });
    });
    
    // Efeito de onda ao clicar
    subtitle.addEventListener('click', () => {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.color = 'var(--accent)';
                word.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    word.style.color = '';
                    word.style.transform = '';
                }, 300);
            }, index * 30);
        });
    });
    
    // Reiniciar animação quando a seção hero for visível novamente
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Pequeno reset e reativação
                words.forEach(word => {
                    word.classList.remove('revealed');
                });
                
                setTimeout(() => {
                    revealWords();
                }, 500);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(subtitle.closest('.hero'));
}

// ========== SISTEMA DE MODAL ==========
function initModalSystem() {
    console.log('Inicializando sistema de modal...');
    
    const modal = elements.projectModal;
    const modalCloseBtn = elements.modalCloseBtn;
    const modalBackdrop = document.querySelector('.modal-backdrop');
    
    if (!modal) {
        console.error('Modal não encontrado!');
        return;
    }
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => closeModal(modal));
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', () => closeModal(modal));
    }
    
    document.querySelectorAll('.portfolio-item[data-project]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            if (projectId) openProjectModal(projectId);
        });
    });
    
    console.log('Sistema de modal inicializado!');
}

function openProjectModal(projectId) {
    console.log('Abrindo modal para:', projectId);
    
    let projetosLista = [];
    let categoria = '';
    
    if (projectId.startsWith('vector')) {
        projetosLista = projetosData.vectors;
        categoria = 'vector';
    } else if (projectId.startsWith('illus')) {
        projetosLista = projetosData.illustrations;
        categoria = 'illustration';
    }
    
    if (projetosLista.length === 0) {
        const vectorProjeto = projetosData.vectors.find(p => p.id === projectId);
        if (vectorProjeto) {
            projetosLista = projetosData.vectors;
            categoria = 'vector';
        } else {
            const illusProjeto = projetosData.illustrations.find(p => p.id === projectId);
            if (illusProjeto) {
                projetosLista = projetosData.illustrations;
                categoria = 'illustration';
            }
        }
    }
    
    const projetoIndex = projetosLista.findIndex(p => p.id === projectId);
    
    if (projetoIndex === -1) {
        console.error('Projeto não encontrado');
        return;
    }
    
    currentModalProjects = projetosLista;
    currentModalIndex = projetoIndex;
    currentModalCategory = categoria;
    
    loadProjectInModal(projetoIndex);
    addModalNavigation();
    
    if (elements.projectModal) {
        elements.projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function loadProjectInModal(index) {
    const projeto = currentModalProjects[index];
    if (!projeto) return;
    
    const corPrincipal = currentModalCategory === 'vector' ? '#3498DB' : '#ff1900';
    
    const infoExtra = [];
    if (projeto.formato) {
        infoExtra.push(`
            <div class="metadado-item">
                <i class="fas fa-file" style="color: ${corPrincipal};"></i>
                <div>
                    <span class="metadado-label">Formato</span>
                    <span class="metadado-valor">${projeto.formato}</span>
                </div>
            </div>
        `);
    }
    
    const modalHTML = `
        <div class="projeto-modal-container" style="--cor-projeto: ${corPrincipal};">
            <div class="projeto-modal-grid">
                <div class="projeto-modal-imagem">
                    <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-img-principal" loading="lazy">
                    <div class="projeto-miniaturas">
                        <div class="miniatura-item active">
                            <img src="${projeto.imagem}" alt="thumb" loading="lazy">
                        </div>
                    </div>
                </div>
                
                <div class="projeto-modal-info">
                    <div class="projeto-header">
                        <span class="projeto-categoria" style="background: ${corPrincipal}20; color: ${corPrincipal}; border: 1px solid ${corPrincipal}40;">
                            ${projeto.categoria || (currentModalCategory === 'vector' ? 'Vetor' : 'Ilustração')}
                        </span>
                        <h2 class="projeto-titulo">${projeto.titulo}</h2>
                    </div>
                    
                    <div class="projeto-descricao">
                        <p class="projeto-descricao-curta">${projeto.descricao || ''}</p>
                    </div>
                    
                    <div class="projeto-metadados">
                        <div class="metadado-item">
                            <i class="fas fa-calendar" style="color: ${corPrincipal};"></i>
                            <div>
                                <span class="metadado-label">Ano</span>
                                <span class="metadado-valor">${projeto.ano || '2024'}</span>
                            </div>
                        </div>
                        
                        <div class="metadado-item">
                            <i class="fas fa-tools" style="color: ${corPrincipal};"></i>
                            <div>
                                <span class="metadado-label">Ferramentas</span>
                                <span class="metadado-valor">${projeto.ferramentas || 'Adobe Suite'}</span>
                            </div>
                        </div>
                        
                        ${infoExtra.join('')}
                    </div>
                    <div class="projeto-keyboard-hint" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid ${corPrincipal}20; font-size: 17px; color: #666;">
                        <i class="fas fa-keyboard" style="color: ${corPrincipal}; margin-right: 8px;"></i>
                        Use as setas do teclado para navegar
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (elements.modalContent) elements.modalContent.innerHTML = modalHTML;
    if (elements.modalProjectTitle) elements.modalProjectTitle.textContent = projeto.titulo;
    
    updateModalPositionIndicator();
}

function addModalNavigation() {
    const modalBody = document.querySelector('.modal-body');
    if (!modalBody) return;
    
    const existingIndicator = document.querySelector('.modal-position-indicator');
    if (existingIndicator) existingIndicator.remove();
    
    const positionIndicator = document.createElement('div');
    positionIndicator.className = 'modal-position-indicator';
    positionIndicator.id = 'modalPositionIndicator';
    positionIndicator.style.display = 'none';
    
    modalBody.style.position = 'relative';
    modalBody.appendChild(positionIndicator);
    
    document.addEventListener('keydown', handleModalKeyPress);
    
    updateModalPositionIndicator();
}

function navigateModalPrev() {
    if (currentModalProjects.length === 0) return;
    
    currentModalIndex--;
    if (currentModalIndex < 0) currentModalIndex = currentModalProjects.length - 1;
    
    loadProjectInModal(currentModalIndex);
}

function navigateModalNext() {
    if (currentModalProjects.length === 0) return;
    
    currentModalIndex++;
    if (currentModalIndex >= currentModalProjects.length) currentModalIndex = 0;
    
    loadProjectInModal(currentModalIndex);
}

function updateModalPositionIndicator() {
    const indicator = document.getElementById('modalPositionIndicator');
    if (indicator && currentModalProjects.length > 0) {
        indicator.textContent = `${currentModalIndex + 1} / ${currentModalProjects.length}`;
    }
}

function handleModalKeyPress(e) {
    const modal = elements.projectModal;
    if (!modal || !modal.classList.contains('active')) return;
    
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateModalPrev();
    } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateModalNext();
    }
}

function closeModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleModalKeyPress);
    
    currentModalProjects = [];
    currentModalIndex = 0;
}

// ========== WEB PREVIEW ==========
let currentProjectIndex = 0;
let autoPlayInterval = null;
let autoPlayEnabled = false;
let timerInterval = null;

function initWebPreview() {
    const container = document.getElementById('thumbnailsContainer');
    if (!container) return;
    
    generateThumbnails();
    loadProject(currentProjectIndex);
    initPreviewControls();
}

function generateThumbnails() {
    const container = document.getElementById('thumbnailsContainer');
    if (!container) return;
    
    container.innerHTML = webProjects.map((project, index) => `
        <div class="project-thumbnail ${index === currentProjectIndex ? 'active' : ''}" 
             data-index="${index}"
             title="${project.name}">
            <div class="thumbnail-image" 
                 style="background: linear-gradient(135deg, ${project.color}, ${project.color}80);">
            </div>
            <div class="thumbnail-overlay">
                <i class="${project.icon}"></i>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.project-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => loadProject(parseInt(thumb.dataset.index)));
    });
}

function loadProject(index) {
    currentProjectIndex = (index + webProjects.length) % webProjects.length;
    const project = webProjects[currentProjectIndex];
    
    const display = document.getElementById('currentProjectDisplay');
    const nameEl = document.getElementById('projectName');
    
    if (display) display.textContent = `${currentProjectIndex + 1}/${webProjects.length}`;
    if (nameEl) nameEl.textContent = project.name;
    
    loadIframe(project);
    updateActiveItems();
}

function loadIframe(project) {
    const iframe = document.getElementById('dynamicIframe');
    const loader = document.querySelector('.preview-loader');
    
    if (!iframe) return;
    
    if (loader) loader.classList.remove('hidden');
    
    iframe.style.opacity = '0';
    
    setTimeout(() => {
        iframe.src = `${project.path}${project.mainFile}`;
        iframe.onload = () => {
            if (loader) loader.classList.add('hidden');
            iframe.style.opacity = '1';
        };
    }, 400);
}

function updateActiveItems() {
    const container = document.getElementById('thumbnailsContainer');
    if (!container) return;
    
    container.querySelectorAll('.project-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentProjectIndex);
    });
}

function initPreviewControls() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pausePlayBtn = document.getElementById('pausePlayBtn');
    const refreshBtn = document.getElementById('refreshPreview');
    const fullscreenBtn = document.getElementById('fullscreenPreview');
    const openBtn = document.getElementById('openProject');
    const detailsBtn = document.getElementById('viewProjectDetails');
    
    if (prevBtn) prevBtn.addEventListener('click', () => loadProject(currentProjectIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => loadProject(currentProjectIndex + 1));
    
    if (pausePlayBtn) {
        pausePlayBtn.addEventListener('click', toggleAutoPlay);
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            const project = webProjects[currentProjectIndex];
            loadIframe(project);
        });
    }
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', openFullscreenPreview);
    }
    
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            const project = webProjects[currentProjectIndex];
            window.open(`${project.path}${project.mainFile}`, '_blank');
        });
    }
    
    if (detailsBtn) {
        detailsBtn.addEventListener('click', showProjectDetails);
    }
}

function toggleAutoPlay() {
    autoPlayEnabled = !autoPlayEnabled;
    const btn = document.getElementById('pausePlayBtn');
    
    if (autoPlayEnabled) {
        startAutoPlay();
        if (btn) btn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        stopAutoPlay();
        if (btn) btn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => loadProject(currentProjectIndex + 1), 25000);
    startTimer();
}

function stopAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    if (timerInterval) clearInterval(timerInterval);
    autoPlayInterval = null;
    timerInterval = null;
}

function startTimer() {
    let autoTimer = 10;
    const timerEl = document.getElementById('autoTimer');
    
    timerInterval = setInterval(() => {
        autoTimer--;
        if (timerEl) timerEl.textContent = autoTimer;
        if (autoTimer <= 0) autoTimer = 10;
    }, 1000);
}

function showInteractionFeedback(message) {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.9); color: #FFD700; padding: 1rem 2rem;
        border-radius: 10px; border: 1px solid #FFD700; z-index: 10000;
        font-family: 'Space Grotesk', sans-serif; font-weight: 600;
        animation: fadeInOut 2s ease;
    `;
    feedback.textContent = message;
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2000);
}

function openFullscreenPreview() {
    const project = webProjects[currentProjectIndex];
    const modal = elements.fullscreenModal;
    const iframe = elements.fullscreenIframe;
    const urlEl = document.getElementById('fullscreenUrl');
    
    if (!modal || !iframe) return;
    
    iframe.src = `${project.path}${project.mainFile}`;
    if (urlEl) urlEl.textContent = project.name;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreenModal() {
    const modal = elements.fullscreenModal;
    const iframe = elements.fullscreenIframe;
    
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (iframe) {
        setTimeout(() => iframe.src = '', 300);
    }
}

function showProjectDetails() {
    const project = webProjects[currentProjectIndex];
    
    if (elements.modalContent) {
        elements.modalContent.innerHTML = `
            <div class="project-detail">
                <div class="project-detail-image">
                    <div style="width:100%;height:400px;background:linear-gradient(135deg, ${project.color}, ${project.color}80);display:flex;align-items:center;justify-content:center;border-radius:15px;">
                        <i class="${project.icon}" style="font-size:6rem;color:white;"></i>
                    </div>
                </div>
                <div class="project-detail-info">
                    <span class="project-detail-category">${project.type.toUpperCase()}</span>
                    <h2 class="project-detail-title">${project.name}</h2>
                    <p class="project-detail-description">${project.description}</p>
                    
                    <div class="project-meta">
                        <div class="meta-item">
                            <h4>Ano</h4>
                            <p>${project.year}</p>
                        </div>
                        <div class="meta-item">
                            <h4>Tipo</h4>
                            <p>${project.type}</p>
                        </div>
                    </div>
                    
                    <div class="project-actions">
                        <button class="btn btn-primary" onclick="window.open('${project.path}${project.mainFile}', '_blank')">
                            <i class="fas fa-external-link-alt"></i> Abrir Projeto
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal(document.getElementById('projectModal'))">
                            <i class="fas fa-times"></i> Fechar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (elements.modalProjectTitle) {
        elements.modalProjectTitle.textContent = project.name;
    }
    
    if (elements.projectModal) {
        elements.projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ========== UI/UX PREVIEW ==========
let currentUIUXIndex = 0;
let zoomLevel = 1;

function initUIUXPreview() {
    generateUIUXThumbnails();
    loadUIUXProject(currentUIUXIndex);
    initUIUXControls();
    initZoomControls();
}

function generateUIUXThumbnails() {
    const container = document.getElementById('uiuxThumbnailsContainer');
    if (!container) return;
    
    container.innerHTML = uiuxProjects.map((project, index) => `
        <div class="uiux-thumbnail ${index === currentUIUXIndex ? 'active' : ''}" 
             data-index="${index}"
             title="${project.name}">
            <img src="${project.thumbnail}" alt="${project.name}" loading="lazy">
            <div class="uiux-thumbnail-overlay">
                <i class="${project.icon}"></i>
            </div>
        </div>
    `).join('');
    
    container.querySelectorAll('.uiux-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', () => loadUIUXProject(parseInt(thumb.dataset.index)));
    });
}

function loadUIUXProject(index) {
    currentUIUXIndex = (index + uiuxProjects.length) % uiuxProjects.length;
    const project = uiuxProjects[currentUIUXIndex];
    
    updateUIUXUI(project);
    loadFigmaImage(project);
    updateUIUXActiveItems();
}

function updateUIUXUI(project) {
    const nameEl = document.getElementById('figmaProjectName');
    const descEl = document.getElementById('figmaDescription');
    const specsEl = document.getElementById('figmaSpecsList');
    
    if (nameEl) nameEl.textContent = project.name;
    
    if (descEl) {
        descEl.innerHTML = `
            <h4><i class="fas fa-info-circle"></i> Sobre o Projeto</h4>
            <p>${project.description}</p>
        `;
    }
    
    if (specsEl) {
        specsEl.innerHTML = project.specs.map(spec => `
            <li><i class="fas fa-check"></i> ${spec}</li>
        `).join('');
    }
}

function loadFigmaImage(project) {
    const image = document.getElementById('figmaImage');
    const loader = document.querySelector('.figma-loader');
    
    if (!image || !loader) return;
    
    loader.classList.remove('hidden');
    
    const img = new Image();
    img.onload = () => {
        image.src = project.image;
        image.alt = project.name;
        zoomLevel = 1;
        updateZoomLevel();
        setTimeout(() => loader.classList.add('hidden'), 500);
    };
    img.src = project.image;
}

function updateUIUXActiveItems() {
    const container = document.getElementById('uiuxThumbnailsContainer');
    if (!container) return;
    
    container.querySelectorAll('.uiux-thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentUIUXIndex);
    });
}

function initUIUXControls() {
    const prevBtn = document.querySelector('.uiux-prev-btn');
    const nextBtn = document.querySelector('.uiux-next-btn');
    const openBtn = document.getElementById('openFigma');
    const detailsBtn = document.getElementById('viewDetails');
    const downloadBtn = document.getElementById('downloadAssets');
    
    if (prevBtn) prevBtn.addEventListener('click', () => loadUIUXProject(currentUIUXIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => loadUIUXProject(currentUIUXIndex + 1));
    
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            const project = uiuxProjects[currentUIUXIndex];
            window.open(project.figmaUrl, '_blank');
        });
    }
    
    if (detailsBtn) {
        detailsBtn.addEventListener('click', showUIUXProjectDetails);
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('Recursos de design disponíveis para download!');
        });
    }
}

function initZoomControls() {
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const zoomResetBtn = document.getElementById('zoomReset');
    
    if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', resetZoom);
}

function zoomIn() {
    if (zoomLevel < 3) {
        zoomLevel += 0.25;
        applyZoom();
    }
}

function zoomOut() {
    if (zoomLevel > 0.5) {
        zoomLevel -= 0.25;
        applyZoom();
    }
}

function resetZoom() {
    zoomLevel = 1;
    applyZoom();
}

function applyZoom() {
    const image = document.getElementById('figmaImage');
    if (!image) return;
    
    image.style.transform = `scale(${zoomLevel})`;
    updateZoomLevel();
}

function updateZoomLevel() {
    const levelEl = document.getElementById('zoomLevel');
    if (levelEl) levelEl.textContent = `${Math.round(zoomLevel * 100)}%`;
}

function showUIUXProjectDetails() {
    const project = uiuxProjects[currentUIUXIndex];
    
    if (elements.modalContent) {
        elements.modalContent.innerHTML = `
            <div class="project-detail">
                <div class="project-detail-image">
                    <img src="${project.image}" alt="${project.name}" style="width:100%;border-radius:15px;">
                </div>
                <div class="project-detail-info">
                    <span class="project-detail-category" style="background:${project.color}">${project.type.toUpperCase()}</span>
                    <h2 class="project-detail-title">${project.name}</h2>
                    <p class="project-detail-description">${project.description}</p>
                    
                    <div class="project-meta">
                        <div class="meta-item">
                            <h4><i class="fas fa-calendar"></i> Ano</h4>
                            <p>${project.year}</p>
                        </div>
                        <div class="meta-item">
                            <h4><i class="fas fa-layer-group"></i> Tipo</h4>
                            <p>${project.type}</p>
                        </div>
                    </div>
                    
                    <div class="project-meta">
                        <div class="meta-item">
                            <h4><i class="fas fa-star"></i> Funcionalidades</h4>
                            <ul style="list-style:none;padding-left:0;">
                                ${project.features.map(feat => `<li style="padding:0.3rem 0;"><i class="fas fa-check" style="color:${project.color}"></i> ${feat}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="project-actions">
                        <button class="btn btn-primary" onclick="window.open('${project.figmaUrl}', '_blank')">
                            <i class="fab fa-figma"></i> Ver no Figma
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (elements.modalProjectTitle) {
        elements.modalProjectTitle.textContent = `UI/UX: ${project.name}`;
    }
    
    if (elements.projectModal) {
        elements.projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ========== FORMULÁRIO DE CONTATO ==========
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    emailjs.init('jFUIA_O_nD0xJgmbc');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const nome = this.querySelector('input[name="nome"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const mensagem = this.querySelector('textarea[name="mensagem"]').value;
        
        if (!nome || !email || !mensagem) {
            alert('❌ Por favor, preencha nome, email e mensagem.');
            return;
        }
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        emailjs.send('service_bmzhft8', 'template_4f82pto', {
            from_name: nome,
            from_email: email,
            subject: this.querySelector('input[name="assunto"]').value || 'Contato pelo portfólio',
            message: mensagem,
            to_name: 'Pedro',
            date: new Date().toLocaleString('pt-BR')
        })
        .then(() => {
            alert('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.');
            contactForm.reset();
        })
        .catch(error => {
            alert('❌ Erro: ' + (error.text || 'Verifique sua conexão e tente novamente.'));
        })
        .finally(() => {
            submitBtn.innerHTML = '<i class="fas fa-envelope"></i> Enviar Mensagem';
            submitBtn.disabled = false;
        });
    });
}

// ========== ANIMAÇÕES DE SCROLL ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.portfolio-item, .skill-card, .section-header, .logofolio-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========== SCROLL SUAVE ==========
function initSmoothScroll() {
    // 1. Barra de progresso do scroll
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--secondary), var(--accent));
        z-index: 9999;
        transition: width 0.2s ease;
        box-shadow: 0 0 10px var(--secondary);
    `;
    document.body.appendChild(progressBar);
    
    // Atualizar barra de progresso
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // 2. Scroll suave personalizado para links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                smoothScrollTo(targetElement.offsetTop - 80, 800, 1.0);
            }
        });
    });
    
    // 3. Botão voltar ao topo
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary);
        color: var(--dark);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
    `;
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
            backToTopBtn.style.transform = 'translateY(0)';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
            backToTopBtn.style.transform = 'translateY(10px)';
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        smoothScrollTo(0, 600, 1.0);
    });
    
    // 4. Função de scroll suave
    function smoothScrollTo(targetPosition, duration = 800, reduction = 0.6) {
        const startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;

        distance = distance  * reduction;
        let startTime = null;
        
        // Easing function: easeOutCubic
        function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
        }
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            
            const easeProgress = easeOutCubic(progress);
            
            window.scrollTo({
                top: startPosition + (distance * easeProgress),
                behavior: 'instant'
            });
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }
    
    // 5. Scroll mais suave com teclado
    let isScrolling = false;
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            
            if (!isScrolling) {
                isScrolling = true;
                const direction = e.key === 'ArrowUp' ? -1 : 1;
                const targetScroll = window.pageYOffset + (direction * window.innerHeight * 0.8);
    
                smoothScrollTo(targetScroll, 600, 0.6);
                
                setTimeout(() => {
                    isScrolling = false;
                }, 600);
            }
        }
    });

    // 6. Scroll com wheel
    let wheelTimeout;
    window.addEventListener('wheel', function(e) {
        // Só interfere se for scroll rápido
        if (Math.abs(e.deltaY) > 100) {
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                const direction = e.deltaY > 0 ? 1 : -1;
                const targetScroll = window.pageYOffset + (direction * window.innerHeight * 0.9);
                
                smoothScrollTo(targetScroll, 700, 0.7);
            }, 50);
        }
    }, { passive: true });
}

// ========== COPYRIGHT ==========
function updateCopyright() {
    const copyright = document.querySelector('.copyright p');
    if (copyright) {
        copyright.innerHTML = copyright.innerHTML.replace('2025', new Date().getFullYear());
    }
}

// ========== INICIAR TUDO ==========
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(simulateLoading, 500);
});

// ========== EXPORTAR FUNÇÕES GLOBAIS ==========
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;
window.navigateModalPrev = navigateModalPrev;
window.navigateModalNext = navigateModalNext;
window.closeFullscreenModal = closeFullscreenModal;
