// Получаем canvas и контекст для рисования
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// Загружаем изображение иконки
const iconSvg = new Image();
iconSvg.src = 'https://images.squarespace-cdn.com/content/6469d9b7be025722104f83d9/684f578b-b471-45f8-ae56-0d261b667806/favikon-01.png?content-type=image%2Fpng';

// Класс для анимации изображений
class Icon {
    constructor(x, y, size, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;

        this.element = document.createElement('div');
        this.element.classList.add('icon');
        this.element.style.width = `${size}px`;
        this.element.style.height = `${size}px`;
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        this.element.style.backgroundImage = `url('${iconSvg.src}')`;
        this.element.style.backgroundSize = 'contain';
        this.element.style.backgroundRepeat = 'no-repeat';
        this.element.style.position = 'absolute';

        document.body.appendChild(this.element);
    }

    // Метод обновления позиции
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Обработка столкновения с краями окна
        if (this.x < 0 || this.x + this.size > window.innerWidth) {
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y + this.size > window.innerHeight) {
            this.speedY = -this.speedY;
        }

        // Обновляем положение иконки
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }

    // Метод для проверки столкновения с другой иконкой
    checkCollision(otherIcon) {
        const dx = this.x - otherIcon.x;
        const dy = this.y - otherIcon.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDist = (this.size + otherIcon.size) / 2;

        if (distance < minDist) {
            // Рассчитываем угол и силу отталкивания
            const angle = Math.atan2(dy, dx);
            const force = 0.05; // Сила отталкивания

            // Изменяем скорости иконок в противоположные стороны
            this.speedX += Math.cos(angle) * force;
            this.speedY += Math.sin(angle) * force;
            otherIcon.speedX -= Math.cos(angle) * force;
            otherIcon.speedY -= Math.sin(angle) * force;
        }
    }
}

// Массив для хранения иконок
const icons = [];
for (let i = 0; i < 50; i++) {
    const size = Math.random() * 80 + 40; // Увеличен минимальный размер иконки
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    const speedX = (Math.random() - 0.5) * 1.5; // Уменьшена скорость для плавности
    const speedY = (Math.random() - 0.5) * 1.5;

    const newIcon = new Icon(x, y, size, speedX, speedY);
    icons.push(newIcon);
}

// Анимация иконок
function animate() {
    icons.forEach((icon, index) => {
        icon.update();
        // Проверка столкновений с другими иконками
        for (let j = index + 1; j < icons.length; j++) {
            icon.checkCollision(icons[j]);
        }
    });
    requestAnimationFrame(animate);
}
animate();

// Адаптация к изменению размера окна
window.addEventListener('resize', resizeCanvas);
