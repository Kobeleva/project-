document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.modal-close-btn');
    const startButtons = document.querySelectorAll('.started');
    const modalForm = document.querySelector('.modal-form');

    if (!modalOverlay || !closeButton) return;

    const openModal = (event) => {
        event.preventDefault();
        modalOverlay.classList.add('is-active');
    };

    const closeModal = () => {
        modalOverlay.classList.remove('is-active');
        if (modalForm) {
            modalForm.reset();
        }
    };

    startButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
            closeModal();
        }
    });
});