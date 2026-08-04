/*
1. Perfil
2. Sobre
3. Experiências
4. Formação
5. Habilidades
6. Projetos
7. Certificados
8. Idiomas
9. Contato
*/

const dados = {

    perfil: {

        nome: "Fellipe Matheus Tavares Silva",
        cargo: "Analista de Dados",
        foto: "assets/img/perfil.jpg",
        curriculo: "assets/curriculo/Fellipe Matheus Tavares Silva.pdf"

    },

    sobre: {

        resumo: "Analista de Dados com formação em Ciência da Computação e experiência em análise, visualização e automação de dados.",
        descricao: "Analista de Dados com formação em Ciência da Computação e experiência na extração,tratamento, análise e automação de dados em órgãos públicos. Atuação na otimização de processos, desenvolvimento de soluções com SQL, Python e Power Platform, integração de sistemas e suporte à tomada de decisão por meio da análise de dados. Experiência em ETL, análise exploratória e melhoria contínua de processos."

    },

    experiencias: [
        {
            empresa: "Secretaria Nacional de Trânsito - SENATRAN",
            cargo: "Assistente Administrativo",
            local: "Brasília - DF",
            periodo: "2024 - Atual",
            descricao: "Atuo na extração, análise e validação de dados por meio do sistema HOD (SERPRO), garantindo a confiabilidade das informações utilizadas nos processos internos. Desenvolvo soluções de automação utilizando Power Automate, Power Apps e SharePoint, reduzindo atividades manuais e aumentando a eficiência operacional. Também elaboro fluxos de trabalho e formulários integrados para apoiar a execução dos processos administrativos, realizo análises de dados que subsidiam a tomada de decisão e atuo nos processos de pré-cadastro, alteração e complementação de dados de veículos na Base Nacional, contribuindo para a qualidade e integridade das informações cadastrais. Além disso, desenvolvo indicadores e visualizações em Power BI para o monitoramento de atividades e acompanhamento de resultados."
        },

        {
            empresa: "Agência Nacional de Aviação Civil - ANAC",
            cargo: "Estagiário",
            local: "Brasília - DF",
            periodo: "2022 - 2023",
            descricao: "Atuei no desenvolvimento e manutenção de aplicações em Oracle APEX, com destaque para o sistema RiscoPro, utilizado na gestão de riscos institucionais da ANAC. Fui responsável pela consulta, extração e manipulação de dados utilizando SQL e MySQL, além da elaboração de análises e relatórios para acompanhamento de indicadores institucionais. Também desenvolvi automações de planilhas e processos com Excel, apoiei a coordenação por meio da organização e análise de dados e participei da construção de indicadores e dashboards em Power BI para subsidiar análises gerenciais e a tomada de decisão."
        }

    ],

    // FORMAÇÃO
    formacao: [
        {
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Engenharia da Computação",
            nivel: "Pós-Graduação",
            status: "Em andamento",
            periodo: "2026"
        },

        {
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Ciência de Dados e Inteligência Artificial",
            nivel: "Pós-Graduação",
            status: "Concluído",
            periodo: "2026"
        },

        {
            instituicao: "Universidade Católica de Brasília - UCB",
            curso: "Ciência da Computação",
            nivel: "Graduação",
            status: "Concluído",
            periodo: "2020 - 2024"
        }
    ],

    // HABILIDADES
    habilidades: {

        linguagens: [
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "R",
            "C"
        ],

        bancoDeDados: [
            "SQL",
            "MySQL",
            "NoSQL",
            "MongoDB"
        ],

        dadosEIA: [
            "Pandas",
            "NumPy",
            "Machine Learning"
         ],

        ferramentas: [
            "Git",
            "GitHub",
            "VS Code",
            "PyCharm",
            "Power BI",
            "Tableau",
            "Excel",
            "Pacote Office"
        ]

    },

    // PROJETOS
    projetos: [
        /*
        nome: "Nome do Projeto",
        descricao: "Descrição do projeto.",
        tecnologias: [
        ],
        github: "Link do repositório no GitHub.",
        demo: "Link para demonstração do projeto.",
        imagem: "Caminho da imagem do projeto."
        */ 
        { 
            // Duimp para DI
            nome: "Conversor de Duimp para DI",
            descricao: "Aplicação web desenvolvida em HTML, CSS e JavaScript para converter o número da DUIMP (Declaração Única de Importação) em DI (Declaração de Importação), conforme a regra de conversão utilizada para cadastros de veículos no sistema RENAVAM.",
            tecnologias: [
                    "HTML",
                    "CSS",
                    "JavaScript"
            ],
            github: "https://github.com/FellipeMatheusTavares/Conversor-de-DUIMP",
            demo: "Link para demonstração do projeto.",
            imagem: "Caminho da imagem do projeto."
        },

        {
            // formulário SENATRAN
            nome: "Formulário SENATRAN",
            descricao: "Sistema web desenvolvido para preenchimento de formulários e geração de documentos para a Secretaria Nacional de Trânsito.",
            tecnologias: [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            github: "",
            demo: "",
            imagem: "assets/projetos/senatran.png"
        }
    ],

    // CERTIFICADOS
    certificados: [
        {
            nome: "Formação Ciêntista de Dados",
            instituicao: "Udemy",
            cargaHoraria: "52 horas",
            ano: "2025",
            arquivo: "assets/certificados/UC-90ac2bac-659d-432d-936a-db62d0d1f5fa.pdf",


        },
            {
            nome: "Oracle APEX, Padrões e Componentes da ANAC para a Plataforma",
            instituicao: "ANAC",
            cargaHoraria: "40 horas",
            ano: "2022",
            arquivo: "assets/certificados/Oracle Apex Anac.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
           {
            nome: "Introdução à Análise de Dados - Microsoft Power BI",
            instituicao: "Fundação Bradesco",
            cargaHoraria: "5 horas",
            ano: "2023",
            arquivo: "assets/certificados/Fundação Bradesco introdução a analise de dados - basico.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
            {
            nome: "Microsoft Excel 2016",
            instituicao: "Fundação Bradesco",
            cargaHoraria: "15 horas",
            ano: "2023",
            arquivo: "assets/certificados/Escola Virtual - Fundação Bradesco.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
            {
            nome: "Google Analytics para iniciantes",
            instituicao: "Google",
            ano: "2026",
            arquivo: "assets/certificados/Course_Certificate.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },  
            {
            nome: "C e C++ - Iniciante Ao Avançado",
            instituicao: "Udemy",
            cargaHoraria: "20 horas",
            ano: "2023",
            arquivo: "assets/certificados/UC-d15fd802-734b-4940-94d7-1913ea4cbd75.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
          {
            nome: "Conferência Latino-Americana de LibreOffice Brasil 2022",
            instituicao: "Universidade Católica de Brasília",
            cargaHoraria: "2 horas",
            ano: "2022",
            arquivo: "assets/certificados/certificado-participacao-r3w1y.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
            {
            nome: "Aula Magna - Cursos de TI, Negócios, Comunicação e Engenharias",
            instituicao: "Universidade Católica de Brasília",
            cargaHoraria: "4 horas",
            ano: "2022",
            arquivo: "assets/certificados/certificado-participacao-eYqA2.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },
          {
            nome: "da Palestra intitulada: Desmistificando o uso do ChatGPT: diferentes perspectivas e abordagens, oferecida pelo Núcleo de Inovação e Tecnologia Educacional – NITE,",
            instituicao: "Universidade Católica de Brasília",
            cargaHoraria: "3 horas",
            ano: "2023",
            arquivo: "assets/certificados/Desmistificando o uso do Chat.pdf",
            imagem: "assets/certificados/powerbi.jpg"

        },

    ],

    // IDIOMAS
    idiomas: [

        {
            idioma: "Português",
            nivel: "Nativo"
        },

        {
            idioma: "Inglês",
            nivel: "Intermediário"
        }

    ],

    // CONTATO
    contato: {

        email: "dev.fellipetavares@gmail.com",
        telefone: "(61) 99937-8846",
        whatsapp: "https://wa.me/5561999378846",
        github: "https://github.com/FellipeMatheusTavares",
        linkedin: "https://www.linkedin.com/in/fellipetavares17/"

    }

};
