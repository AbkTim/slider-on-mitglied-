function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block"; // Показываем модальное окно
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    var modal = document.getElementById(modalId);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}