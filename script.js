const sobre =
    document.getElementById("sobre");


const inicio =
    document.getElementById("inicio");


const contenido =
    document.getElementById("contenido");


let cartaAbierta = false;


let intervaloPetalos;


/* ========================================
   ABRIR SOBRE
======================================== */

sobre.addEventListener(
    "click",
    abrirCarta
);


function abrirCarta() {

    if (cartaAbierta) {
        return;
    }


    cartaAbierta = true;


    /* Abrimos la tapa */

    sobre.classList.add(
        "abierto"
    );


    /* Desaparece la pantalla inicial */

    setTimeout(() => {

        inicio.style.opacity = "0";

    }, 900);


    /* Aparece el ramo y la carta */

    setTimeout(() => {

        inicio.style.display = "none";


        contenido.classList.add(
            "visible"
        );


        iniciarPetalos();

    }, 1500);

}



/* ========================================
   CREAR PÉTALO
======================================== */

function crearPetalo() {

    const contenedor =
        document.createElement("div");


    contenedor.classList.add(
        "petalo-caida"
    );


    const petalo =
        document.createElement("div");


    petalo.classList.add(
        "petalo-forma"
    );


    contenedor.appendChild(
        petalo
    );



    /* Posición horizontal */

    contenedor.style.left =
        Math.random() * 100 +
        "vw";



    /* Tamaño */

    const escala =
        Math.random() * 0.8 +
        0.6;


    petalo.style.transform =
        `scale(${escala})`;



    /* Duración */

    const duracion =
        Math.random() * 5 +
        6;


    contenedor.style.animationDuration =
        `${duracion}s`;



    /* Retraso pequeño aleatorio */

    contenedor.style.animationDelay =
        `${Math.random() * 1}s`;



    document.body.appendChild(
        contenedor
    );



    /* Eliminar después */

    setTimeout(() => {

        contenedor.remove();

    }, (duracion + 2) * 1000);

}



/* ========================================
   LLUVIA DE PÉTALOS
======================================== */

function iniciarPetalos() {


    /* Primera lluvia */

    for (
        let i = 0; i < 18; i++
    ) {

        setTimeout(
            crearPetalo,
            i * 180
        );

    }



    /* Después pétalos tranquilos */

    intervaloPetalos =
        setInterval(
            crearPetalo,
            650
        );

}