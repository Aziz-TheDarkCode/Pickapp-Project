
// document.getElementById('wrapper').onclick = function() {

//     var className = ' ' + wrapper.className + ' ';

//     this.className = ~className.indexOf(' active ') ?
//                          className.replace(' active ', ' ') :
//                          this.className + ' active';
// };

// document.getElementById('wrapper2').onclick = function() {

//     var className = ' ' + wrapper2.className + ' ';

//     this.className = ~className.indexOf(' active ') ?
//                          className.replace(' active ', ' ') :
//                          this.className + ' active';
// }

// document.getElementById('wrapper3').onclick = function() {

//     var className = ' ' + wrapper3.className + ' ';

//     this.className = ~className.indexOf(' active ') ?
//                          className.replace(' active ', ' ') :
//                          this.className + ' active';
// }
var acc = document.getElementsByClassName("accordion");
// let saveBtn = document.querySelector(".save-btn")
// let edit = document.querySelector(".edit-item")
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var test = this.previousElementSibling
    if (panel.style.display === "flex") {
      panel.style.display = "none";
      edit.style.display="flex"
      saveBtn.style.display="none"
      // this.classList.remove("bordered-left-primary")
    } else {
      panel.style.display = "flex";
      edit.style.display="none"
      saveBtn.style.display="block"
    }
  });
}