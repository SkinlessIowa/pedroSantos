// script.js - Funcionalidades completas para o Dr. Marcos Vinícius

// Configurações iniciais
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initNavigation();
    initForms();
    initChatbot();
    initServices();
    initCalculators();
    initScheduleSystem();
    initScrollEffects();
    initAccessibility();
    initPerformance();
    initSecurity();
    initIntegrations();
    
    // Carregar dados iniciais
    loadServiceDetails();
    loadScheduleData();
    initCounters();
});

// 1. Sistema de Navegação
function initNavigation() {
    // Menu sticky
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Esconder/mostrar header baseado na direção do scroll
        if (window.scrollY > lastScrollY && window.scrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = window.scrollY;
    });
}

// 2. Sistema de Formulários
function initForms() {
    const consultationForm = document.getElementById('consultation-form');
    
    if (consultationForm) {
        // Máscaras de entrada
        initInputMasks();
        
        // Validação em tempo real
        initRealTimeValidation();
        
        // Auto-preenchimento (quando seguro)
        initAutofill();
        
        // Salvamento automático de rascunhos
        initDraftSaving();
        
        // Envio do formulário
        consultationForm.addEventListener('submit', handleFormSubmit);
    }
}

function initInputMasks() {
    const phoneInput = document.getElementById('telefone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) value = value.substring(0, 11);
            
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
            
            e.target.value = value;
        });
    }
}

function initRealTimeValidation() {
    const form = document.getElementById('consultation-form');
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.parentElement.classList.remove('invalid');
                this.parentElement.classList.add('valid');
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldGroup = field.parentElement;
        
        fieldGroup.classList.remove('valid', 'invalid');
        
        if (value === '') {
            fieldGroup.classList.add('invalid');
            return false;
        }
        
        // Validações específicas por tipo de campo
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                fieldGroup.classList.add('invalid');
                return false;
            }
        }
        
        if (field.id === 'telefone') {
            const digits = value.replace(/\D/g, '').length;
            if (digits < 10 || digits > 11) {
                fieldGroup.classList.add('invalid');
                return false;
            }
        }
        
        fieldGroup.classList.add('valid');
        return true;
    }
}

function initAutofill() {
    // Preencher automaticamente campos seguros (apenas se o usuário já tiver preenchido antes)
    const savedData = localStorage.getItem('userContactInfo');
    
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            const form = document.getElementById('consultation-form');
            
            Object.keys(data).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field && field.type !== 'password') {
                    field.value = data[key];
                    validateField(field);
                }
            });
        } catch (e) {
            console.error('Erro ao carregar dados salvos:', e);
        }
    }
}

function initDraftSaving() {
    const form = document.getElementById('consultation-form');
    const draftKey = 'formDraft_consultation';
    const draftSaveElement = document.querySelector('.form-draft-save');
    
    // Carregar rascunho salvo
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
        try {
            const draft = JSON.parse(savedDraft);
            Object.keys(draft).forEach(key => {
                const field = form.querySelector(`[name="${key}"]`);
                if (field) field.value = draft[key];
            });
            showDraftSavedMessage();
        } catch (e) {
            console.error('Erro ao carregar rascunho:', e);
        }
    }
    
    // Salvar rascunho automaticamente
    let saveTimeout;
    form.addEventListener('input', function() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveDraft, 1000);
    });
    
    function saveDraft() {
        const formData = new FormData(form);
        const draft = {};
        
        for (let [key, value] of formData.entries()) {
            draft[key] = value;
        }
        
        localStorage.setItem(draftKey, JSON.stringify(draft));
        showDraftSavedMessage();
    }
    
    function showDraftSavedMessage() {
        if (draftSaveElement) {
            draftSaveElement.style.opacity = '1';
            setTimeout(() => {
                draftSaveElement.style.opacity = '0.7';
            }, 2000);
        }
    }
    
    // Limpar rascunho após envio bem-sucedido
    form.addEventListener('submit', function() {
        localStorage.removeItem(draftKey);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validação final
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField(field)) isValid = false;
    });
    
    if (!isValid) {
        showNotification('Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
        return;
    }
    
    // Simular envio (em um caso real, seria uma requisição AJAX)
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Salvar informações de contato para auto-preenchimento futuro
    const contactInfo = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone')
    };
    localStorage.setItem('userContactInfo', JSON.stringify(contactInfo));
    
    // Simular delay de envio
    setTimeout(() => {
        showNotification('Formulário enviado com sucesso! Entraremos em contato em breve.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Limpar validações
        form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('valid', 'invalid');
        });
    }, 2000);
}

