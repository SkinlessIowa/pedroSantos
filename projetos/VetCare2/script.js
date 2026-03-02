// script.js - VetCare Website Aprimorado

document.addEventListener('DOMContentLoaded', function() {
    // Elementos principais
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    
    // Botões do Hero corrigidos
    const scheduleHeroBtn = document.getElementById('scheduleHeroBtn');
    const servicesHeroBtn = document.getElementById('servicesHeroBtn');
    const contactHeroBtn = document.getElementById('contactHeroBtn');
    const teamHeroBtn = document.getElementById('teamHeroBtn');
    
    // Outros botões
    const appointmentBtn = document.getElementById('appointmentBtn');
    const emergencyBtn = document.getElementById('emergencyBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    
    // Modais
    const serviceModal = document.getElementById('serviceModal');
    const appointmentModal = document.getElementById('appointmentModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // Formulários
    const appointmentFormModal = document.getElementById('appointmentFormModal');
    const contactForm = document.getElementById('contactForm');
    
    // Elementos de serviço
    const serviceLinks = document.querySelectorAll('.service-link');
    
    // Elementos de galeria
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Elementos de estatísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Vídeos do hero
    const heroVideos = document.querySelectorAll('.slide-video');
    
    // Estado da aplicação
    let currentSlide = 0;
    let autoSlideInterval;
    let statsAnimated = false;
    
    // ========== HEADER SCROLL EFFECT ==========
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Ativar link de navegação ativo
        const sections = document.querySelectorAll('section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Animar estatísticas quando visíveis
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar && !statsAnimated && window.scrollY > statsBar.offsetTop - 500) {
            animateStats();
            statsAnimated = true;
        }
    });
    
    // ========== MOBILE MENU TOGGLE ==========
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            document.body.style.overflow = '';
        });
    });
    
    // ========== SLIDER DE VÍDEOS ==========
    function showSlide(n) {
        // Pausar todos os vídeos
        heroVideos.forEach(video => {
            video.pause();
        });
        
        // Remove classe active de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Atualiza índice atual
        currentSlide = (n + slides.length) % slides.length;
        
        // Adiciona classe active ao slide e dot atual
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Reproduzir vídeo do slide ativo
        const activeVideo = slides[currentSlide].querySelector('.slide-video');
        if (activeVideo) {
            activeVideo.play().catch(e => console.log('Erro ao reproduzir vídeo:', e));
        }
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners para controles do slider
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });
    
    // Auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 8000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Pausar auto slide quando mouse estiver sobre o slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Garantir que vídeos estejam mutados
    heroVideos.forEach(video => {
        video.muted = true;
        video.playsInline = true;
    });
    
    // ========== ANIMAÇÃO DOS CONTADORES DE ESTATÍSTICAS ==========
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                    stat.style.animation = 'countUp 0.5s ease';
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 16);
        });
    }
    
    // ========== SISTEMA DE MODAIS ==========
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function closeAllModals() {
        closeModal(serviceModal);
        closeModal(appointmentModal);
        closeModal(confirmationModal);
    }
    
    // Event listeners para fechar modais
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });
    
    // Fechar modais ao clicar fora
    [serviceModal, appointmentModal, confirmationModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Fechar modais com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
    
    // ========== DETALHES DOS SERVIÇOS ==========
    const serviceDetails = {
        'consultas': {
            title: 'Consultas Veterinárias',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/consulta-veterinaria.webp" alt="Consultas Veterinárias">
                    </div>
                    <div class="service-detail-text">
                        <h4>Consulta Geral Completa</h4>
                        <p>Oferecemos consultas veterinárias abrangentes com foco na prevenção, diagnóstico e tratamento de doenças em animais de estimação.</p>
                        
                        <h5>O que inclui:</h5>
                        <ul>
                            <li>Exame clínico completo</li>
                            <li>Avaliação de peso e condição corporal</li>
                            <li>Verificação de sinais vitais</li>
                            <li>Orientação nutricional personalizada</li>
                            <li>Plano de prevenção de parasitas</li>
                            <li>Encaminhamento para especialistas quando necessário</li>
                        </ul>
                        
                        <h5>Duração e Preparação:</h5>
                        <p>Consultas duram em média 30-45 minutos. Recomendamos trazer histórico médico do pet se disponível.</p>
                        
                        <div class="service-pricing">
                            <h5>Valores:</h5>
                            <ul>
                                <li>Consulta de rotina: R$ 120,00</li>
                                <li>Retorno: R$ 80,00</li>
                                <li>Consulta de emergência: R$ 200,00</li>
                            </ul>
                        </div>
                        
                        <button class="btn btn-primary" id="scheduleFromService">
                            <i class="fas fa-calendar-alt"></i> Agendar Consulta
                        </button>
                    </div>
                </div>
            `
        },
        'vacinação': {
            title: 'Programa de Vacinação',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/vacinação-veterinaria.webp" alt="Vacinação">
                    </div>
                    <div class="service-detail-text">
                        <h4>Programa Completo de Imunização</h4>
                        <p>Vacinação é fundamental para prevenir doenças graves em pets. Seguimos protocolos atualizados baseados em idade, estilo de vida e riscos.</p>
                        
                        <h5>Vacinas Disponíveis:</h5>
                        <ul>
                            <li><strong>V8/V10:</strong> Protege contra as principais doenças virais</li>
                            <li><strong>Antirrábica:</strong> Obrigatória por lei</li>
                            <li><strong>Giárdia:</strong> Previne infecções intestinais</li>
                            <li><strong>Leishmaniose:</strong> Para áreas endêmicas</li>
                            <li><strong>Gripe Canina:</strong> Para cães em creches ou hotéis</li>
                        </ul>
                        
                        <h5>Cronograma Recomendado:</h5>
                        <ul>
                            <li>45 dias: Primeira dose V8/V10</li>
                            <li>66 dias: Segunda dose + Giárdia</li>
                            <li>87 dias: Terceira dose + Antirrábica</li>
                            <li>Anualmente: Reforços</li>
                        </ul>
                        
                        <div class="service-pricing">
                            <h5>Valores por dose:</h5>
                            <ul>
                                <li>V8/V10: R$ 80,00</li>
                                <li>Antirrábica: R$ 60,00</li>
                                <li>Giárdia: R$ 90,00</li>
                                <li>Pacote completo filhote: R$ 280,00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        'cirurgias': {
            title: 'Cirurgias Veterinárias',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/cirurgia-veterinaria.jpg" alt="Cirurgias">
                    </div>
                    <div class="service-detail-text">
                        <h4>Centro Cirúrgico Especializado</h4>
                        <p>Realizamos procedimentos cirúrgicos com tecnologia de ponta e equipe especializada, garantindo segurança e conforto para seu pet.</p>
                        
                        <h5>Procedimentos Realizados:</h5>
                        <ul>
                            <li>Castração (machos e fêmeas)</li>
                            <li>Cirurgias ortopédicas</li>
                            <li>Remoção de tumores</li>
                            <li>Correção de fraturas</li>
                            <li>Cirurgias oftalmológicas</li>
                            <li>Procedimentos odontológicos</li>
                        </ul>
                        
                        <h5>Nosso Processo:</h5>
                        <ol>
                            <li>Consulta pré-cirúrgica com exames</li>
                            <li>Jejum controlado de 8-12 horas</li>
                            <li>Anestesia monitorada por equipamentos</li>
                            <li>Recuperação em área especializada</li>
                            <li>Orientações pós-operatórias detalhadas</li>
                        </ol>
                        
                        <div class="service-pricing">
                            <h5>Valores Referenciais:</h5>
                            <ul>
                                <li>Castração canina: R$ 400-800</li>
                                <li>Castração felina: R$ 300-500</li>
                                <li>Cirurgia ortopédica: R$ 800-2500</li>
                                <li>Remoção de tumor: R$ 600-1500</li>
                            </ul>
                            <p><em>*Valores variam conforme complexidade e tamanho do animal</em></p>
                        </div>
                    </div>
                </div>
            `
        },
        'exames': {
            title: 'Exames Diagnósticos',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/exames-veterinarios.jpeg" alt="Exames">
                    </div>
                    <div class="service-detail-text">
                        <h4>Diagnóstico por Imagem e Laboratório</h4>
                        <p>Contamos com equipamentos modernos para diagnósticos precisos e rápidos, essenciais para tratamentos eficazes.</p>
                        
                        <h5>Exames Disponíveis:</h5>
                        <ul>
                            <li><strong>Raio-X Digital:</strong> Para fraturas, problemas articulares e torácicos</li>
                            <li><strong>Ultrassonografia:</strong> Avaliação de órgãos internos e gestação</li>
                            <li><strong>Eletrocardiograma:</strong> Avaliação cardíaca</li>
                            <li><strong>Exames Laboratoriais:</strong> Hemograma, bioquímica, urina, fezes</li>
                            <li><strong>Citologia:</strong> Análise de células para detecção de câncer</li>
                        </ul>
                        
                        <h5>Preparação:</h5>
                        <ul>
                            <li>Jejum de 8 horas para exames de sangue</li>
                            <li>Coleta de urina preferencialmente pela manhã</li>
                            <li>Trazer amostra recente de fezes quando necessário</li>
                            <li>Sedativo pode ser necessário para alguns exames de imagem</li>
                        </ul>
                        
                        <div class="service-pricing">
                            <h5>Valores:</h5>
                            <ul>
                                <li>Raio-X: R$ 120-250</li>
                                <li>Ultrassom: R$ 180-350</li>
                                <li>Hemograma completo: R$ 80,00</li>
                                <li>Bioquímica: R$ 120-200</li>
                                <li>Pacote diagnóstico completo: R$ 400,00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        'banho-tosa': {
            title: 'Banho e Tosa',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/tosa-veterinaria.webp" alt="Banho e Tosa">
                    </div>
                    <div class="service-detail-text">
                        <h4>Cuidados Estéticos e de Higiene</h4>
                        <p>Oferecemos serviços de banho, tosa e cuidados estéticos com produtos de qualidade e profissionais especializados em diferentes raças.</p>
                        
                        <h5>Nossos Serviços:</h5>
                        <ul>
                            <li>Banho com shampoo específico para tipo de pelagem</li>
                            <li>Hidratação e condicionamento</li>
                            <li>Tosa higiênica e estética</li>
                            <li>Corte de unhas</li>
                            <li>Limpeza de ouvidos</li>
                            <li>Escovação e desembaraço</li>
                            <li>Tosa terapêutica para pets idosos</li>
                        </ul>
                        
                        <h5>Benefícios:</h5>
                        <ul>
                            <li>Prevenção de problemas de pele</li>
                            <li>Controle de parasitas</li>
                            <li>Maior conforto térmico</li>
                            <li>Identificação precoce de nódulos ou alterações na pele</li>
                            <li>Redução de alergias em humanos sensíveis</li>
                        </ul>
                        
                        <div class="service-pricing">
                            <h5>Tabela de Preços:</h5>
                            <ul>
                                <li>Banho (pequeno): R$ 50,00</li>
                                <li>Banho (médio): R$ 70,00</li>
                                <li>Banho (grande): R$ 90,00</li>
                                <li>Banho + Tosa: + R$ 40,00</li>
                                <li>Pacote mensal (4 banhos): 15% desconto</li>
                            </ul>
                        </div>
                        
                        <button class="btn btn-primary" id="scheduleGrooming">
                            <i class="fas fa-calendar-alt"></i> Agendar Banho/Tosa
                        </button>
                    </div>
                </div>
            `
        },
        'internação': {
            title: 'Internação e Monitoramento',
            content: `
                <div class="service-detail-content">
                    <div class="service-detail-image">
                        <img src="ibagens/internacao-veterinaria.webp" alt="Internação">
                    </div>
                    <div class="service-detail-text">
                        <h4>Cuidados 24 horas</h4>
                        <p>Disponibilizamos internação para pets que necessitam de monitoramento constante, tratamento intensivo ou recuperação pós-cirúrgica.</p>
                        
                        <h5>Nossa Estrutura:</h5>
                        <ul>
                            <li>Boxes individuais com temperatura controlada</li>
                            <li>Monitoramento cardíaco e respiratório</li>
                            <li>Soroterapia e medicação intravenosa</li>
                            <li>Oxigenoterapia quando necessário</li>
                            <li>Alimentação especial conforme prescrição</li>
                            <li>Visitas monitoradas para conforto do pet</li>
                        </ul>
                        
                        <h5>Quando é Necessária:</h5>
                        <ul>
                            <li>Recuperação pós-cirúrgica</li>
                            <li>Doenças infecciosas que exigem isolamento</li>
                            <li>Intoxicações ou envenenamentos</li>
                            <li>Pets idosos com condições crônicas</li>
                            <li>Observação de doenças em investigação</li>
                        </ul>
                        
                        <h5>Nosso Compromisso:</h5>
                        <p>Mantemos os tutores informados sobre a evolução do pet através de atualizações regulares por telefone ou WhatsApp.</p>
                        
                        <div class="service-pricing">
                            <h5>Valores Diários:</h5>
                            <ul>
                                <li>Internação básica: R$ 180,00</li>
                                <li>Internação com medicação: R$ 250,00</li>
                                <li>Internação intensiva: R$ 350,00</li>
                                <li>Plantão noturno: R$ 200,00 adicional</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    // Event listeners para botões "Saiba mais"
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceType = link.getAttribute('data-service');
            const service = serviceDetails[serviceType];
            
            if (service) {
                document.getElementById('serviceModalTitle').textContent = service.title;
                document.getElementById('serviceModalBody').innerHTML = service.content;
                openModal(serviceModal);
                
                // Adicionar evento ao botão de agendamento dentro do modal
                const scheduleBtnInModal = document.getElementById('scheduleFromService');
                if (scheduleBtnInModal) {
                    scheduleBtnInModal.addEventListener('click', () => {
                        closeModal(serviceModal);
                        openAppointmentModal(serviceType);
                    });
                }
                
                const scheduleGroomingBtn = document.getElementById('scheduleGrooming');
                if (scheduleGroomingBtn) {
                    scheduleGroomingBtn.addEventListener('click', () => {
                        closeModal(serviceModal);
                        openAppointmentModal('banho-tosa');
                    });
                }
            }
        });
    });
    
    // ========== FORMULÁRIO DE AGENDAMENTO ==========
    function openAppointmentModal(serviceType = '') {
        openModal(appointmentModal);
        
        // Preencher serviço se especificado
        if (serviceType && document.getElementById('serviceType')) {
            const serviceSelect = document.getElementById('serviceType');
            const serviceMapping = {
                'consultas': 'consultation',
                'vacinação': 'vaccine',
                'cirurgias': 'surgery',
                'exames': 'exam',
                'banho-tosa': 'grooming',
                'internação': 'emergency'
            };
            
            if (serviceMapping[serviceType]) {
                serviceSelect.value = serviceMapping[serviceType];
            }
        }
        
        // Configurar data mínima (amanhã)
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDate = tomorrow.toISOString().split('T')[0];
        const dateInput = document.getElementById('preferredDate');
        if (dateInput) {
            dateInput.min = minDate;
            dateInput.value = minDate;
        }
    }
    
    // ========== BOTÕES DO HERO CORRIGIDOS ==========
    
    // Botão "Agendar Consulta" do Hero (agora funciona igual aos outros)
    if (scheduleHeroBtn) {
        scheduleHeroBtn.addEventListener('click', () => {
            openAppointmentModal('consultas');
        });
    }
    
    // Botão "Nossos Serviços" do Hero (leva para a seção de serviços)
    if (servicesHeroBtn) {
        servicesHeroBtn.addEventListener('click', () => {
            document.querySelector('#services').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Botão "Fale Conosco" do Hero (leva para a seção de contato)
    if (contactHeroBtn) {
        contactHeroBtn.addEventListener('click', () => {
            document.querySelector('#contact').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Botão "Conheça a Equipe" do Hero
    if (teamHeroBtn) {
        teamHeroBtn.addEventListener('click', () => {
            document.querySelector('#team').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Botão "Agendar" da Navbar (funciona igual aos outros)
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', () => openAppointmentModal());
    }
    
    // Botão "Emergência" da Navbar
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', () => {
            openAppointmentModal('internação');
            if (document.getElementById('urgency')) {
                document.getElementById('urgency').value = 'emergency';
            }
            if (document.getElementById('serviceType')) {
                document.getElementById('serviceType').value = 'emergency';
            }
        });
    }
    
    // Botão "Saiba Mais" da seção About
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // ========== VALIDAÇÃO E ENVIO DO FORMULÁRIO ==========
    if (appointmentFormModal) {
        appointmentFormModal.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validação
            const requiredFields = appointmentFormModal.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--danger)';
                    setTimeout(() => {
                        field.style.borderColor = '';
                    }, 3000);
                }
            });
            
            if (!isValid) {
                alert('Por favor, preencha todos os campos obrigatórios (*)');
                return;
            }
            
            // Coletar dados
            const formData = new FormData(appointmentFormModal);
            const appointmentData = Object.fromEntries(formData);
            
            // Simular envio
            console.log('Dados do agendamento:', appointmentData);
            
            // Mostrar confirmação
            showConfirmation(appointmentData);
            
            // Fechar modal de agendamento
            closeModal(appointmentModal);
            
            // Limpar formulário
            setTimeout(() => {
                appointmentFormModal.reset();
            }, 500);
        });
    }
    
    // ========== MODAL DE CONFIRMAÇÃO ==========
    function showConfirmation(data) {
        // Formatar detalhes para exibição
        const petName = data.petName || 'Seu pet';
        const serviceType = getServiceName(data.serviceType);
        const preferredDate = formatDate(data.preferredDate);
        const preferredTime = getTimeName(data.preferredTime);
        
        const confirmationDetails = `
            <strong>Pet:</strong> ${petName}<br>
            <strong>Serviço:</strong> ${serviceType}<br>
            <strong>Data preferencial:</strong> ${preferredDate}<br>
            <strong>Horário:</strong> ${preferredTime}<br>
            <strong>Urgência:</strong> ${getUrgencyName(data.urgency)}
        `;
        
        document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
        openModal(confirmationModal);
    }
    
    // Funções auxiliares para formatação
    function getServiceName(value) {
        const services = {
            'consultation': 'Consulta Geral',
            'vaccine': 'Vacinação',
            'surgery': 'Cirurgia',
            'exam': 'Exames',
            'grooming': 'Banho/Tosa',
            'emergency': 'Emergência',
            'followup': 'Retorno/Acompanhamento'
        };
        return services[value] || value;
    }
    
    function formatDate(dateString) {
        if (!dateString) return 'Não especificada';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    }
    
    function getTimeName(value) {
        const times = {
            'morning': 'Manhã (8h-12h)',
            'afternoon': 'Tarde (13h-18h)',
            'evening': 'Noite (após 18h)',
            'flexible': 'Flexível'
        };
        return times[value] || value;
    }
    
    function getUrgencyName(value) {
        const urgencies = {
            'normal': 'Normal',
            'urgent': 'Urgente',
            'emergency': 'Emergência'
        };
        return urgencies[value] || value;
    }
    
    // Fechar confirmação
    document.getElementById('closeConfirmation')?.addEventListener('click', () => {
        closeModal(confirmationModal);
    });
    
    // ========== FORMULÁRIO DE CONTATO ==========
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--danger)';
                    setTimeout(() => {
                        field.style.borderColor = '';
                    }, 3000);
                }
            });
            
            if (!isValid) {
                alert('Por favor, preencha todos os campos obrigatórios (*)');
                return;
            }
            
            // Simular envio
            const formData = new FormData(contactForm);
            const contactData = Object.fromEntries(formData);
            console.log('Dados de contato:', contactData);
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // ========== FILTRO DA GALERIA ==========
    function filterGallery(category) {
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Event listeners para filtros
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active de todos os botões
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Adiciona active ao botão clicado
                btn.classList.add('active');
                
                // Filtra a galeria
                const category = btn.getAttribute('data-filter');
                filterGallery(category);
            });
        });
    }
    
    // ========== ANIMAÇÃO DE SCROLL ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                setTimeout(() => {
                    if (entry.target.classList.contains('animate')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }, 100);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.service-card, .team-card, .feature, .gallery-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
    
    // ========== INICIALIZAÇÃO ==========
    function init() {
        // Iniciar slider de vídeos
        showSlide(0);
        startAutoSlide();
        
        // Adicionar ano atual no footer
        const currentYear = new Date().getFullYear();
        const copyrightElement = document.querySelector('.copyright p');
        if (copyrightElement) {
            copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
        }
        
        // Adicionar smooth scroll para links âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 90,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Verificar estatísticas na inicialização
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar && window.scrollY > statsBar.offsetTop - 500) {
            animateStats();
            statsAnimated = true;
        }
        
        // Configurar fallback para vídeos caso não carreguem
        heroVideos.forEach(video => {
            video.addEventListener('error', () => {
                console.log('Erro ao carregar vídeo:', video.src);
                // Pode adicionar fallback para imagem aqui se necessário
            });
        });
    }
    
    // Inicializar aplicação
    init();
    
    // ========== FUNÇÕES ADICIONAIS ==========
    
    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('.newsletter-input');
        const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
        
        newsletterBtn.addEventListener('click', () => {
            if (newsletterInput.value && isValidEmail(newsletterInput.value)) {
                alert('📧 Obrigado por se inscrever em nossa newsletter!');
                newsletterInput.value = '';
            } else {
                alert('Por favor, insira um email válido.');
            }
        });
        
        newsletterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
    
    // Validação de email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Estilo CSS dinâmico para service-detail-content
    const style = document.createElement('style');
    style.textContent = `
        .service-detail-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
        }
        
        .service-detail-image {
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow-lg);
        }
        
        .service-detail-image img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .service-detail-text h4 {
            color: var(--primary);
            margin-bottom: 1rem;
        }
        
        .service-detail-text h5 {
            color: var(--secondary);
            margin: 1.5rem 0 0.5rem;
        }
        
        .service-detail-text ul, 
        .service-detail-text ol {
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .service-detail-text li {
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }
        
        .service-pricing {
            background-color: var(--light-gray);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            margin: 1.5rem 0;
        }
        
        .service-pricing h5 {
            margin-top: 0;
        }
        
        .service-pricing ul {
            margin-bottom: 0;
        }
        
        @media (max-width: 768px) {
            .service-detail-content {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});