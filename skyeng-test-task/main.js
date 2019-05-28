document.addEventListener("DOMContentLoaded", function() {

    let modalsBlock = document.getElementById('modals-block'),
        conrifmModalBody = modalsBlock.querySelector('.confirm-model__body');

    // открыть модльник подтверждения
    function openConfirmModal() {
        modalsBlock.classList.remove('modals--hidden');
        modalsBlock.classList.remove('modals--fadeout');
    }

    // закрыть модальник подтверждения
    function closeConfirmModal() {
        modalsBlock.classList.add('modals--fadeout');
        setTimeout(function() {
            modalsBlock.classList.add('modals--hidden');
        }, 300);
    }

    // обработка нажатия на оверлей и кнопку закрытия в модальном окне
    Array.from(modalsBlock.querySelectorAll('.overlay, .confirm-modal__close-button')).forEach(elem => {
        elem.addEventListener('click', function(event) {
            conrifmModalBody.in
            closeConfirmModal();
        });
    });

    // обработка нажатия на элемент списка
    Array.from(document.querySelectorAll('.block-devices__list .block-devices__elem')).forEach(elem => {
        elem.addEventListener('click', function(event) {

            let content = elem.cloneNode(true);
            
            conrifmModalBody.removeChild(conrifmModalBody.lastChild);
            conrifmModalBody.appendChild(content);

            openConfirmModal();
        });
    });

});