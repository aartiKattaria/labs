// Fill the left box with balls when the page loads
window.onload = function() {
    var box1 = document.getElementById('box1');
    for (var i = 0; i < 10; i++) { // Change this number to the number of balls you want
        var ball = document.createElement('div');
        ball.className = 'ball';
        box1.appendChild(ball);
    }
};

document.getElementById('leftToRightButton').addEventListener('click', function() {
    console.log('Left to Right button clicked'); // Add console.log statement
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    if (box1.children.length > 0) {
        var ball = box1.removeChild(box1.lastChild);
        box2.appendChild(ball);
    }
});

document.getElementById('rightToLeftButton').addEventListener('click', function() {
    console.log('Right to Left button clicked'); // Add console.log statement
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    if (box2.children.length > 0) {
        var ball = box2.removeChild(box2.lastChild);
        box1.appendChild(ball);
    }
});