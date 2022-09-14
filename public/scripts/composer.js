$(document).ready(() => {
  // animate the compose icon
  $('.fa-angles-down').animate({
    height: '+= 50px',
  });
  // Stretch: making compose button clickable
  $('.compose').click(function () {
    $('#new-tweet').slideToggle('fast'); // slideToogle will determine the action, whether it should be slideDown or slideUp
    $('textarea').focus(); // focus the textarea
  });

  let sideToolbar = $('#returnTop');
  // Stretch: Toggle button to back to the top of the page
  $(window).scroll(function () {
    // determine when to show the button
    if ($(window).scrollTop() > 500) {
      sideToolbar.css('display', 'block');
    } else {
      sideToolbar.css('display', 'none');
    }
  });
  // button function, back to the top of the page
  sideToolbar.on('click', function (e) {
    e.preventDefault();
    $(`html, body`).animate({ scrollTop: 0 }, '300');
  });
});
