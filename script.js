var mouseEvent = "empty";
var lastPositionX, lastPositionY;

    canvas = document.getElementById('???'); //ID do seu canvas
    ctx = canvas.getContext("2d");
    
    color = "???";
    widthLine = ???;
// 1. adicione o método que permite configurar funções a serem chamadas quando um evento especificado acontece, como quando um usuário clica em um botão.
// 2. adicione a função que acontecerá quando o evento "mousedown" é feito.
    canvas.???("mousedown", ???);

    function myMouseDown(e)
    {
        color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
        mouseEvent = "mouseDown";
    }

    canvas.???("mousemove", ???);

    function myMouseMove(e)
    {
        PositionMouseX = e.clientX - canvas.offsetLeft;
        PositionMouseY = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
        }

        lastPositionX = PositionMouseX; 
        lastPositionY = PositionMouseY;
    }

    canvas.???("mouseup", ???);
    function myMouseUp(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.???("mouseleave", ???);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }


// Função quando o botão de limpar área for clicado
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
