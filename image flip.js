// Функция для переворота резюме
function flipResume(imageId) {
    var img = document.getElementById(imageId);
    var container = img.closest('.resume-container');
    
    // Получаем ссылки из атрибутов data
    var srcDe = img.getAttribute('data-src-de');
    var srcRu = img.getAttribute('data-src-ru');

    // Проверяем, перевернут ли контейнер, и меняем изображение
    if (container.classList.contains('flipped')) {
        img.src = srcDe; // Изображение на немецком
        container.classList.remove('flipped');
    } else {
        img.src = srcRu; // Изображение на русском
        container.classList.add('flipped');
    }
}

// Функция для показа подсказки у курсора
function showTooltip(e, tooltip) {
    tooltip.style.display = 'block';
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = e.pageY + 'px';
}

// Функция для скрытия подсказки
function hideTooltip(tooltip) {
    tooltip.style.display = 'none';
}

// Добавляем события для отображения и скрытия подсказки для всех элементов с классом .resume-container
document.addEventListener('DOMContentLoaded', function() {
    var resumeContainers = document.querySelectorAll('.resume-container'); // Выбираем все элементы с классом .resume-container
    var tooltip = document.createElement('div');
    tooltip.className = 'cursor-tooltip';
    tooltip.textContent = 'Klicken Sie, um ihn in einer anderen Sprache anzuzeigen';
    document.body.appendChild(tooltip);

    // Добавляем события для каждого элемента
    resumeContainers.forEach(function(container) {
        container.addEventListener('mousemove', function(e) {
            showTooltip(e, tooltip);
        });

        container.addEventListener('mouseleave', function() {
            hideTooltip(tooltip);
        });
    });
});

