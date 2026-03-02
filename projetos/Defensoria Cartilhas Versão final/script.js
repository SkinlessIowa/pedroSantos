AOS.init();

let currentPage = 1;
const itemsPerPage = 6;

document.addEventListener('DOMContentLoaded', () => {
    const isIndexPage = window.location.pathname.includes('index.html');
    const isCatalogPage = window.location.pathname.includes('catalogo.html');

    if (isIndexPage) {
        loadFeaturedCartilhas();
    } else if (isCatalogPage) {
        loadCatalogCartilhas();
        setupFilters();
        showAccessStats();
        document.getElementById('load-more').addEventListener('click', () => {
            currentPage++;
            loadCatalogCartilhas(
                document.getElementById('category-filter').value,
                document.getElementById('search-input').value,
                document.getElementById('year-filter').value,
                document.getElementById('sort-filter').value,
                document.getElementById('tag-filter').value
            );
        });
    }

    setupThemeToggle();
    setupLogin();
    setupFavorites();
    initializeFavorites();
    setupAdminNavbar();
    setupLogout();
});

function loadFeaturedCartilhas() {
    const grid = document.getElementById('featured-cartilhas');
    const featured = cartilhas.slice(0, 3);
    grid.innerHTML = featured.map(cartilha => createCartilhaCard(cartilha)).join('');
    initializeFavoriteButtons();
}

function loadCatalogCartilhas(filter = '', search = '', year = '', sort = '', tag = '') {
    const grid = document.getElementById('catalog-cartilhas');
    const loadMoreBtn = document.getElementById('load-more');
    let filteredCartilhas = cartilhas;

    if (filter) {
        filteredCartilhas = filteredCartilhas.filter(c => c.category === filter);
    }
    if (search) {
        filteredCartilhas = filteredCartilhas.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (year) {
        filteredCartilhas = filteredCartilhas.filter(c => c.date.startsWith(year));
    }
    if (tag) {
        filteredCartilhas = filteredCartilhas.filter(c => c.tags && c.tags.some(t => t.toLowerCase().includes(tag.toLowerCase())));
    }
    if (sort) {
        filteredCartilhas = filteredCartilhas.sort((a, b) => {
            if (sort === 'date-desc') return new Date(b.date) - new Date(a.date);
            if (sort === 'date-asc') return new Date(a.date) - new Date(b.date);
            return 0;
        });
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedCartilhas = filteredCartilhas.slice(0, end);

    grid.innerHTML = paginatedCartilhas.map(cartilha => createCartilhaCard(cartilha)).join('');
    initializeFavoriteButtons();

    // Controle mais preciso do botão Carregar Mais
    if (end >= filteredCartilhas.length) {
        loadMoreBtn.classList.add('hidden');
        // Adiciona margem extra quando não há mais itens para carregar
        document.querySelector('.catalog').style.marginBottom = '3rem';
    } else {
        loadMoreBtn.classList.remove('hidden');
        document.querySelector('.catalog').style.marginBottom = '0';
    }
}

function createCartilhaCard(cartilha) {
    const isFavorite = getFavorites().includes(cartilha.id);
    return `
      <div class="cartilha-card" data-aos="fade-up">
        <img src="${cartilha.image}" alt="${cartilha.title}">
        <div class="cartilha-card-content">
          <h3>${cartilha.title}</h3>
          <p>${cartilha.description}</p>
        </div>
        <div class="cartilha-card-actions">
          <button class="main-action" onclick="showCartilhaDetails(${cartilha.id})">
            <i class="fas fa-eye"></i> Ver mais
          </button>
          <button class="action-btn favorite-btn" data-id="${cartilha.id}" aria-label="${isFavorite ? 'Remover dos' : 'Adicionar aos'} favoritos">
            <i class="fas fa-heart ${isFavorite ? 'favorite' : ''}"></i>
          </button>
          <button class="action-btn download-btn" data-id="${cartilha.id}" aria-label="Baixar cartilha">
            <i class="fas fa-download"></i>
          </button>
          <button class="action-btn comment-btn" data-id="${cartilha.id}" aria-label="Comentar">
            <i class="fas fa-comment"></i>
          </button>
        </div>
      </div>
    `;
}

function showCartilhaDetails(id) {
    const cartilha = cartilhas.find(c => c.id === id);
    Swal.fire({
        title: cartilha.title,
        html: `
            <img src="${cartilha.image}" style="max-width: 100%; border-radius: 5px;">
            <p><strong>Descrição Completa:</strong> ${cartilha.fullDescription}</p>
            <p><strong>Categoria:</strong> ${cartilha.category}</p>
            <p><strong>Data de Publicação:</strong> ${cartilha.date}</p>
            <p><strong>Tags:</strong> ${cartilha.tags ? cartilha.tags.join(', ') : 'Nenhuma'}</p>
        `,
        confirmButtonText: 'Fechar'
    });
}

function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const yearFilter = document.getElementById('year-filter');
    const sortFilter = document.getElementById('sort-filter');
    const tagFilter = document.getElementById('tag-filter');

    if (!categoryFilter || !searchInput || !yearFilter || !sortFilter || !tagFilter) {
        console.error('Um ou mais elementos de filtro não foram encontrados.');
        return;
    }

    categoryFilter.addEventListener('change', () => {
        currentPage = 1;
        loadCatalogCartilhas(categoryFilter.value, searchInput.value, yearFilter.value, sortFilter.value, tagFilter.value);
    });

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        loadCatalogCartilhas(categoryFilter.value, searchInput.value, yearFilter.value, sortFilter.value, tagFilter.value);
    });

    yearFilter.addEventListener('change', () => {
        currentPage = 1;
        loadCatalogCartilhas(categoryFilter.value, searchInput.value, yearFilter.value, sortFilter.value, tagFilter.value);
    });

    sortFilter.addEventListener('change', () => {
        currentPage = 1;
        loadCatalogCartilhas(categoryFilter.value, searchInput.value, yearFilter.value, sortFilter.value, tagFilter.value);
    });

    tagFilter.addEventListener('input', () => {
        currentPage = 1;
        loadCatalogCartilhas(categoryFilter.value, searchInput.value, yearFilter.value, sortFilter.value, tagFilter.value);
    });
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggleButton.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

