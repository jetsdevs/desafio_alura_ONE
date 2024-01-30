//Mudar Tema

document.addEventListener("DOMContentLoaded", function () {
    const mudarTemaButton = document.getElementById("tema");
    const body = document.body;

    // Função para alternar entre os temas claro e escuro
    function mudarTema() {
        body.classList.toggle("darkThema");

        // Verifica se o tema escuro está ativado
        if (body.classList.contains("darkThema")) {
            // Se o tema escuro estiver ativado, define a cor do texto das tags <a> como branco
            document.querySelectorAll('.cabecalho__menu__link, .apresentacao__buttom__link').forEach(function (link) {
                link.style.color = '#FFFFFF'; // Cor branca para o tema escuro
            });
        } else {
            // Se o tema claro estiver ativado, redefina a cor do texto das tags <a> para o valor padrão
            document.querySelectorAll('.cabecalho__menu__link, .apresentacao__buttom__link').forEach(function (link) {
                link.style.color = ''; // Cor padrão (ou defina a cor desejada para o tema claro)
            });
        }
    }

    // Evento de clique no botão para alternar o tema
    mudarTemaButton.addEventListener("click", mudarTema);
});

//Função codificar

function criptografarTexto(texto) {
    // Substituir as letras de acordo com as regras de criptografia
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoCodificar = document.getElementById("botaoCodificar");
    const areaTexto = document.getElementById("areaTexto");

    botaoCodificar.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const textoOriginal = areaTexto.value;
        const textoCriptografado = criptografarTexto(textoOriginal);
        areaTexto.value = textoCriptografado; // Substitui o valor do textarea pelo texto criptografado
    });
});

// Descriptografar

function descriptografarTexto(texto) {
    // Substituir as palavras criptografadas pela letra original
    return texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoDescodificar = document.getElementById("botaoDescodificar");
    const areaTexto = document.getElementById("areaTexto");

    botaoDescodificar.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const textoOriginal = areaTexto.value;
        const textoCriptografado = descriptografarTexto(textoOriginal);
        areaTexto.value = textoCriptografado; // Substitui o valor do textarea pelo texto descrbotaoCopiar
    });
});


// Botão copiar
const botaoCopiar = document.getElementById("botaoCopiar");
botaoCopiar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    areaTexto.select(); // Seleciona todo o texto dentro do textarea
    document.execCommand("copy"); // Copia o texto selecionado para a área de transferência
});