// 3. Sistema de Serviços Detalhados
function initServices() {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModal = document.getElementById('service-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.querySelector('.modal-close');
    
    serviceCards.forEach(card => {
        const infoBtn = card.querySelector('.service-info-btn');
        infoBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const area = card.getAttribute('data-area');
            openServiceDetailModal(area);
        });
        
        // Também permite clicar no card inteiro
        card.addEventListener('click', function() {
            const area = this.getAttribute('data-area');
            openServiceDetailModal(area);
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            serviceModal.classList.remove('open');
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('open');
        }
    });
    
    function openServiceDetailModal(area) {
        const serviceDetails = getServiceDetails(area);
        
        modalContent.innerHTML = `
            <div class="service-detail-content">
                <h2>${serviceDetails.title}</h2>
                <p>${serviceDetails.description}</p>
                
                <h3>Principais Atuações</h3>
                <ul>
                    ${serviceDetails.services.map(service => `<li>${service}</li>`).join('')}
                </ul>
                
                <div class="service-benefits">
                    ${serviceDetails.benefits.map(benefit => `
                        <div class="benefit-item">
                            <h4>${benefit.title}</h4>
                            <p>${benefit.description}</p>
                        </div>
                    `).join('')}
                </div>
                
                <h3>Como Podemos Ajudar</h3>
                <p>${serviceDetails.howWeHelp}</p>
                
                <div class="modal-actions">
                    <button class="btn-primary" onclick="scrollToForm('${area}')">Agendar Consulta em ${serviceDetails.title}</button>
                </div>
            </div>
        `;
        
        serviceModal.classList.add('open');
    }
}

