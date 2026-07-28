function $(id) {
    return document.getElementById(id);
}

/**
 * Cria um elemento HTML.
 * @param {string} tag
 * @param {string} classe
 * @returns {HTMLElement}
 */
function criarElemento(tag, classe = "") {

    const elemento = document.createElement(tag);

    if (classe) {
        elemento.className = classe;
    }

    return elemento;
}



// =========================================================
// PERFIL
// =========================================================

function carregarPerfil() {

    $("nome").textContent = dados.perfil.nome;

    $("cargo").textContent = dados.perfil.cargo;

    $("descricao").textContent = dados.perfil.descricao;

    $("fotoPerfil").src = dados.perfil.foto;

    $("fotoPerfil").alt = dados.perfil.nome;

}



// =========================================================
// LINKS DO TOPO
// =========================================================

function carregarLinks() {

    $("email").href = `mailto:${dados.contato.email}`;

    $("github").href = dados.contato.github;

    $("linkedin").href = dados.contato.linkedin;

    $("whatsapp").href = dados.contato.whatsapp;

    $("curriculo").href = dados.perfil.curriculo;

}



// =========================================================
// SOBRE
// =========================================================

function carregarSobre() {

    $("sobreResumo").textContent = dados.sobre.resumo;

}



// =========================================================
// EXPERIÊNCIAS
// =========================================================

function carregarExperiencias() {

    const container = $("listaExperiencias");

    container.innerHTML = "";

    dados.experiencias.forEach(experiencia => {

        const card = criarElemento("article", "experiencia");

        const topo = criarElemento("div", "experiencia-topo");

        const esquerda = criarElemento("div");

        const empresa = criarElemento("h4");

        empresa.textContent = experiencia.empresa;

        const cargo = criarElemento("p", "cargo");

        cargo.textContent = experiencia.cargo;

        esquerda.appendChild(empresa);

        esquerda.appendChild(cargo);

        const periodo = criarElemento("span", "periodo");

        periodo.textContent = experiencia.periodo;

        topo.appendChild(esquerda);

        topo.appendChild(periodo);

        const descricao = criarElemento("p");

        descricao.textContent = experiencia.descricao;

        card.appendChild(topo);

        card.appendChild(descricao);

        container.appendChild(card);

    });

}



// =========================================================
// FORMAÇÃO
// =========================================================

function carregarFormacao() {

    const container = $("listaFormacao");

    container.innerHTML = "";

    dados.formacao.forEach(item => {

        const bloco = criarElemento("article", "formacao");

        const curso = criarElemento("h4");

        curso.textContent = item.curso;

        const instituicao = criarElemento("p", "instituicao");

        instituicao.textContent = item.instituicao;

        const info = criarElemento("p", "periodo");

        info.textContent =
            `${item.nivel} • ${item.periodo}`;

        bloco.appendChild(curso);

        bloco.appendChild(instituicao);

        bloco.appendChild(info);

        container.appendChild(bloco);

    });

}

// =========================================================
// HABILIDADES
// =========================================================

function carregarHabilidades() {

    const container = $("listaHabilidades");

    container.innerHTML = "";

    // Percorre cada categoria (linguagens, ferramentas...)
    Object.entries(dados.habilidades).forEach(([categoria, lista]) => {

        const grupo = criarElemento("div", "grupo-habilidades");

        const titulo = criarElemento("h4");

        // Formata o nome da categoria
        titulo.textContent =
            categoria
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, letra => letra.toUpperCase());

        const habilidades = criarElemento("p");

        habilidades.textContent = lista.join(" • ");

        grupo.appendChild(titulo);
        grupo.appendChild(habilidades);

        container.appendChild(grupo);

    });

}



// =========================================================
// PROJETOS
// =========================================================

function carregarProjetos() {

    const container = $("listaProjetos");

    container.innerHTML = "";

    dados.projetos.forEach(projeto => {

        const artigo = criarElemento("article", "projeto");

        const titulo = criarElemento("h4");

        titulo.textContent = projeto.nome;

        const descricao = criarElemento("p");

        descricao.textContent = projeto.descricao;

        const tecnologias = criarElemento("p");

        tecnologias.className = "tecnologias";

        tecnologias.textContent =
            projeto.tecnologias.join(" • ");

        artigo.appendChild(titulo);

        artigo.appendChild(descricao);

        artigo.appendChild(tecnologias);

        if (projeto.github) {

            const github = criarElemento("a");

            github.href = projeto.github;

            github.target = "_blank";

            github.textContent = "GitHub";

            artigo.appendChild(github);

        }

        container.appendChild(artigo);

    });

}



// =========================================================
// CERTIFICADOS
// =========================================================

function carregarCertificados() {

    const container = $("listaCertificados");

    container.innerHTML = "";

    dados.certificados.forEach(certificado => {

        const artigo = criarElemento("article", "certificado");

        const titulo = criarElemento("h4");

        titulo.textContent = certificado.nome;

        const instituicao = criarElemento("p");

        instituicao.textContent = certificado.instituicao;

        const carga = criarElemento("p");

        carga.textContent = certificado.cargaHoraria;

        const ano = criarElemento("p");

        ano.textContent = certificado.ano;

        const link = criarElemento("a");

        link.href = certificado.arquivo;

        link.target = "_blank";

        link.textContent = "Visualizar certificado";

        artigo.appendChild(titulo);

        artigo.appendChild(instituicao);

        artigo.appendChild(carga);

        artigo.appendChild(ano);

        artigo.appendChild(link);

        container.appendChild(artigo);

    });

}



// =========================================================
// CONTATO
// =========================================================

function carregarContato() {

    const container = $("listaContato");

    container.innerHTML = "";

    const contatos = [

        {
            nome: "E-mail",
            link: `mailto:${dados.contato.email}`
        },

        {
            nome: "GitHub",
            link: dados.contato.github
        },

        {
            nome: "LinkedIn",
            link: dados.contato.linkedin
        },

        {
            nome: "WhatsApp",
            link: dados.contato.whatsapp
        }

    ];

    contatos.forEach(item => {

        const link = criarElemento("a");

        link.href = item.link;

        link.target = "_blank";

        link.textContent = item.nome;

        container.appendChild(link);

    });

}



// =========================================================
// FOOTER
// =========================================================

function carregarRodape() {

    $("ano").textContent = new Date().getFullYear();

}



// =========================================================
// INICIAR PORTFÓLIO
// =========================================================

function iniciarPortfolio() {

    carregarPerfil();

    carregarLinks();

    carregarSobre();

    carregarExperiencias();

    carregarFormacao();

    carregarHabilidades();

    carregarProjetos();

    carregarCertificados();

    carregarContato();

    carregarRodape();

}



// =========================================================
// EXECUTAR
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    iniciarPortfolio
);