function setupLogin() {
    const loginLink = document.getElementById('login-link');
    loginLink.addEventListener('click', () => {
        Swal.fire({
            title: 'Login Simulado',
            html: `
                <input type="text" id="username" placeholder="Usuário" class="swal2-input">
                <input type="password" id="password" placeholder="Senha" class="swal2-input">
            `,
            confirmButtonText: 'Entrar',
            showCancelButton: true,
            preConfirm: () => {
                const username = document.getElementById('username').value;
                if (username) {
                    localStorage.setItem('username', username);
                    return true;
                } else {
                    Swal.showValidationMessage('Por favor, insira um usuário');
                }
            }
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire('Sucesso', `Bem-vindo, ${localStorage.getItem('username')}!`, 'success');
                loginLink.textContent = `Olá, ${localStorage.getItem('username')}`;
            }
        });
    });

    if (localStorage.getItem('username')) {
        loginLink.textContent = `Olá, ${localStorage.getItem('username')}`;
    }
}

function setupLogout() {
    const logoutLink = document.getElementById('logout-link');
    if (!logoutLink) return;
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('username');
        Swal.fire('Logout', 'Você saiu da sua conta.', 'success').then(() => {
            // Atualiza o texto do login-link
            const loginLink = document.getElementById('login-link');
            if (loginLink) loginLink.textContent = 'Login';
        });
    });
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function toggleFavorite(id) {
    let favorites = getFavorites();
    const btn = document.querySelector(`.favorite-btn[data-id="${id}"]`);
    if (!btn) return;

    const isFavorite = favorites.includes(id);
    const heartIcon = btn.querySelector('i');
    
    if (isFavorite) {
        favorites = favorites.filter(fav => fav !== id);
        btn.classList.remove('favorite');
        heartIcon.classList.remove('favorite');
        btn.setAttribute('aria-label', 'Adicionar aos favoritos');
    } else {
        favorites.push(id);
        btn.classList.add('favorite');
        heartIcon.classList.add('favorite');
        btn.setAttribute('aria-label', 'Remover dos favoritos');
        heartIcon.style.transform = 'scale(1.3)';
        setTimeout(() => {
            heartIcon.style.transform = 'scale(1)';
        }, 300);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function initializeFavorites() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const cartilhaId = btn.getAttribute('data-id');
        const isFavorite = getFavorites().includes(parseInt(cartilhaId));
        const heartIcon = btn.querySelector('i');
        if (heartIcon) {
            heartIcon.classList.toggle('favorite', isFavorite);
            btn.setAttribute('aria-label', isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
        }
    });
}

function initializeFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cartilhaId = btn.getAttribute('data-id');
            toggleFavorite(parseInt(cartilhaId));
        });
    });
    initializeDownloadButtons();
    initializeCommentButtons();
}

function setupFavorites() {
    const favoritesLink = document.getElementById('favorites-link');
    favoritesLink.addEventListener('click', () => {
        const favorites = getFavorites();
        const favoriteCartilhas = cartilhas.filter(c => favorites.includes(c.id));
        
        if (favoriteCartilhas.length === 0) {
            Swal.fire({
                title: 'Minha Lista de Favoritos',
                text: 'Nenhuma cartilha favoritada.',
                icon: 'info',
                confirmButtonText: 'Fechar'
            });
            return;
        }

        Swal.fire({
            title: 'Minha Lista de Favoritos',
            html: `
                <div style="max-height: 60vh; overflow-y: auto; text-align: left;">
                    ${favoriteCartilhas.map(c => `
                        <div style="margin-bottom: 1rem; padding: 1rem; border-bottom: 1px solid #eee;">
                            <h3 style="margin: 0 0 0.5rem 0; color: var(--primary);">${c.title}</h3>
                            <p style="margin: 0;">${c.description}</p>
                            <button 
                                onclick="showCartilhaDetails(${c.id}); Swal.close();"
                                style="margin-top: 0.5rem; background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer;"
                            >
                                Ver detalhes
                            </button>
                        </div>
                    `).join('')}
                </div>
            `,
            width: '800px',
            confirmButtonText: 'Fechar'
        });
    });
}

function getDownloadCounts() {
    return JSON.parse(localStorage.getItem('downloadCounts') || '{}');
}

function incrementDownloadCount(id) {
    const counts = getDownloadCounts();
    counts[id] = (counts[id] || 0) + 1;
    localStorage.setItem('downloadCounts', JSON.stringify(counts));
}

function initializeDownloadButtons() {
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cartilhaId = parseInt(btn.getAttribute('data-id'));
            const cartilha = cartilhas.find(c => c.id === cartilhaId);
            Swal.fire({
                title: `Baixar ${cartilha.title}?`,
                text: 'Você deseja baixar esta cartilha? (Simulação)',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Baixar',
                cancelButtonText: 'Cancelar'
            }).then(result => {
                if (result.isConfirmed) {
                    incrementDownloadCount(cartilhaId);
                    Swal.fire('Download Iniciado!', `A cartilha ${cartilha.title} foi baixada (simulação). Total de downloads: ${getDownloadCounts()[cartilhaId]}.`, 'success');
                }
            });
        });
    });
}

function setupAdminNavbar() {
    const adminNavbarBtn = document.querySelector('#admin-link a');
    if (!adminNavbarBtn) return;
    adminNavbarBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (localStorage.getItem('username') !== 'admin') {
            Swal.fire('Acesso Negado', 'Apenas o usuário "admin" pode acessar o modo administrador.', 'error');
            return;
        }
        Swal.fire({
            title: 'Modo Admin',
            html: `
                <button onclick="addNewCartilha()" class="btn btn-primary">Adicionar Nova Cartilha</button>
                <button onclick="removeCartilha()" class="btn btn-secondary">Remover Cartilha</button>
            `,
            showConfirmButton: false,
            showCancelButton: true,
            cancelButtonText: 'Fechar'
        });
    });
}