function getServiceDetails(area) {
    const services = {
        previdenciario: {
            title: 'Direito Previdenciário',
            description: 'Atuamos em todas as questões relacionadas à Previdência Social, buscando sempre os melhores benefícios para nossos clientes com expertise comprovada em mais de 500 casos.',
            services: [
                'Aposentadoria por idade, tempo de contribuição e invalidez',
                'Auxílio-doença e auxílio-acidente',
                'Pensão por morte e revisão de benefícios',
                'Salário-maternidade e abono anual',
                'Benefício assistencial ao idoso e pessoa com deficiência'
            ],
            benefits: [
                {
                    title: 'Experiência Comprovada',
                    description: 'Mais de 12 anos atuando exclusivamente em direito previdenciário'
                },
                {
                    title: 'Taxa de Sucesso',
                    description: '95% dos casos obtiveram resultados positivos para nossos clientes'
                },
                {
                    title: 'Atendimento Personalizado',
                    description: 'Análise individualizada de cada caso para máxima eficiência'
                }
            ],
            howWeHelp: 'Nossa equipe analisa minuciosamente seu histórico contributivo, identifica os melhores benefícios disponíveis e elabora estratégias personalizadas para garantir seus direitos previdenciários com agilidade e segurança jurídica.'
        },
        familia: {
            title: 'Direito da Família',
            description: 'Atuamos com sensibilidade e expertise em questões familiares, sempre priorizando o bem-estar dos envolvidos e soluções consensuais.',
            services: [
                'Divórcio consensual e litigioso',
                'Guarda de filhos e regulamentação de visitas',
                'Pensão alimentícia e revisional',
                'Inventário e partilha de bens',
                'Adoção e investigação de paternidade'
            ],
            benefits: [
                {
                    title: 'Approach Humanizado',
                    description: 'Atendimento sensível às particularidades de cada família'
                },
                {
                    title: 'Mediação Familiar',
                    description: 'Busca por soluções consensuais que preservem os relacionamentos'
                },
                {
                    title: 'Agilidade Processual',
                    description: 'Resolução eficiente mesmo em casos complexos'
                }
            ],
            howWeHelp: 'Oferecemos assessoria completa em questões familiares, desde o aconselhamento inicial até a representação judicial quando necessário, sempre com foco em soluções que preservem os vínculos familiares e garantam os direitos de todos os envolvidos.'
        },
        trabalhista: {
            title: 'Direito Trabalhista',
            description: 'Defendemos os direitos dos trabalhadores com expertise em relações empregatícias e resolução de conflitos trabalhistas.',
            services: [
                'Rescisão contratual e verbas rescisórias',
                'Horas extras e adicional noturno',
                'Assédio moral e sexual no ambiente de trabalho',
                'Doenças ocupacionais e acidente de trabalho',
                'Equiparação salarial e estabilidade'
            ],
            benefits: [
                {
                    title: 'Expertise Técnica',
                    description: 'Conhecimento profundo da legislação trabalhista'
                },
                {
                    title: 'Atuação Estratégica',
                    description: 'Elaboração de estratégias personalizadas para cada caso'
                },
                {
                    title: 'Resultados Comprovados',
                    description: 'Expressiva taxa de sucesso em ações trabalhistas'
                }
            ],
            howWeHelp: 'Analisamos minuciosamente seu caso trabalhista, identificamos todas as violações de direitos e elaboramos a estratégia mais adequada para garantir a reparação integral dos prejuízos sofridos, seja por meio de acordos extrajudiciais ou ações judiciais.'
        },
        consumidor: {
            title: 'Direito do Consumidor',
            description: 'Defendemos os direitos dos consumidores contra abusos praticados por fornecedores de produtos e serviços.',
            services: [
                'Problemas com produtos defeituosos',
                'Cobranças indevidas e abusivas',
                'Vícios ocultos e vícios aparentes',
                'Cancelamento de contratos',
                'Danos morais e materiais'
            ],
            benefits: [
                {
                    title: 'Atendimento Rápido',
                    description: 'Resposta ágil para evitar prejuízos maiores'
                },
                {
                    title: 'Expertise em Mediação',
                    description: 'Busca por soluções extrajudiciais eficientes'
                },
                {
                    title: 'Representação Eficaz',
                    description: 'Atuação estratégica em ações consumeristas'
                }
            ],
            howWeHelp: 'Atuamos na defesa dos seus direitos consumeristas, desde a notificação extrajudicial até ações judiciais quando necessário, sempre buscando a reparação integral dos danos sofridos e a punição dos fornecedores que descumprirem a legislação consumerista.'
        },
        penal: {
            title: 'Direito Penal',
            description: 'Atuamos na defesa técnica de acusados em processos criminais, garantindo o amplo direito de defesa e o devido processo legal.',
            services: [
                'Defesa em processos criminais',
                'Habeas corpus e liberdade provisória',
                'Recursos e sustentações orais',
                'Acordos de não persecução penal',
                'Acompanhamento em audiências'
            ],
            benefits: [
                {
                    title: 'Defesa Técnica',
                    description: 'Elaboração de estratégias defensivas personalizadas'
                },
                {
                    title: 'Experiência em Tribunal',
                    description: 'Atuação em diversas varas criminais e tribunais'
                },
                {
                    title: 'Sigilo Absoluto',
                    description: 'Total confidencialidade sobre os casos'
                }
            ],
            howWeHelp: 'Oferecemos defesa técnica especializada em direito penal, analisando minuciosamente cada aspecto processual, identificando nulidades e elaborando estratégias defensivas personalizadas para garantir seus direitos fundamentais em todas as fases do processo.'
        },
        imobiliario: {
            title: 'Direito Imobiliário',
            description: 'Atuamos em todas as questões relacionadas a transações imobiliárias, regularização de imóveis e conflitos envolvendo propriedades.',
            services: [
                'Compra e venda de imóveis',
                'Contratos de locação residencial e comercial',
                'Usucapião e regularização fundiária',
                'Condomínios e convenções',
                'Incorporação imobiliária'
            ],
            benefits: [
                {
                    title: 'Prevenção de Conflitos',
                    description: 'Assessoria preventiva em transações imobiliárias'
                },
                {
                    title: 'Expertise Técnica',
                    description: 'Conhecimento profundo da legislação imobiliária'
                },
                {
                    title: 'Agilidade Processual',
                    description: 'Resolução eficiente de litígios imobiliários'
                }
            ],
            howWeHelp: 'Prestamos assessoria completa em direito imobiliário, desde a análise documental preventiva até a representação judicial em conflitos, garantindo segurança jurídica em todas as transações e a defesa eficaz dos seus direitos patrimoniais.'
        }
    };
    
    return services[area] || {
        title: 'Serviço Jurídico Especializado',
        description: 'Oferecemos consultoria especializada nesta área do direito com expertise técnica comprovada.',
        services: ['Análise detalhada do caso', 'Orientação jurídica personalizada', 'Elaboração de documentos', 'Representação judicial estratégica'],
        benefits: [
            {
                title: 'Experiência Comprovada',
                description: 'Anos de atuação especializada na área'
            },
            {
                title: 'Atendimento Personalizado',
                description: 'Soluções customizadas para cada cliente'
            }
        ],
        howWeHelp: 'Nossa equipe analisa seu caso minuciosamente e desenvolve a estratégia jurídica mais adequada para alcançar os melhores resultados possíveis.'
    };
}

