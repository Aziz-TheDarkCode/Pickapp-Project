(function () {
  document.querySelectorAll('.tooltip-icon').forEach((el) => {
    el.addEventListener('mouseenter', function () {
      this.nextElementSibling.classList.add('active');
    });
    el.addEventListener('mouseleave', function () {
      this.nextElementSibling.classList.remove('active');
    });
  });
})();
