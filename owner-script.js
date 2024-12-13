document.querySelectorAll('.slider-box-img').forEach(function(sliderBox) {
    var imgs = sliderBox.querySelectorAll('.owner-img');

    imgs.forEach(function(img, index) {
        img.addEventListener('mouseenter', function() {
            if (index > 0) {
                // Перемещаем первую картинку вправо
                imgs[0].style.right = `${55 * index}px`;
                imgs[0].style.zIndex = '1';
                img.style.right = '10px';
                img.style.zIndex = '3';
            }

            // Скрываем остальные картинки
            imgs.forEach(function(otherImg, i) {
                if (i !== index) {
                    otherImg.style.opacity = '0';
                }
            });

            img.classList.add('hovered');
        });

        img.addEventListener('mouseleave', function() {
            // Возвращаем все изображения в исходное положение
            imgs.forEach(function(img, i) {
                img.style.right = `${10 + 45 * i}px`; // Исходное расположение картинок
                img.style.zIndex = '2';
                img.style.opacity = '1'; // Показываем все картинки
                img.classList.remove('hovered');
            });
        });

        // Добавляем обработчик события click
        img.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем прокрутку страницы
            // Ваш код для обработки клика (например, открытие модального окна)
        });
    });
});
