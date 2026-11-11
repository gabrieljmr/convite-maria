// ========================================
// CONTAGEM REGRESSIVA
// ========================================

// Data da festa:
// 10 de janeiro de 2027 às 19:00

const dataFesta = new Date(
    "January 10, 2027 19:00:00"
).getTime();


function atualizarContador() {

    const agora = new Date().getTime();

    const distancia = dataFesta - agora;


    // Caso a festa já tenha acontecido

    if (distancia <= 0) {

        document.getElementById("dias").textContent = "00";

        document.getElementById("horas").textContent = "00";

        document.getElementById("minutos").textContent = "00";

        document.getElementById("segundos").textContent = "00";

        return;
    }


    // Cálculos

    const dias = Math.floor(
        distancia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );


    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        /
        (1000 * 60)
    );


    const segundos = Math.floor(
        (distancia % (1000 * 60))
        /
        1000
    );


    // Exibir os números

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// Atualiza imediatamente

atualizarContador();


// Atualiza a cada segundo

setInterval(
    atualizarContador,
    1000
);



// ========================================
// CONFIRMAÇÃO PELO WHATSAPP
// ========================================

const formulario = document.getElementById(
    "form-confirmacao"
);


formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nome = document
            .getElementById("nome")
            .value
            .trim();


        const presenca = document
            .getElementById("presenca")
            .value;


        const acompanhantes = document
            .getElementById("acompanhantes")
            .value || 0;


        // Número do WhatsApp
        // Brasil + DDD 83

        const numeroWhatsApp =
            "5583987454247";


        let mensagem = "";


        if (presenca === "Sim") {

            mensagem =
                "Olá! 🎀%0A%0A" +

                "Meu nome é *" +
                nome +
                "* e gostaria de confirmar presença no aniversário de 1 ano da Maria Catarina! 💕%0A%0A" +

                "🎉 Presença: *Confirmada*%0A" +

                "👥 Acompanhantes: *" +
                acompanhantes +
                "*%0A%0A" +

                "Mal posso esperar para comemorar esse dia especial! 🎂🎀";

        } else {

            mensagem =
                "Olá! 💕%0A%0A" +

                "Meu nome é *" +
                nome +
                "* e infelizmente não poderei comparecer ao aniversário da Maria Catarina. 😢%0A%0A" +

                "Desejo uma festa maravilhosa e um dia muito especial para a nossa pequena! 🎀💕";

        }


        const urlWhatsApp =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensagem;


        window.open(
            urlWhatsApp,
            "_blank"
        );

    }
);



// ========================================
// GALERIA - FOTO AMPLIADA
// ========================================

const fotosGaleria =
    document.querySelectorAll(".fotos img");


const modalFoto =
    document.getElementById("modal-foto");


const fotoAmpliada =
    document.getElementById("foto-ampliada");


const fecharModal =
    document.querySelector(".fechar-modal");



fotosGaleria.forEach(
    (foto) => {

        foto.addEventListener(
            "click",
            () => {

                fotoAmpliada.src =
                    foto.src;


                fotoAmpliada.alt =
                    foto.alt;


                modalFoto.classList.add(
                    "ativo"
                );

            }
        );

    }
);



// Fechar pelo X

fecharModal.addEventListener(
    "click",
    () => {

        modalFoto.classList.remove(
            "ativo"
        );

    }
);



// Fechar clicando fora da foto

modalFoto.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target === modalFoto
        ) {

            modalFoto.classList.remove(
                "ativo"
            );

        }

    }
);



// ========================================
// FECHAR MODAL COM A TECLA ESC
// ========================================

document.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key === "Escape"
        ) {

            modalFoto.classList.remove(
                "ativo"
            );

        }

    }
);