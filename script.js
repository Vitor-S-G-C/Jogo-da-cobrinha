window.onload = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");


    //vou cria uma variavel cobra = [];
    cobra = []
    positionx = 10;
    positiony = 10;
    comidax = 15;
    comiday = 15;
    velx = 0;
    vely = 0;
    grade = 20;
    tam = 3;
    pontos = 0;


    //Esse comando vai chamar a função jogo a cada 100 Milesegundos
    setInterval(jogo, 100)


    //Controles

    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            //O numero 39 se referece ao lado direito
            case 39:
                velx = 1;
                vely = 0;
                break;
            //O numero 37 se referece ao lado esquerda
            case 37:
                velx = -1;
                vely = 0;
                break;
            //O numero 38 se referece para cima
            case 38:
                vely = -1;
                velx = 0;
                break;
            //O numero 40 se referece para baixo
            case 40:
                vely = 1;
                velx = 0;
                break;


        }
    })

}
function jogo() {
    // config de tela do jogo
    ctx.fillStyle = "#2980B9";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //DESLOCAMENTO DA COBRA
    positionx += velx;
    positiony += vely;

    // Espelhamento
    if (positionx < 0) positionx = canvas.width / grade - 1;
    if (positionx >= canvas.width / grade) positionx = 0;
    if (positiony < 0) positiony = canvas.height / grade - 1;
    if (positiony >= canvas.height / grade) positiony = 0;

    //Configurar a cobra
    ctx.fillStyle = "#02bf03";
    for (let i = 0; i < cobra.length; i++) {
        ctx.fillRect(cobra[i].x * grade, cobra[i].y * grade, grade - 5, grade - 5);
        if (cobra[i].x == positionx && cobra[i].y == positiony) {
            tam = 3
            pontos = 0
            console.log("Voce perdeu")
        }
    }
    //POSSIÇÃO DA COBRA
    cobra.push({ x: positionx, y: positiony })


    //Limitando a cobra
    while (cobra.length > tam) {
        cobra.shift();

    }
    // comida
    ctx.fillStyle = "#f1c40f"
    ctx.fillRect(comidax * grade, comiday * grade, grade - 8, grade - 8
    )
    //comendo 
    if (positionx == comidax && positiony == comiday) {
        tam++;
        comidax = Math.floor(Math.random() * (canvas.width / grade));
        comiday = Math.floor(Math.random() * (canvas.height / grade));
        console.log(pontos)
    }

}