// 4. Sistema de Grade de Horários
function initScheduleSystem() {
    const filterButtons = document.querySelectorAll('.schedule-filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar horários
            const dayFilter = this.getAttribute('data-day');
            filterSchedule(dayFilter);
        });
    });
    
    // Modal de confirmação de horário
    const scheduleModal = document.getElementById('schedule-modal');
    const scheduleModalClose = scheduleModal.querySelector('.modal-close');
    
    if (scheduleModalClose) {
        scheduleModalClose.addEventListener('click', function() {
            closeScheduleModal();
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === scheduleModal) {
            closeScheduleModal();
        }
    });
}

function loadScheduleData() {
    const scheduleGrid = document.getElementById('schedule-grid');
    if (!scheduleGrid) return;
    
    // Simulação de dados de horários
    const scheduleData = {
        segunda: [
            { time: '08:00', available: true },
            { time: '09:00', available: true },
            { time: '10:00', available: false },
            { time: '11:00', available: true },
            { time: '14:00', available: true },
            { time: '15:00', available: true },
            { time: '16:00', available: false },
            { time: '17:00', available: true }
        ],
        terca: [
            { time: '08:00', available: true },
            { time: '09:00', available: false },
            { time: '10:00', available: true },
            { time: '11:00', available: true },
            { time: '14:00', available: true },
            { time: '15:00', available: false },
            { time: '16:00', available: true },
            { time: '17:00', available: true }
        ],
        quarta: [
            { time: '08:00', available: true },
            { time: '09:00', available: true },
            { time: '10:00', available: true },
            { time: '11:00', available: false },
            { time: '14:00', available: true },
            { time: '15:00', available: true },
            { time: '16:00', available: true },
            { time: '17:00', available: false }
        ],
        quinta: [
            { time: '08:00', available: false },
            { time: '09:00', available: true },
            { time: '10:00', available: true },
            { time: '11:00', available: true },
            { time: '14:00', available: false },
            { time: '15:00', available: true },
            { time: '16:00', available: true },
            { time: '17:00', available: true }
        ],
        sexta: [
            { time: '08:00', available: true },
            { time: '09:00', available: true },
            { time: '10:00', available: false },
            { time: '11:00', available: true },
            { time: '14:00', available: true },
            { time: '15:00', available: false },
            { time: '16:00', available: true },
            { time: '17:00', available: true }
        ],
        sabado: [
            { time: '08:00', available: true },
            { time: '09:00', available: true },
            { time: '10:00', available: true },
            { time: '11:00', available: true }
        ]
    };
    
    renderSchedule(scheduleData, 'all');
}

