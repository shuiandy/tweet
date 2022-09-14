$(document).ready(function () {
  $('textarea').keyup(function () {
    let value = $(this).val().length;
    let maximum = 140;
    let currentLen = maximum - value;
    $('.counter').text(currentLen);
    if (currentLen < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#555149');
    }
  });
});
