var modal = document.querySelector('.modal');

function openModal() {
  event.preventDefault();
  modal =
    event.currentTarget.id === 'add-topping-modal'
      ? document.getElementById('topping-modal')
      : document.querySelector('.modal');
  modal.classList.add('active-modal');
}

function closeModal() {
  let target = $(event.currentTarget);
  modal = target.parents('#topping-modal').length
    ? document.getElementById('topping-modal')
    : document.querySelector('.modal');

  console.log(modal);
  modal.classList.remove('active-modal');
}
function testFunction() 
{
    alert("Modal Opened !")
}