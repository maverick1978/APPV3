document.addEventListener('DOMContentLoaded', function() {
    function makeDraggable(popupId) {
        const popup = document.getElementById(popupId);
        let isDragging = false;
        let offsetX, offsetY;

        popup.onmousedown = function(e) {
            if (e.target.classList.contains('close') || e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') {
                // Prevent dragging if the close button or any input/textarea element is clicked
                return;
            }
            isDragging = true;
            offsetX = e.clientX - popup.getBoundingClientRect().left;
            offsetY = e.clientY - popup.getBoundingClientRect().top;
            document.onmousemove = onMouseMove;
            document.onmouseup = onMouseUp;
        };

        function onMouseMove(e) {
            if (!isDragging) return;
            popup.style.left = (e.clientX - offsetX) + 'px';
            popup.style.top = (e.clientY - offsetY) + 'px';
        }

        function onMouseUp() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    // Initialize the draggable functionality for the popups
    makeDraggable('popup_vacancy');
    makeDraggable('popup_resume');
    makeDraggable('popup_register');
});

function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'block';
    } else {
        console.error('No se encontró el elemento con el ID:', popupId);
    }
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function saveVacancy() {
    // Aquí puedes agregar la lógica para guardar los datos de la vacante temporalmente
    // Por ahora, solo cerrará el popup y mostrará un mensaje
    closePopup('popup_vacancy');
    showSuccessMessage('Vacante registrada exitosamente.');
}

function saveResume() {
    // Aquí puedes agregar la lógica para guardar los datos de la hoja de vida temporalmente
    // Por ahora, solo cerrará el popup y mostrará un mensaje
    closePopup('popup_resume');
    showSuccessMessage('Hoja de vida registrada exitosamente.');
}

function saveRegister() {
    // Aquí puedes agregar la lógica para guardar los datos de la hoja de vida temporalmente
    // Por ahora, solo cerrará el popup y mostrará un mensaje
    closePopup('popup_register');
    showSuccessMessage('Actualizado exitosamente.');
}

function showSuccessMessage(message) {
    // Implementa aquí la lógica para mostrar el mensaje de éxito en la página
    alert(message); // Cambia esto por el método que prefieras para mostrar el mensaje en la página
}
