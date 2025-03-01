const names = document.querySelectorAll('.name');
const cloud = document.getElementById('cloud');
const cloudPhoto = document.getElementById('cloud-photo');
const cloudMessage = document.getElementById('cloud-message');

names.forEach(name => {
    name.addEventListener('click', () => {
        const photo = name.getAttribute('data-photo');
        const message = name.getAttribute('data-message');

        cloudPhoto.src = photo;
        cloudMessage.innerHTML = message; // Используем innerHTML для поддержки тегов <span>

        cloud.style.display = 'block';
    });
});

// Закрываем облако при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === cloud) {
        cloud.style.display = 'none';
    }
});