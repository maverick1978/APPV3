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
    alert('Vacante registrada exitosamente.'); // Cambiar esto por un mensaje en la página
}

function saveResume() {
    // Aquí puedes agregar la lógica para guardar los datos de la hoja de vida temporalmente
    // Por ahora, solo cerrará el popup y mostrará un mensaje
    closePopup('popup_resume');
    alert('Hoja de vida registrada exitosamente.'); // Cambiar esto por un mensaje en la página
}
