const buttons = document.querySelectorAll('.btn');

function makeActive(ball, btn, isActive) {
    if (isActive) {
        ball.style.marginLeft = '0';
        btn.classList.remove('active')
    } else {
        btn.classList.add('active');
        ball.style.marginLeft = '50%';
    }
}

function changeStatus(e) {
    const ball = this.querySelector('.ball');
    const active = this.classList.contains('active');

    active ? makeActive(ball, this, true) : makeActive(ball, this, false);

    buttons.forEach(btn => {
        const rand = Math.floor(Math.random() * 2);
        const newBall = btn.querySelector('.ball');

        if (btn != this)
            rand == 0 ? makeActive(newBall, btn, true) : makeActive(newBall, btn, false)
    });

}

buttons.forEach(btn => btn.addEventListener('click', changeStatus));
