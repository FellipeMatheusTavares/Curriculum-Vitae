function $(id) {

    return document.getElementById(id);

}


/**
 * Cria um elemento HTML.
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

    $("descricao").textContent = dados.sobre.resumo;

    $("fotoPerfil").src = dados.perfil.foto;

    $("fotoPerfil").alt = dados.perfil.nome;

}



// =========================================================
// LINKS
// =========================================================

function carregarLinks() {

    $("curriculo").href = dados.perfil.curriculo;

    $("github").href = dados.contato.github;

    $("linkedin").href = dados.contato.linkedin;

    $("email").href =
        `mailto:${dados.contato.email}`;

    $("whatsapp").href =
        dados.contato.whatsapp;

}



// =========================================================
// SOBRE
// =========================================================

function carregarSobre() {

    $("sobreResumo").textContent =
        dados.sobre.descricao;

}



// =========================================================
// EXPERIÊNCIAS
// =========================================================

function carregarExperiencias() {

    const container = $("listaExperiencias");

    container.innerHTML = "";

    dados.experiencias.forEach(exp => {

        const artigo =
            criarElemento("article", "experiencia");

        artigo.innerHTML = `

            <h4>${exp.empresa}</h4>

            <p class="cargo">

                ${exp.cargo}

            </p>

            <p class="local">

                ${exp.local}

            </p>

            <span class="periodo">

                ${exp.periodo}

            </span>

            <p>

                ${exp.descricao}

            </p>

        `;

        container.appendChild(artigo);

    });

}



// =========================================================
// FORMAÇÃO
// =========================================================

function carregarFormacao() {

    const container = $("listaFormacao");

    container.innerHTML = "";

    dados.formacao.forEach(item => {

        const artigo =
            criarElemento("article", "formacao");

        artigo.innerHTML = `

            <h4>${item.curso}</h4>

            <p>

                ${item.instituicao}

            </p>

            <p>

                ${item.nivel}

                •

                ${item.status}

            </p>

            <span>

                ${item.periodo}

            </span>

        `;

        container.appendChild(artigo);

    });

}

// =========================================================
// HABILIDADES
// =========================================================

function carregarHabilidades() {

    const container = $("listaHabilidades");

    container.innerHTML = "";

    Object.entries(dados.habilidades).forEach(([categoria, lista]) => {

        const grupo = criarElemento("article", "habilidade");

        const titulo = criarElemento("h4");

        titulo.textContent = categoria
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, letra => letra.toUpperCase());

        const itens = criarElemento("p");

        itens.textContent = lista.join(" • ");

        grupo.appendChild(titulo);
        grupo.appendChild(itens);

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

        artigo.innerHTML = `

            <h4>${projeto.nome}</h4>

            <p>${projeto.descricao}</p>

            <p class="tecnologias">

                ${projeto.tecnologias.join(" • ")}

            </p>

        `;

        if (projeto.github) {

            const link = criarElemento("a");

            link.href = projeto.github;

            link.target = "_blank";

            link.textContent = "GitHub";

            artigo.appendChild(link);

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

        artigo.innerHTML = `

            <h4>

                <a href="${certificado.arquivo}" target="_blank">

                    ${certificado.nome}

                </a>

            </h4>

            <p>${certificado.instituicao}</p>

            <p>${certificado.cargaHoraria}</p>

            <span>${certificado.ano}</span>

        `;

        container.appendChild(artigo);

    });

}


// =========================================================
// IDIOMAS
// =========================================================

function carregarIdiomas() {

    const container = $("listaIdiomas");

    container.innerHTML = "";

    dados.idiomas.forEach(idioma => {

        const artigo = criarElemento("article", "idioma");

        artigo.innerHTML = `

            <h4>${idioma.idioma}</h4>

            <p>${idioma.nivel}</p>

        `;

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

    contatos.forEach(contato => {

        const link = criarElemento("a");

        link.href = contato.link;

        link.target = "_blank";

        link.textContent = contato.nome;

        container.appendChild(link);

    });

}



// =========================================================
// RODAPÉ
// =========================================================

function carregarRodape() {

    $("ano").textContent = new Date().getFullYear();

    $("footerNome").textContent = dados.perfil.nome;

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

    carregarIdiomas();

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
