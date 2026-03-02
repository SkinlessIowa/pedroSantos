const cartilhas = [
    { 
        id: 1, 
        title: "Carta de Serviços da Defensoria Pública do Distrito Federal", 
        description: "Apresenta os serviços prestados pela instituição.", 
        fullDescription: "O intuito é que, após a leitura, os cidadãos compreendam o funcionamento da Defensoria Pública do DF. O material facilita o dia a dia da população, na medida em que explica os serviços prestados pela DPDF. Nele, você pode conferir os endereços e as competências de todos os Núcleos de Assistência Jurídica (NAJs) da instituição.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha1.png",
        tags: ["Serviços", "Assistência Jurídica", "Defensoria"]
    },
    { 
        id: 2, 
        title: "Central de Relacionamento com os Cidadãos", 
        description: "Detalha o funcionamento da CRC da DPDF, um canal de comunicação rápido e gratuito.", 
        fullDescription: "A cartilha detalha as especificidades do funcionamento da Central de Relacionamento com os Cidadãos (CRC) da DPDF, um canal de comunicação rápido e gratuito para a população do Distrito Federal. Nela, você conhecerá mais sobre a atuação do núcleo e as formas de contato com a instituição.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha2.png",
        tags: ["CRC", "Atendimento", "Comunicação"]
    },
    { 
        id: 3, 
        title: "Núcleo do Plantão", 
        description: "Detalha a atuação do Núcleo de Assistência Jurídica do Plantão da instituição.", 
        fullDescription: "A Defensoria não para! A cartilha detalha a atuação do Núcleo de Assistência Jurídica do Plantão da instituição, que está pronto para atender a população fora do horário de expediente das outras unidades da instituição. Ou seja, a Defensoria Pública do DF recebe, nesses horários, casos considerados extremamente urgentes e que não podem esperar pela abertura dos fóruns. No material, você conhecerá mais sobre o funcionamento do núcleo, os casos em que ele atua e não atua, os principais documentos para atendimento e as formas de contato.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha3.png",
        tags: ["Urgência", "Assistência Jurídica", "Plantão"]
    },
    { 
        id: 4, 
        title: "Cartilha da Saúde", 
        description: "Orientações sobre o direito à saúde e informações para utilizar o Sistema Único de Saúde (SUS).", 
        fullDescription: "No material, você encontra orientações sobre o direito à saúde e informações que o cidadão deve ter para utilizar o Sistema Único de Saúde (SUS), além de formas de acesso ao sistema público de saúde. A cartilha também destaca a atuação da Defensoria Pública do Distrito Federal em benefício dos que buscam a garantia desse direito.", 
        category: "Saúde", 
        date: "2024-05-01", 
        image: "image/cartilha4.png",
        tags: ["Saúde", "SUS", "Direitos do Paciente"]
    },
    { 
        id: 5, 
        title: "Unidades Móveis de Atendimento Itinerante", 
        description: "Apresenta os três equipamentos móveis que levam serviços da Defensoria Pública a diversas regiões do DF.", 
        fullDescription: "Inaugurada em 2021, a primeira carreta da DPDF nasceu para descentralizar os atendimentos da instituição, levando todos os serviços básicos da Defensoria Pública às diversas regiões do DF. Além disso, oferece atendimentos específicos de acordo com o estudo prévio das demandas de cada local. As assistências são voltadas, prioritariamente, para demandas do Direito de Família atreladas às crianças e aos adolescentes do Distrito Federal. A segunda Unidade Móvel de Atendimento Itinerante da Defensoria Pública do DF foi inaugurada em março de 2024. O modelo, desenvolvido em parceria com a Secretaria Nacional de Políticas Penais (Senappen), é destinado, prioritariamente, aos atendimentos relacionados ao sistema carcerário do DF. Essa é a primeira carreta da América Latina voltada à prestação de serviços jurídicos dessa natureza. A mais nova Unidade Móvel de Atendimento Itinerante da DPDF é destinada ao atendimento exclusivo das escolas públicas do Distrito Federal. O objetivo é oferecer serviços jurídicos diretamente aos estudantes e suas famílias, fortalecendo o vínculo entre a comunidade escolar e a instituição. Além disso, a carreta facilita o acesso à Justiça e auxilia na garantia de direitos das famílias em situação de vulnerabilidade, bem como na difusão do ordenamento jurídico para a formação da cidadania e da cultura de paz.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha5.png",
        tags: ["Unidades Móveis", "Atendimento Itinerante", "Acesso"]
    },
    { 
        id: 6, 
        title: "Educação para a vida e acesso à cidadania", 
        description: "Aborda os direitos e deveres que acompanham as pessoas desde o nascimento até após a morte.", 
        fullDescription: "Ao completar 18 anos, devemos ter plena consciência dos nossos atos. A educação para a vida adulta envolve o conhecimento básico de nossas relações jurídicas. O material aborda uma jornada de conhecimento sobre todos os direitos e deveres que acompanham as pessoas, desde o nascimento até após a morte. Se você deseja saber mais sobre as relações jurídicas que regulam a nossa existência, a cartilha traz os direitos e deveres da vida humana, distribuídos em sete tempos.", 
        category: "Educação", 
        date: "2024-05-01", 
        image: "image/cartilha6.png",
        tags: ["Educação", "Cidadania", "Direitos Civis"]
    },
    { 
        id: 7, 
        title: "Subsecretaria de Mediação e Cultura de Paz", 
        description: "Apresenta a Subsecretaria que busca a participação direta e ativa das partes na resolução de conflitos.", 
        fullDescription: "Com o propósito de atender a família em suas relações básicas, a Subsecretaria de Mediação e Cultura de Paz da Defensoria Pública do DF (Semed/DPDF) busca a participação direta e ativa das partes na resolução de conflitos. Se você deseja saber mais sobre a Semed/DPDF, seu funcionamento e as demandas atendidas, acesse a cartilha.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha7.png",
        tags: ["Mediação", "Conflitos", "Cultura de Paz"]
    },
    { 
        id: 8, 
        title: "Manual prático da Subsecretaria de Mediação e Cultura de Paz", 
        description: "Apresenta os procedimentos adotados nas sessões de mediação e pré-mediação.", 
        fullDescription: "O manual apresenta os procedimentos adotados pela Subsecretaria de Mediação e Cultura de Paz da DPDF nas sessões de mediação e pré-mediação (virtual). Nele, você encontra informações sobre a Semed/DPDF e os casos atendidos pela unidade, além de materiais complementares para consulta.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha8.png",
        tags: ["Manual", "Procedimentos", "Mediação"]
    },
    { 
        id: 9, 
        title: "Dez coisas que você precisa saber antes de participar de uma sessão de conciliação ou mediação", 
        description: "Informações sobre resolução de conflitos de forma pacífica e por meio do diálogo.", 
        fullDescription: "As sessões de mediação e conciliação permitem que os envolvidos cheguem à resolução dos conflitos de forma pacífica e por meio do diálogo. Na cartilha, você terá acesso a dez questionamentos frequentes a respeito do tema. Informe-se antes de participar de uma sessão.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha9.png",
        tags: ["Conciliação", "Preparação", "Mediação"]
    },
    { 
        id: 10, 
        title: "Vamos falar de Família? Curiosidades do Direito de Família", 
        description: "Facilita o acesso a conhecimentos dos direitos inerentes às questões familiares.", 
        fullDescription: "O objetivo da cartilha é facilitar o acesso a conhecimentos dos direitos inerentes às questões familiares, além de apresentar a relação da Defensoria Pública com o Direito de Família. Assim, você pode se informar sobre o tema e procurar assistência jurídica gratuita de qualidade com base nas suas necessidades.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha10.png",
        tags: ["Família", "Direito Familiar", "Casamento"]
    },
    { 
        id: 11, 
        title: "Casos de Família", 
        description: "Exemplos de situações que podem gerar conflitos em famílias e suas possíveis soluções.", 
        fullDescription: "A cartilha traz exemplos de situações que podem gerar conflitos familiares, suas consequências jurídicas e possíveis soluções. Nela, você encontra as respostas para as perguntas mais frequentes que chegam à Defensoria Pública do Distrito Federal sobre o assunto.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha11.png",
        tags: ["Casos Práticos", "Conflitos Familiares", "Soluções"]
    },
    { 
        id: 12, 
        title: "Direitos Sexuais e Reprodutivos das Mulheres", 
        description: "Garante o acesso à informação para que as mulheres possam exercer seus direitos de forma consciente.", 
        fullDescription: "O material garante o acesso à informação por parte das mulheres, para que elas possam exercer os seus direitos sexuais e reprodutivos de forma consciente. Nele, você pode saber mais sobre o que é considerado violência sexual, o que é a violência obstétrica e as garantias das mulheres em caso de violação de direitos.", 
        category: "Saúde", 
        date: "2024-05-01", 
        image: "image/cartilha12.png",
        tags: ["Saúde da Mulher", "Direitos Reprodutivos", "Planejamento Familiar"]
    },
    { 
        id: 13, 
        title: "Será que estou grávida? E agora?", 
        description: "Orientações básicas sobre o processo de gravidez na adolescência.", 
        fullDescription: "O intuito da cartilha é fornecer orientações básicas sobre o processo de gravidez na adolescência. Nela, você pode obter informações como formas de confirmar a gestação, sintomas e o que fazer em caso de resultado positivo, entre outros.", 
        category: "Saúde", 
        date: "2024-05-01", 
        image: "image/cartilha13.png",
        tags: ["Gravidez", "Adolescentes", "Saúde Reprodutiva"]
    },
    { 
        id: 14, 
        title: "Entrega voluntária para adoção - Orientações para gestantes", 
        description: "Aborda o direito da entrega voluntária em adoção, garantido por lei às gestantes.", 
        fullDescription: "O material trata da entrega voluntária em adoção, um direito garantido por lei às gestantes. Na cartilha, você encontra respostas às perguntas mais frequentes sobre o tema.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha14.png",
        tags: ["Adoção", "Gestantes", "Direitos"]
    },
    { 
        id: 15, 
        title: "Entrega voluntária para adoção - Orientações para profissionais", 
        description: "Orientações para profissionais que lidam com situações de gravidez indesejada.", 
        fullDescription: "A cartilha traz orientações voltadas para os profissionais que lidam com situações de gravidez indesejada no dia a dia, sejam eles da área da saúde ou de outras especialidades. Lá, você também encontra a diferença entre os conceitos de gestação e maternidade.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha15.png",
        tags: ["Profissionais", "Adoção", "Orientação"]
    },
    { 
        id: 16, 
        title: "Paternidade Responsável", 
        description: "Informações sobre o exercício da paternidade responsável e exames de DNA gratuitos.", 
        fullDescription: "A cartilha apresenta informações sobre o exercício da paternidade responsável e amplia o entendimento sobre os impactos negativos que a falta de registro paterno pode trazer para os indivíduos. Além disso, no material, você pode se informar sobre o projeto Paternidade Responsável da Defensoria Pública do DF. Ele possibilita a realização de exames de DNA sem custo à população interessada, com o objetivo de reduzir a quantidade de pessoas sem o nome do pai no registro de nascimento.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha16.png",
        tags: ["Paternidade", "DNA", "Responsabilidade"]
    },
    { 
        id: 17, 
        title: "Os Direitos da Criança e do Adolescente", 
        description: "Destaca os direitos das crianças e adolescentes e a atuação da Defensoria Pública.", 
        fullDescription: "O objetivo do material é destacar os direitos das crianças e dos adolescentes, a atuação da Defensoria Pública no aspecto de proteção e assistência desse público, as garantias e os princípios assegurados a eles por lei e a forma de tratamento dos adolescentes em conflito com a lei. Além disso, você encontra informações sobre convivência familiar, tutela e adoção.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha17.png",
        tags: ["Crianças", "Adolescentes", "ECA"]
    },
    { 
        id: 18, 
        title: "Apoio à Defesa da Mulher", 
        description: "Aborda temas importantes sobre a defesa da mulher e os dispositivos da Lei Maria da Penha.", 
        fullDescription: "A cartilha aborda temas importantes sobre a defesa da mulher e os dispositivos da Lei Maria da Penha. Lá, você encontra informações sobre a prevenção da violência doméstica e familiar contra a mulher, os principais recursos de proteção e acolhimento disponíveis, entre outros.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha18.png",
        tags: ["Mulheres", "Violência Doméstica", "Lei Maria da Penha"]
    },
    { 
        id: 19, 
        title: "Enfrentamento à cultura do estupro", 
        description: "Explica estratégias de enfrentamento à cultura do estupro e como identificar situações de violência sexual.", 
        fullDescription: "A cartilha explica a importância da atuação de vários profissionais na busca por estratégias de enfrentamento à cultura do estupro. Nela, você encontra informações sobre como identificar situações de violência sexual, orientar as vítimas e encaminhá-las aos serviços especializados de apoio.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha19.png",
        tags: ["Violência Sexual", "Prevenção", "Direitos"]
    },
    { 
        id: 20, 
        title: "Violência Doméstica e Familiar contra a Mulher: Mitos e verdades", 
        description: "Diferencia o que é mito e o que é verdade no âmbito da aplicação da Lei Maria da Penha.", 
        fullDescription: "No material, você pode aprender sobre as principais dúvidas sobre a Lei Maria da Penha, em um formato que diferencia o que é mito e o que é verdade no âmbito da aplicação da norma. As premissas foram extraídas da vivência defensorial.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha20.png",
        tags: ["Violência Doméstica", "Mitos", "Lei Maria da Penha"]
    },
    { 
        id: 21, 
        title: "Saúde mental: A liberdade é o melhor cuidado!", 
        description: "Reforça que pessoas com transtornos mentais possuem direitos humanos fundamentais.", 
        fullDescription: "O objetivo da cartilha é alcançar a população, os familiares e os servidores públicos que atuam no campo da saúde mental, reforçando que as pessoas com transtornos mentais e as que fazem uso abusivo de substâncias psicoativas possuem direitos humanos fundamentais.", 
        category: "Saúde", 
        date: "2024-05-01", 
        image: "image/cartilha21.png",
        tags: ["Saúde Mental", "Direitos", "Transtornos Mentais"]
    },
    { 
        id: 22, 
        title: "Retificação de nome e gênero de pessoas trans", 
        description: "Ajuda pessoas trans com informações sobre retificação de nome e gênero.", 
        fullDescription: "O material busca ajudar as pessoas trans com informações sobre a retificação de nome e gênero, sem a necessidade de passar por cirurgias de redesignação sexual ou de laudos médicos. Você também encontra um passo a passo de como proceder à alteração do registro civil e uma lista com os documentos necessários.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha22.png",
        tags: ["Transgênero", "Identidade de Gênero", "Retificação"]
    },
    { 
        id: 23, 
        title: "Pessoa com Deficiência", 
        description: "Instrumento de educação e defesa para as pessoas com deficiência.", 
        fullDescription: "Instrumento de educação e de defesa para as pessoas com deficiência, a cartilha apresenta informações relacionadas ao conceito de deficiência e aos direitos fundamentais desse público, além de formas de buscar ajuda, entre outros.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha23.png",
        tags: ["Deficiência", "Acessibilidade", "Inclusão"]
    },
    { 
        id: 24, 
        title: "Cartilha da Pessoa Idosa", 
        description: "Detalha os direitos fundamentais que garantem a plena inclusão da pessoa idosa na sociedade.", 
        fullDescription: "O material detalha os direitos fundamentais que garantem a plena inclusão, a integração e a participação da pessoa idosa na sociedade. Nela, você também encontra informações sobre as medidas de proteção, a política de atendimento, os crimes previstos no Estatuto da Pessoa Idosa, entre outros.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha24.png",
        tags: ["Idosos", "Estatuto do Idoso", "Direitos"]
    },
    { 
        id: 25, 
        title: "Central Judicial do Idoso", 
        description: "Apresenta a Central que oferece atendimento interdisciplinar a pessoas com 60 anos ou mais.", 
        fullDescription: "A Central Judicial do Idoso (CJI) é uma parceria entre a Defensoria Pública do Distrito Federal (DPDF), o Ministério Público do Distrito Federal e Territórios (MPDFT) e o Tribunal de Justiça do Distrito Federal e dos Territórios (TJDFT) que oferece atendimento interdisciplinar a pessoas com idade igual ou superior a 60 anos. Na cartilha, você conhecerá mais sobre a atuação da CJI e os direitos garantidos à população idosa.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha25.png",
        tags: ["Idosos", "Atendimento", "Central Judicial"]
    },
    { 
        id: 26, 
        title: "Meu Condomínio Legal", 
        description: "Informa beneficiários de programas habitacionais sobre como viver em condomínio.", 
        fullDescription: "O objetivo do material é informar os beneficiários dos programas habitacionais do Distrito Federal sobre como viver em condomínio. Nele, você encontra orientações a respeito dos direitos e dos deveres do condômino e do síndico, entre outros.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha26.png",
        tags: ["Condomínio", "Habitação", "Convivência"]
    },
    { 
        id: 27, 
        title: "Como evitar e se livrar do superendividamento", 
        description: "Informações básicas sobre educação financeira para evitar o superendividamento.", 
        fullDescription: "A cartilha traz informações básicas sobre a educação financeira, com o objetivo de evitar o superendividamento. Além disso, você encontra conteúdos como os motivos que levam a essa situação e o que fazer quando ela ocorre.", 
        category: "Educação", 
        date: "2024-05-01", 
        image: "image/cartilha27.png",
        tags: ["Finanças", "Endividamento", "Educação Financeira"]
    },
    { 
        id: 28, 
        title: "Golpes nas Relações de Consumo", 
        description: "Aborda informações para prevenção de golpes digitais, bancários e envolvendo planos de saúde.", 
        fullDescription: "Dividida em três capítulos, a cartilha aborda, de forma simples e direta, informações para a prevenção de golpes digitais, bancários e envolvendo planos de saúde. Se você deseja saber mais sobre as armadilhas mais comuns nas relações de consumo, acesse a cartilha.", 
        category: "Educação", 
        date: "2024-05-01", 
        image: "image/cartilha28.png",
        tags: ["Golpes", "Consumidor", "Prevenção"]
    },
    { 
        id: 29, 
        title: "Dicionário antirracista: Termos para eliminar do seu vocabulário", 
        description: "Promove consciência crítica em relação aos termos racistas utilizados no dia a dia.", 
        fullDescription: "O propósito do dicionário é promover uma consciência crítica em relação aos termos racistas utilizados no dia a dia. Nele, você receberá orientações sobre como evitá-los e substituí-los por expressões não preconceituosas.", 
        category: "Educação", 
        date: "2024-05-01", 
        image: "image/cartilha29.png",
        tags: ["Racismo", "Linguagem", "Inclusão"]
    },
    { 
        id: 30, 
        title: "Direito de liberdade de ir e vir", 
        description: "Explica o direito de liberdade fundamental para a garantia de outros direitos constitucionais.", 
        fullDescription: "O direito de liberdade é fundamental para a garantia de outros previstos na Constituição Federal. Na cartilha, você aprenderá mais sobre o que significa ser livre, os vários tipos de liberdade e os tipos de prisão, entre outros tópicos.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha30.png",
        tags: ["Liberdade", "Direitos Constitucionais", "Locomoção"]
    },
    { 
        id: 31, 
        title: "Caminhos para a liberdade - Execução Penal", 
        description: "Orientações sobre direitos e deveres de pessoas em cumprimento de pena e seus familiares.", 
        fullDescription: "A cartilha traz orientações sobre os direitos e os deveres de pessoas em cumprimento de pena e seus familiares. Além disso, você encontra informações sobre os institutos da execução penal e sua aplicação no Distrito Federal.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha31.png",
        tags: ["Execução Penal", "Direitos", "Prisão"]
    },
    { 
        id: 32, 
        title: "Prevenção e enfrentamento ao tráfico de pessoas", 
        description: "Informações para prevenir e combater o crime de tráfico de pessoas.", 
        fullDescription: "O tráfico de pessoas atinge milhares de pessoas a cada ano. Por isso, é importante saber as formas de prevenir e combater o crime, assim como meios de promover o acolhimento e a proteção das vítimas. Na cartilha, você tem acesso a todas essas informações.", 
        category: "Direitos Humanos", 
        date: "2024-05-01", 
        image: "image/cartilha32.png",
        tags: ["Tráfico de Pessoas", "Prevenção", "Denúncia"]
    }
];