function renderSchedule(scheduleData, filter = 'all') {
    const scheduleGrid = document.getElementById('schedule-grid');
    if (!scheduleGrid) return;
    
    // Mostrar loading
    scheduleGrid.innerHTML = '<div class="schedule-loading"><div class="loading-spinner"></div></div>';
    
    // Simular carregamento
    setTimeout(() => {
        scheduleGrid.innerHTML = '';
        
        const days = {
            segunda: 'Segunda-feira',
            terca: 'Terça-feira',
            quarta: 'Quarta-feira',
            quinta: 'Quinta-feira',
            sexta: 'Sexta-feira',
            sabado: 'Sábado'
        };
        
        Object.keys(days).forEach(day => {
            if (filter !== 'all' && filter !== day) return;
            
            const daySchedule = scheduleData[day];
            if (!daySchedule) return;
            
            const dayElement = document.createElement('div');
            dayElement.className = 'schedule-day';
            dayElement.setAttribute('data-day', day);
            
            let availableSlots = daySchedule.filter(slot => slot.available).length;
            let totalSlots = daySchedule.length;
            
            dayElement.innerHTML = `
                <h4>${days[day]} <span class="slot-count">(${availableSlots}/${totalSlots} disponíveis)</span></h4>
                <div class="time-slots">
                    ${daySchedule.map(slot => `
                        <div class="time-slot ${slot.available ? 'available' : 'booked'}" 
                             data-time="${slot.time}" 
                             data-day="${day}"
                             ${!slot.available ? 'title="Horário indisponível"' : 'title="Clique para selecionar este horário"'}>
                            ${slot.time}
                        </div>
                    `).join('')}
                </div>
            `;
            
            scheduleGrid.appendChild(dayElement);
        });
        
        // Adicionar event listeners aos slots disponíveis
        document.querySelectorAll('.time-slot.available').forEach(slot => {
            slot.addEventListener('click', function() {
                const selectedSlot = document.querySelector('.time-slot.selected');
                if (selectedSlot) {
                    selectedSlot.classList.remove('selected');
                }
                
                this.classList.add('selected');
                openScheduleConfirmation(this);
            });
        });
    }, 800);
}

function filterSchedule(filter) {
    // Em uma implementação real, isso recarregaria os dados filtrados da API
    const scheduleData = {};
    renderSchedule(scheduleData, filter);
}

function openScheduleConfirmation(slotElement) {
    const scheduleModal = document.getElementById('schedule-modal');
    const scheduleModalContent = document.getElementById('schedule-modal-content');
    
    const day = slotElement.getAttribute('data-day');
    const time = slotElement.getAttribute('data-time');
    
    const daysMap = {
        segunda: 'Segunda-feira',
        terca: 'Terça-feira',
        quarta: 'Quarta-feira',
        quinta: 'Quinta-feira',
        sexta: 'Sexta-feira',
        sabado: 'Sábado'
    };
    
    scheduleModalContent.innerHTML = `
        <div class="schedule-modal-content">
            <h3>Confirmar Agendamento</h3>
            <div class="schedule-summary">
                <h4>Detalhes do Horário Selecionado</h4>
                <p><strong>Dia:</strong> ${daysMap[day]}</p>
                <p><strong>Horário:</strong> ${time}</p>
                <p><strong>Duração:</strong> 1 hora</p>
                <p><strong>Modalidade:</strong> Presencial/Online</p>
            </div>
            
            <p>Para confirmar este agendamento, preencha o formulário acima com seus dados de contato. Entraremos em contato para confirmar a disponibilidade.</p>
            
            <div class="confirm-buttons">
                <button class="btn-secondary" onclick="closeScheduleModal()">Cancelar</button>
                <button class="btn-primary" onclick="scrollToFormWithSchedule('${day}', '${time}')">Preencher Formulário</button>
            </div>
        </div>
    `;
    
    scheduleModal.classList.add('open');
}

