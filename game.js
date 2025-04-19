const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 501;
let y = 50;
const speed = 5;
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false
};

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key in keys) {
        keys[e.key] = false;
    }
});

function gameLoop() {
    // Update position based on key states
    if (keys.ArrowLeft) x -= speed;
    if (keys.ArrowRight) x += speed;
    if (keys.ArrowUp) y -= speed;
    if (keys.ArrowDown) y += speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw player square
    ctx.fillStyle = '#00f';
    ctx.fillRect(x, y, 50, 50);
    
    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();
