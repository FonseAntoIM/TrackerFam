const messageInput = document.getElementById('messageInput');
const imageInput = document.getElementById('imageInput');
const chatMessages = document.querySelector('.chat-messages');

// Función para enviar un mensaje
function sendMessage() {
    const message = messageInput.value;
    // Aquí se enviaría el mensaje al servidor (implementación del backend)
    // Por ahora, lo agregaremos a la interfaz
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'mine');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
}

// Función para enviar una imagen
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // Aquí se enviaría la imagen al servidor (implementación del backend)
    // Por ahora, mostraremos un mensaje indicando que la imagen se está subiendo
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'mine');
    messageElement.textContent = 'Imagen enviada';
    chatMessages.appendChild(messageElement);
    imageInput.value = '';
});