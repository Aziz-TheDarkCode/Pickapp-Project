const modal = document.querySelector(".modal");

function openModal() {
    modal.classList.add("active-modal");
  }
  
  function closeModal() {
    // remove .active class
    modal.classList.remove("active-modal");
  }
  
