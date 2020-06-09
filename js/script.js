function addBola (){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var xPosition = Math.floor(Math.random() * 1000);
    var yPosition = Math.floor(Math.random() * 520);
    var color = Math.floor(Math.random() * 999999 );
    bola.setAttribute("style", "left:"+xPosition+"px;top:"+yPosition+"px;background-color:#"+color+";");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
   }


function estourar(elemento) {
    document.body.removeChild(elemento);
    var p = parseInt(document.getElementById("pontos").innerHTML);
    p = p +1;
    document.getElementById("pontos").innerHTML = p;
    
    if (p === 50) {
        alert ("Você alcançou os 50 pontos!\nParabéns!\nCaso queira recomeçar clique em OK.");
        window.location.href = window.location.href;
       }
}

function iniciar (){
    setInterval(addBola, 250);
}