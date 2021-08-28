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

function multipleToggle(el, classes) {
  classes.forEach(function (className) {
    el.classList.toggle(className);
  });
}

(function ($) {
  $.querySelectorAll('.add-item-button')?.forEach(function (node) {
    node.addEventListener('click', function (e) {
      e.preventDefault();
      let input = this.previousElementSibling.cloneNode(true);
      input.querySelectorAll('input').forEach(function (node) {
        node.value = '';
      });
      this.parentNode.insertBefore(input, this);
    });
  });
  $.querySelectorAll('.edit-option')?.forEach(function (node) {
    node.addEventListener('click', function (e) {
      e.preventDefault();
      let grandParent = this.parentNode.parentNode;
      multipleToggle(grandParent.querySelector('.saved-header'), ['d-flex', 'd-none']);
      grandParent.querySelector('.saved-content').classList.toggle('d-none');
      multipleToggle(grandParent.querySelector('.edit-header'), ['d-flex', 'd-none']);
      grandParent.querySelector('.edit-content').classList.toggle('d-none');
    });
  });
  $.querySelectorAll('.save-option')?.forEach(function (node) {
    node.addEventListener('click', function (e) {
      e.preventDefault();
      let grandParent = this.parentNode.parentNode;
      multipleToggle(grandParent.querySelector('.edit-header'), ['d-flex', 'd-none']);
      grandParent.querySelector('.edit-content').classList.toggle('d-none');
      multipleToggle(grandParent.querySelector('.saved-header'), ['d-flex', 'd-none']);
      grandParent.querySelector('.saved-content').classList.toggle('d-none');
    });
  });
})(document);
