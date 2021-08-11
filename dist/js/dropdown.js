// var acc = document.getElementsByClassName('accordion');
// let saveBtn = document.querySelector(".save-btn")
// let edit = document.querySelector(".edit-item")
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     var panel = this.nextElementSibling;
//     var test = this.previousElementSibling;
//     if (panel.style.display === 'flex') {
//       panel.style.display = 'none';
//       edit.style.display = 'flex';
//       saveBtn.style.display = 'none';
//       // this.classList.remove("bordered-left-primary")
//     } else {
//       panel.style.display = 'flex';
//       edit.style.display = 'none';
//       saveBtn.style.display = 'block';
//     }
//   });
// }

(function () {
  document.querySelectorAll('.accordion').forEach(function (accordion) {
    accordion.addEventListener('click', function (e) {
      if (e.target.classList.contains('accordion-item')) {
        this.children[0].classList.toggle('active');
        if (e.target.classList.contains('accordion-item')) {
          var panel = this.children[1];
          if (panel.style.display === 'flex') {
            panel.style.display = 'none';
            edit.style.display = 'flex';
            saveBtn.style.display = 'none';
          } else {
            panel.style.display = 'flex';
            edit.style.display = 'none';
            saveBtn.style.display = 'block';
          }
        }
      } else {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  });
})();

(function () {
  document.querySelector('.search')?.addEventListener('focus', (e) => {
    var searchBox = document.querySelector('.search-box');
    searchBox.style.display = 'block';
  });
  window.addEventListener('click', (e) => {
    if (
      !document.querySelector('.search-box').contains(e.target) &&
      !e.target.classList.contains('search')
    ) {
      var searchBox = document.querySelector('.search-box');
      searchBox.style.display = 'none';
    }
  });
})();
