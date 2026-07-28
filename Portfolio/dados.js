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

    perfil: {

        nome: "Fellipe Matheus Tavares Silva",
        cargo: "Analista de Dados",
        foto: "assets/img/perfil.jpg",
        curriculo: "assets/curriculo.pdf"

    },

    sobre: {

        descricao: "Data Analyst com formação em Ciência da Computação e experiência em análise, visualização e automação de dados. Atuação em órgãos públicos com foco em otimização de fluxos, Python, SQL e Power Platform, atuando em análise, visualização e automação de dados.",

    },
//--------------------------------------------------------------------
    experiencias: [

        {
            empresa: "Secretaria Nacional de Trânsito - SENATRAN",
            cargo: "Assistente Administrativo",
            periodo: "2024 - Atual",
            descricao: "Descrição das atividades desenvolvidas."
        },

        {
            empresa: "Agência Nacional de Aviação Civil - ANAC",
            cargo: "Estagiário",
            periodo: "2022 - 2024",
            descricao: "Descrição das atividades desenvolvidas."
        }

    ],
//--------------------------------------------------------------------
    formacao: [
        {
            instituicao: "Universidade Católica de Brasília - UCB",
            curso: "Ciência da Computação",
            nivel: "Graduação",
            periodo: "2020 - 2024"
        },
        {
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Ciência de Dados e Inteligência Artificial",
            nivel: "Pós-Graduação",
            periodo: "2026"
        },{
            instituicao: "Centro Universitário Internacional - UNINTER",
            curso: "Engenharia da Computação",
            nivel: "Pós-Graduação",
            periodo: "2026",
            status:"Em andamento"
        }
            

    ],
//--------------------------------------------------------------------
    habilidades: [

    ],
//--------------------------------------------------------------------
    projetos: [

    //---------Ver se coloco o projeto do jogos e do formulario SENATRAN-----------------
    //----------------------formulario SENATRAN-----------------------------
    {
    nome:"Formulário SENATRAN",

    descricao:"Sistema para geração de formulários.",

    tecnologias:[
        "HTML",
        "CSS",
        "JavaScript"
    ],

    github:"",

    demo:""
}
    ],
//--------------------------------------------------------------------
    certificados: [
        {
    nome:"Power BI",

    instituicao:"Fundação Bradesco",

    cargaHoraria:"40 horas",

    ano:"2025",

    arquivo:"assets/certificados/powerbi.pdf"
    }

    ],


    idiomas: [

    ],

    contato: {

        email: "dev.fellipetavares@gmail.com",
        telefone: "(61) 99937-8846",
        github: "https://github.com/FellipeMatheusTavares",
        linkedin: "https://www.linkedin.com/in/fellipetavares17/"

    }

};