function openModal() {
  event.preventDefault();
  modal = document.getElementById(event.currentTarget.dataset.modal);
  modal.classList.add('active-modal');
}

function closeModal() {
  event.preventDefault();
  modal = document.getElementById(event.currentTarget.dataset.modal);
  modal.classList.remove('active-modal');
}
