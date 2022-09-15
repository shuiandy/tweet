// get current data from backend database and render them.
const ajaxGetData = () => {
  $.ajax('/tweets', { method: 'GET' }).then((postData) => {
    renderTweets(postData);
  });
};

$(document).ready(() => {
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
    // hide error-box
    $('#error-box').slideUp('fast');
    // submit user input to backend
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize(),
      // reload data from database if request succeed
      success: function () {
        ajaxGetData();
      },
    });
    //restore the input value to default
    $('textarea').val('');
    $('.counter').val(140);
  });
});