function closeScheduleModal() {
    const scheduleModal = document.getElementById('schedule-modal');
    scheduleModal.classList.remove('open');
    
    // Limpar seleção
    const selectedSlot = document.querySelector('.time-slot.selected');
    if (selectedSlot) {
        selectedSlot.classList.remove('selected');
    }
}

// 5. Calculadora de Honorários
function initCalculators() {
    const calculateBtn = document.getElementById('calculate-fee');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const area = document.getElementById('calculator-area').value;
            const complexity = document.getElementById('calculator-complexity').value;
            const resultDiv = document.getElementById('calculator-result');
            
            if (!area || !complexity) {
                showNotification('Por favor, selecione a área e a complexidade do caso.', 'warning');
                return;
            }
            
            const fee = calculateFee(area, complexity);
            
            resultDiv.innerHTML = `
                <p>Honorários estimados: <strong>R$ ${fee}</strong></p>
                <p><small>Esta é uma estimativa preliminar. Valores finais podem variar conforme análise detalhada do caso durante a consulta.</small></p>
            `;
            resultDiv.style.display = 'block';
            
            // Animação de entrada
            resultDiv.style.animation = 'slideInUp 0.5s ease-out';
        });
    }
    
    function calculateFee(area, complexity) {
        const baseFees = {
            previdenciario: 2000,
            trabalhista: 1500,
            consumidor: 1200,
            outros: 1800
        };
        
        const complexityMultipliers = {
            baixa: 1,
            media: 1.5,
            alta: 2.5
        };
        
        const baseFee = baseFees[area] || baseFees.outros;
        const multiplier = complexityMultipliers[complexity] || 1;
        
        return (baseFee * multiplier).toLocaleString('pt-BR');
    }
}

// 6. Chatbot Jurídico
function initChatbot() {
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const quickQuestions = document.querySelectorAll('.quick-question');
    
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.toggle('open');
        });
    }
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('open');
        });
    }
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Simular resposta do bot
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
    
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }
    
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }
    
    quickQuestions.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatbotInput.value = question;
            sendMessage();
        });
    });
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageP = document.createElement('p');
        messageP.textContent = text;
        
        messageDiv.appendChild(messageP);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll para a última mensagem
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('trabalhista') || message.includes('trabalho')) {
            return "Para questões trabalhistas, posso ajudar com informações sobre rescisões, horas extras, assédio moral e outros direitos. Posso conectar você com o Dr. Marcos Vinícius ou gostaria de agendar uma consulta?";
        } else if (message.includes('agendamento') || message.includes('consulta') || message.includes('marcar')) {
            return "Para agendar uma consulta, você pode preencher o formulário na página principal ou me informar seu nome e telefone que entraremos em contato. Também temos uma grade de horários disponíveis na seção de serviços.";
        } else if (message.includes('documento') || message.includes('documentação')) {
            return "Os documentos necessários variam conforme o caso. Em geral, é importante levar documentos pessoais (RG, CPF), comprovantes relacionados ao caso e eventuais notificações ou processos já existentes. Posso detalhar conforme a área do direito?";
        } else if (message.includes('honorário') || message.includes('preço') || message.includes('custo')) {
            return "Nossos honorários variam conforme a complexidade do caso. Temos uma calculadora de honorários na página de serviços que pode dar uma estimativa. A primeira consulta é gratuita para análise do caso.";
        } else if (message.includes('advogado') || message.includes('especialista') || message.includes('marcos')) {
            return "O Dr. Marcos Vinícius é especializado em diversas áreas do direito com mais de 12 anos de experiência. Posso ajudá-lo a encontrar a área mais adequada para seu caso ou agendar uma consulta?";
        } else {
            return "Entendi sua pergunta. Para uma orientação mais precisa, recomendo uma consulta com o Dr. Marcos Vinícius. Posso ajudá-lo a agendar ou tem alguma outra dúvida específica?";
        }
    }
}

