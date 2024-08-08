const scheduling = [
    {
        id: 1,
        tutorName: '',
        petName: '',
        phone: '',
        date: '',
        hour: '',
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.form-modal');
    const btnCreate = document.querySelector('.btn-create');
    const form = document.querySelector('.form-modal form');

    btnCreate.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modal.addEventListener('click', (event) => {
        if (!form.contains(event.target)) {
            modal.style.display = 'none';
        }
    });
});
