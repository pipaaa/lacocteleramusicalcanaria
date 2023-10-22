const ball = document.getElementById('ball');
const block = document.getElementById('block');
let isJumping = false;

document.addEventListener('keydown', jump);

function jump(event) {
    if (event.keyCode === 32 && !isJumping) {
        isJumping = true;
        let jumpHeight = 100;
        let ballPosition = 30;
        const jumpInterval = setInterval(() => {
            if (ballPosition >= jumpHeight) {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (ballPosition <= 30) {
                        clearInterval(fallInterval);
                        isJumping = false;
                    } else {
                        ballPosition -= 5;
                        ball.style.bottom = ballPosition + 'px';
                    }
                }, 20);
            } else {
                ballPosition += 5;
                ball.style.bottom = ballPosition + 'px';
            }
        }, 20);
    }
}
