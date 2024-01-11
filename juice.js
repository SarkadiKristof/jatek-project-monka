let body = document.querySelector('body');
let button = document.querySelector('button');
let target = document.querySelector('.target');
let cursor = document.querySelector('.cursor');

let score = 0;
let screenWidth = body.offsetWidth;
let screenHeight = body.offsetHeight;
let gameActive = false;  // Added variable to control game state

function endGame() {
    gameActive = false;
    alert('Congratulations! You are a winner!');
}

button.addEventListener('click', function () {
    if (!gameActive) {
        gameActive = true;
        score = 0;
        button.innerHTML = "Score " + score;

        window.addEventListener('mousemove', function (e) {
            cursor.style.left = e.pageX + "px";
            cursor.style.top = e.pageY + "px";
        });

        window.addEventListener('click', function (e) {
            if (gameActive && e.target.classList.contains("target")) {
                score++;
                button.innerHTML = "Score " + score;

                if (score === 50) {
                    endGame();
                }
            }
        });

        setInterval(function () {
            if (gameActive) {
                let randTop = Math.random() * (screenHeight - 150);
                let randLeft = Math.random() * (screenWidth - 150);
                target.style.left = randLeft + "px";
                target.style.top = randTop + "px";
            }
        }, 1000);
    }
});
