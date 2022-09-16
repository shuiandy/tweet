$(document).ready(function() {
  $('textarea').on('input', function() {
    let value = $(this).val().length;
    let maximum = 140;
    let currentLen = maximum - value;
    $('main .submit-row .counter').text(currentLen);
    if (currentLen < 0) {
      $('main .submit-row .counter').css('color', 'red');
    } else {
      $('main .submit-row .counter').css('color', '#555149');
    }
  });
});
