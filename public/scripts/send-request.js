$(document).ready(() => {
  // get current data from backend database and render them.
  ajaxGetData();

  // submit user input to backend
  $('form').on('submit', function (e) {
    e.preventDefault();
    let currentLen = $('textarea').val().length;

    // slide error message if user input length exceeds the limit
    if (currentLen > 140) {
      $('#error-box').slideDown('fast');
      return;
    }
    // submit user input to backend
    $('#error-box').slideUp('fast');
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize(),
      // reload data from database
    });
    //restore the input value to default
    $('textarea').val('');
    $('.counter').val(140);
  });
});
