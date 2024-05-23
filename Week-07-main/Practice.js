var h1 = document.getElementById('header1')
var container = document.getElementById("container")

h1.style.color = "red"
var btn = document.getElementById("btn")
btn.onclick = function(){
    
    const ball = document.createElement("div");
    ball.classList.add("ball")
    container.appendChild(ball)
}
btn.style.backgroundColor = "blue"
btn.style.color = "white"

