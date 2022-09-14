$(document).ready(function () {
  $('textarea').keyup(function () {
    let value = $(this).val().length;
    let maximium = 140;
    let currentLen = maximium - value;
    console.log(currentLen);
    if (currentLen < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '#555149');
    }
    $('.counter').text(currentLen);
    console.log(value);
  });
});
