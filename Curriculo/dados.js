/*
ESTRUTURA DO ARQUIVO

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

    // =====================================================
    // PERFIL
    // =====================================================
    perfil: {

        // Nome completo
        nome: "Fellipe Matheus Tavares Silva",

        // Cargo atual
        cargo: "Analista de Dados",

        // Foto de perfil
        foto: "assets/img/perfil.jpg",

        // Currículo em PDF
        curriculo: "assets/curriculo.pdf"

    },

    // =====================================================
    // SOBRE
    // =====================================================
    sobre: {

        // Pequeno texto exibido no topo da página
        resumo: "Analista de Dados com formação em Ciência da Computação e experiência em análise, visualização e automação de dados.",

        // Texto completo da seção Sobre
        descricao: "Profissional com experiência em órgãos públicos, atuando na análise, visualização e automação de dados utilizando Python, SQL, Power BI e Power Platform. Busco desenvolver soluções que otimizem processos e apoiem a tomada de decisão por meio de dados."

    },

    // =====================================================
    // EXPERIÊNCIAS PROFISSIONAIS
    // =====================================================
    experiencias: [

        /*
        Modelo para adicionar uma nova experiência

        {
            empresa: "",
            cargo: "",
            local: "",
            periodo: "",
            descricao: ""
        }
        */

        {
            empresa: "Secretaria Nacional de Trânsito - SENATRAN",
            cargo: "Assistente Administrativo",
            local: "Brasília - DF",
            periodo: "2024 - Atual",
            descricao: "Descrição das atividades desenvolvidas."
        },

        {
            empresa: "Agência Nacional de Aviação Civil - ANAC",
            cargo: "Estagiário",
            local: "Brasília - DF",
            periodo: "2022 - 2024",
            descricao: "Descrição das atividades desenvolvidas."
        }

    ],

    // =====================================================
    // FORMAÇÃO ACADÊMICA
    // =====================================================
    formacao: [

        /*
        Modelo

        {
            instituicao:"",
            curso:"",
            nivel:"",
            status:"",
            periodo:""
        }
        */

        {
            instituicao: "Universidade Católica de Brasília - UCB",
            curso: "Ciência da Computação",
            nivel: "Graduação",
            status: "Concluído",
            periodo: "2020 - 2024"
        },

        {
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Ciência de Dados e Inteligência Artificial",
            nivel: "Pós-Graduação",
            status: "Em andamento",
            periodo: "2026"
        },

        {
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Engenharia da Computação",
            nivel: "Pós-Graduação",
            status: "Em andamento",
            periodo: "2026"
        }

    ],

    // =====================================================
    // HABILIDADES
    // =====================================================
    habilidades: {

        /*
        Basta adicionar ou remover itens dos arrays.
        */

        linguagens: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],

        bancoDeDados: [
            "SQL",
            "MySQL"
        ],

        ferramentas: [
            "Git",
            "GitHub",
            "VS Code",
            "Power BI",
            "Excel",
            "Pacote Office"
        ]

    },

    // =====================================================
    // PROJETOS
    // =====================================================
    projetos: [

        /*
        Modelo para adicionar um novo projeto

        {
            nome: "",
            descricao: "",
            tecnologias: [],
            github: "",
            demo: "",
            imagem: ""
        }
        */

        {
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

        // Exemplo:
        //
        // {
        //     nome: "Board Games Manager",
        //     descricao: "Aplicação para gerenciamento de jogos de tabuleiro.",
        //     tecnologias: [
        //         "HTML",
        //         "CSS",
        //         "JavaScript"
        //     ],
        //     github: "",
        //     demo: "",
        //     imagem: "assets/projetos/boardgames.png"
        // }

    ],

    // =====================================================
    // CERTIFICADOS
    // =====================================================
    certificados: [

        /*
        Modelo

        {
            nome:"",
            instituicao:"",
            cargaHoraria:"",
            ano:"",
            arquivo:"",
            imagem:""
        }
        */

        {
            nome: "teste 1",

            instituicao: "Fundação Bradesco",

            cargaHoraria: "40 horas",

            ano: "2025",

            arquivo: "assets/certificados/teste1.pdf",

            imagem: "assets/certificados/powerbi.jpg"

        }

    ],

    // =====================================================
    // IDIOMAS
    // =====================================================
    idiomas: [

        /*
        Modelo

        {
            idioma:"",
            nivel:""
        }
        */

        {
            idioma: "Português",
            nivel: "Nativo"
        },

        {
            idioma: "Inglês",
            nivel: "Intermediário"
        }

    ],

    // =====================================================
    // CONTATO
    // =====================================================
    contato: {

        email: "dev.fellipetavares@gmail.com",

        telefone: "(61) 99937-8846",

        whatsapp: "https://wa.me/5561999378846",

        github: "https://github.com/FellipeMatheusTavares",

        linkedin: "https://www.linkedin.com/in/fellipetavares17/"

    }

};

// =========================================================
// FIM DO ARQUIVO
// =========================================================

