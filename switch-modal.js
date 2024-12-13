var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('katjaVideo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Вызывается, когда iframe готов
}

// Функция для закрытия модального окна
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Функция для открытия модального окна
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Функция для переключения между модальными окнами
function switchModal(currentModalId, newModalId) {
    // Остановка видео, если текущее модальное окно содержит видео
    if (currentModalId === 'KatjaBaschenowModal') {
        player.stopVideo();
    }

    closeModal(currentModalId);  // Закрываем текущее модальное окно
    openModal(newModalId);       // Открываем новое модальное окно

    // Если новое модальное окно содержит видео, воспроизводим его
    if (newModalId === 'KatjaBaschenowModal') {
        player.playVideo();
    }
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    var modal = document.getElementById("KatjaBaschenowModal");
    if (event.target == modal) {
        closeModal("KatjaBaschenowModal");
        player.stopVideo(); // Остановка видео при закрытии
    }
}

// Загружаем библиотеку YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
