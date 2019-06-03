document.addEventListener("DOMContentLoaded", function() {

    let modalsBlock = document.getElementById('modals-block'),
        conrifmModalBody = modalsBlock.querySelector('.confirm-model__body');

    // открыть модльник подтверждения
    function openConfirmModal() {
        modalsBlock.classList.remove('modals--fadeout');
    }

    // закрыть модальник подтверждения
    function closeConfirmModal() {
        modalsBlock.classList.add('modals--fadeout');
    }

    // обработка нажатия на оверлей и кнопку закрытия в модальном окне
    modalsBlock.querySelectorAll('.overlay, .confirm-modal__close-button').forEach(elem => {
        elem.addEventListener('click', function(event) {
            closeConfirmModal();
        });
    });

    // обработка нажатия на элемент списка
    document.querySelectorAll('.block-devices__list .block-devices__elem').forEach(elem => {
        elem.addEventListener('click', function(event) {

            let content = elem.cloneNode(true);
            
            conrifmModalBody.removeChild(conrifmModalBody.lastChild);
            conrifmModalBody.appendChild(content);

            openConfirmModal();
        });
    });

    // нажатие кнопки Escape
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }

        if (isEscape) {
            closeConfirmModal();
        }
    };

});