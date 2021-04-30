const modal = document.querySelector(".modal");
console.log(modal)

function openModal() {
    modal.classList.add("active");
  }
  
  function closeModal() {
    // remove .active class
    modal.classList.remove("active");
  }
  
  