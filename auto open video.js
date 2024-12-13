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

function openKatjaBaschenowModal() {
    var modal = document.getElementById("KatjaBaschenowModal");
    modal.style.display = "block";
    player.playVideo(); // Запуск видео
}

function closeKatjaBaschenowModal() {
    var modal = document.getElementById("KatjaBaschenowModal");
    modal.style.display = "none";
    player.stopVideo(); // Остановка видео
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    var modal = document.getElementById("KatjaBaschenowModal");
    if (event.target == modal) {
        closeKatjaBaschenowModal();
    }
}

// Загружаем библиотеку YouTube IFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);