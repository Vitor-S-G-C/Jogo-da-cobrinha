window.onload = function () {
    canvas = document.getElementById("canva");
    ctx = canvas.getcontext("2d");


    //vou cria uma variavel 
    var cobra = [];

    var positionx = 10;

    var positiony = 10;

    var comidax = 15;

    var comiday = 15;

    var velx = 0;

    var vely = 0;

    var grade = 20;

    var tam = 3;


    //Esse comando vai chamar a função jogo a cada 100 Milesegundos
    setInterval(jogo, 100)

}
function jogo() {
    // config de tela do jogo
    ctx.fillStyle = "#15b307";
    ctx.filleReact(0, 0, canvas.width, canvas.height)


}