$(document).ready(function() {
  // animate the compose arrow icon
  $(function() {
    const loop = () => {
      $('.fa-angles-down')
        .animate({ 'padding-top': '13px' }, 1000)
        .animate({ 'padding-top': '2px' }, 1000, loop);
    };
    loop();
  });
  // Stretch: making compose button clickable
  $('.compose i').click(function() {
    $('#new-tweet').slideToggle('fast'); // slideToggle will determine the action, whether it should be slideDown or slideUp
    $('textarea').focus(); // focus the textarea
  });

  let sideToolbar = $('#returnTop');
  // Stretch: Toggle button to back to the top of the page
  $(window).scroll(function() {
    // determine when to show the button
    if ($(window).scrollTop() > 500) {
      sideToolbar.css('display', 'block');
    } else {
      sideToolbar.css('display', 'none');
    }
  });
  // button function, back to the top of the page
  sideToolbar.on('click', function(e) {
    e.preventDefault();
    $(`html, body`).animate({ scrollTop: 0 }, 300);
  });
});