function addNewCartilha() {
    Swal.fire({
        title: 'Adicionar Nova Cartilha',
        html: `
            <input type="text" id="new-title" class="swal2-input" placeholder="Título">
            <input type="text" id="new-description" class="swal2-input" placeholder="Descrição">
            <input type="text" id="new-fullDescription" class="swal2-input" placeholder="Descrição Completa">
            <input type="text" id="new-category" class="swal2-input" placeholder="Categoria">
            <input type="text" id="new-date" class="swal2-input" placeholder="Data (YYYY-MM-DD)">
            <input type="text" id="new-tags" class="swal2-input" placeholder="Tags (separadas por vírgula)">
        `,
        confirmButtonText: 'Adicionar',
        showCancelButton: true,
        preConfirm: () => {
            const title = document.getElementById('new-title').value;
            const description = document.getElementById('new-description').value;
            const fullDescription = document.getElementById('new-fullDescription').value;
            const category = document.getElementById('new-category').value;
            const date = document.getElementById('new-date').value;
            const tags = document.getElementById('new-tags').value.split(',').map(t => t.trim());
            if (!title || !description || !category || !date) {
                Swal.showValidationMessage('Preencha todos os campos obrigatórios');
                return false;
            }
            return { title, description, fullDescription, category, date, tags };
        }
    }).then(result => {
        if (result.isConfirmed) {
            const newCartilha = {
                id: cartilhas.length + 1,
                title: result.value.title,
                description: result.value.description,
                fullDescription: result.value.fullDescription,
                category: result.value.category,
                date: result.value.date,
                image: "https://via.placeholder.com/150",
                tags: result.value.tags
            };
            cartilhas.push(newCartilha);
            loadCatalogCartilhas();
            Swal.fire('Sucesso', 'Cartilha adicionada com sucesso!', 'success');
        }
    });
}

function removeCartilha() {
    Swal.fire({
        title: 'Remover Cartilha',
        input: 'select',
        inputOptions: cartilhas.reduce((options, c) => {
            options[c.id] = c.title;
            return options;
        }, {}),
        inputPlaceholder: 'Selecione uma cartilha',
        showCancelButton: true,
        confirmButtonText: 'Remover',
        preConfirm: (id) => {
            if (!id) {
                Swal.showValidationMessage('Selecione uma cartilha');
                return false;
            }
            return id;
        }
    }).then(result => {
        if (result.isConfirmed) {
            const index = cartilhas.findIndex(c => c.id == result.value);
            cartilhas.splice(index, 1);
            loadCatalogCartilhas();
            Swal.fire('Sucesso', 'Cartilha removida com sucesso!', 'success');
        }
    });
}

function showAccessStats() {
    const statsContainer = document.getElementById('stats-container');
    if (!statsContainer) return;
    const downloadCounts = getDownloadCounts();
    let totalDownloads = 0;
    for (const count of Object.values(downloadCounts)) {
        totalDownloads += count;
    }

    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${totalDownloads}</span>
            <span class="stat-label">Downloads Totais</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${cartilhas.length}</span>
            <span class="stat-label">Cartilhas Disponíveis</span>
        </div>
    `;
}

function getComments() {
    return JSON.parse(localStorage.getItem('comments') || '{}');
}

function saveComment(cartilhaId, comment) {
    const comments = getComments();
    if (!comments[cartilhaId]) comments[cartilhaId] = [];
    comments[cartilhaId].push({ user: localStorage.getItem('username') || 'Anônimo', text: comment, date: new Date().toISOString() });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function initializeCommentButtons() {
    document.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cartilhaId = parseInt(btn.getAttribute('data-id'));
            const cartilha = cartilhas.find(c => c.id === cartilhaId);
            const comments = getComments()[cartilhaId] || [];
            Swal.fire({
                title: `Comentários sobre ${cartilha.title}`,
                html: `
                    <div style="max-height: 200px; overflow-y: auto; margin-bottom: 1rem;">
                        ${comments.map(c => `<p><strong>${c.user}</strong> (${new Date(c.date).toLocaleDateString()}): ${c.text}</p>`).join('')}
                    </div>
                    <input type="text" id="new-comment" class="swal2-input" placeholder="Escreva seu comentário...">
                `,
                confirmButtonText: 'Enviar Comentário',
                showCancelButton: true,
                preConfirm: () => {
                    const comment = document.getElementById('new-comment').value;
                    if (!comment) {
                        Swal.showValidationMessage('Escreva um comentário');
                        return false;
                    }
                    return comment;
                }
            }).then(result => {
                if (result.isConfirmed) {
                    saveComment(cartilhaId, result.value);
                    Swal.fire('Comentário Enviado!', 'Seu comentário foi registrado.', 'success');
                }
            });
        });
    });
}