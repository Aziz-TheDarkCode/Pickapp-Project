(function () {
  $(document).ready(function () {
    $('.droppable').click(function () {
      $(this).toggleClass('active');
      $(this).next().toggleClass('d-none');
    });
    $('.menu-links li').click(function () {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        let newImg = $(this).find('img').attr('src').split('.svg')[0].trim() + ' Active.svg';
        $(this).find('img').attr('src', newImg);
      } else {
        let newImg = $(this).find('img').attr('src').split('Active.svg')[0].trim() + '.svg';
        $(this).find('img').attr('src', newImg);
      }
    });
  });
})();
