$(document).ready(() => {
  let sideToolbar = $('#returnTop');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      sideToolbar.css('display', 'block');
    } else {
      sideToolbar.css('display', 'none');
    }
  });
  sideToolbar.on('click', function (e) {
    e.preventDefault();
    $(`html, body`).animate({ scrollTop: 0 }, '300');
  });
});