// 7. Sistema de Scroll e Animações
function initScrollEffects() {
    // Indicador de progresso
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });
    
    // Botão "voltar ao topo"
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .schedule-day, .feature, .timeline-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

// 8. Contadores Animados
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Iniciar animação quando o elemento estiver visível
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// 9. Sistema de Notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon"></span>
            <p>${message}</p>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Adicionar estilos dinâmicos
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-light);
        border-left: 4px solid ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#d4af37'};
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Botão de fechar
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// 10. Funções Globais
function scrollToForm(area = '') {
    const form = document.getElementById('consultation-form');
    if (form) {
        form.scrollIntoView({ behavior: 'smooth' });
        
        if (area) {
            const areaSelect = document.getElementById('area-interesse');
            if (areaSelect) {
                areaSelect.value = area;
                // Disparar evento de change para validação
                const event = new Event('change');
                areaSelect.dispatchEvent(event);
            }
        }
    }
}

function scrollToFormWithSchedule(day, time) {
    scrollToForm();
    closeScheduleModal();
    
    // Adicionar informações do agendamento ao formulário
    setTimeout(() => {
        const messageField = document.querySelector('#area-interesse');
        if (messageField) {
            const daysMap = {
                segunda: 'Segunda-feira',
                terca: 'Terça-feira',
                quarta: 'Quarta-feira',
                quinta: 'Quinta-feira',
                sexta: 'Sexta-feira',
                sabado: 'Sábado'
            };
            
            // Selecionar a área baseada no dia (exemplo simples)
            let area = '';
            if (day === 'segunda' || day === 'quarta') area = 'previdenciario';
            else if (day === 'terca' || day === 'quinta') area = 'trabalhista';
            else area = 'consumidor';
            
            const areaSelect = document.getElementById('area-interesse');
            if (areaSelect) {
                areaSelect.value = area;
            }
            
            showNotification(`Horário preferencial selecionado: ${daysMap[day]} às ${time}. Preencha o formulário para confirmar.`, 'success');
        }
    }, 500);
}

function openExternalMap() {
    window.open('https://maps.google.com/?q=Av.+Principal,+123+-+Centro,+São+Paulo+-+SP', '_blank');
}

// 11. Performance e Otimização
function initPerformance() {
    // Lazy loading para imagens
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// 12. Acessibilidade
function initAccessibility() {
    // Navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// 13. Segurança
function initSecurity() {
    // Proteção contra cópia de conteúdo sensível
    document.addEventListener('copy', function(e) {
        const selection = window.getSelection().toString();
        if (selection.length > 200) {
            e.preventDefault();
            showNotification('A cópia de grandes trechos de conteúdo é restrita. Entre em contato conosco para mais informações.', 'warning');
        }
    });
}

// 14. Integrações
function initIntegrations() {
    // Integração com WhatsApp
    const whatsappLinks = document.querySelectorAll('a[aria-label="WhatsApp"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const phone = '551112345678';
            const message = 'Olá! Gostaria de agendar uma consulta com o Dr. Marcos Vinícius.';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        });
    });
}

// Inicializar contadores quando a página carregar
window.addEventListener('load', function() {
    initCounters();
});

// Adicionar estilos CSS para animações de notificação
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
        color: var(--text-light);
    }
    
    .notification-close:hover {
        color: var(--text-color);
    }
`;
document.head.appendChild(notificationStyles);