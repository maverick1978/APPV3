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
// Make the popup draggable
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector("popup_vacancy");
    var closeBtn = popup.querySelector(".close")
    //dragElement(document.getElementById("popup-vacancy-content"));
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Make the popup draggable
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector(".popup-content");
    var closeBtn = popup.querySelector(".close");

    // When clicking the close button, close the popup
    closeBtn.addEventListener("click", function() {
        closePopup();
    });

    // When clicking anywhere inside the popup, start dragging it
    popup.addEventListener("mousedown", startDragging);

    // Function to start dragging the popup
    function startDragging(e) {
        e.preventDefault();
        // Get the initial mouse position
        var initialX = e.clientX;
        var initialY = e.clientY;
        // Get the initial popup position
        var initialPopupX = popup.offsetLeft;
        var initialPopupY = popup.offsetTop;

        // Function to move the popup
        function movePopup(e) {
            e.preventDefault();
            // Calculate the new position of the popup
            var newX = initialPopupX + e.clientX - initialX;
            var newY = initialPopupY + e.clientY - initialY;
            // Set the new position of the popup
            popup.style.left = newX + "px";
            popup.style.top = newY + "px";
        }

        // Function to stop dragging the popup
        function stopDragging() {
            // Remove event listeners when dragging is stopped
            document.removeEventListener("mousemove", movePopup);
            document.removeEventListener("mouseup", stopDragging);
        }

        // Add event listeners for moving the popup and stopping dragging
        document.addEventListener("mousemove", movePopup);
        document.addEventListener("mouseup", stopDragging);
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }
});
