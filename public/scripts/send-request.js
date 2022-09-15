$(document).ready(() => {
  ajaxGetData();
  // submit user input to backend
  $('form').on('submit', function(e) {
    e.preventDefault();
    let currentLen = $('textarea').val().length;
    // slide error message if user input length exceeds the limit
    if (currentLen > 140 || currentLen === 0) {
      $('#error-box').slideDown('fast');
      return;
    }
    // hide error-box
    $('#error-box').slideUp('fast');
    // submit user input to backend
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize(),
      // reload data from database if request succeed
      success: function() {
        ajaxGetData();
      },
    });
    //restore the input value to default
    $('textarea').val('');
    $('.counter').val(140);
  });
});
