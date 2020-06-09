// Adding Ball
function addBall (){
    var ball = document.createElement("div");
    ball.setAttribute("class", "ball");
    var xPosition = Math.floor(Math.random() * 1000);
    var yPosition = Math.floor(Math.random() * 520);
    var color = Math.floor(Math.random() * 999999 );
    ball.setAttribute("style", "left:"+xPosition+"px;top:"+yPosition+"px;background-color:#"+color+";");
    ball.setAttribute("onclick", "explode(this)");
    document.body.appendChild(ball);
   }

// Clicking on Ball
function explode(element) {
    document.body.removeChild(element);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
    
    if (p === 50) {
        alert ("Você alcançou os 50 pontos!\nParabéns!\nCaso queira recomeçar clique em OK.");
        window.location.href = window.location.href;
       }
}

// Initializing Game
function startGame (){
    setInterval(addBall, 250);
}