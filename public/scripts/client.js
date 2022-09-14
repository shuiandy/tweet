const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  Object.values(tweets).forEach((content) => {
    const tweet = createTweetElement(content);
    // $('#container').append(tweet);
    $(document).ready(function () {
      $('#display-tweet').append(tweet);
    });
    // document.getElementById("display-tweet").appendChild(tweet);
  });
};

const createTweetElement = function (tweet) {
  const username = tweet.user.name;
  const avatar = tweet.user.avatars;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const createdTime = timeago.format(Date.now() - tweet.created_at);
  // ...
  return `
    <header class="username-row">
      <div class="names">
        <a class="avatar-img"><img src=${avatar} alt=""></a>
        <a class="full-name">${username}</a>
      </div>
      <a class="username">${handle}</a>
    </header>
    <p class="article">${content}</p>
    <footer class="tweet-footer">
      <a class="tweet-time">${createdTime}</a>
      <div class="action-group">
        <i class="flag fa-xs fa-sharp fa-solid fa-flag"></i>
        <i class="retweet fa-xs fa-solid fa-retweet"></i>
        <i class="heart fa-xs fa-solid fa-heart"></i>
      </div>
    </footer>
    `;
};

$(document).ready(() => {
  $.ajax('/tweets', {method: 'GET'}).then((postData) => {
    renderTweets(postData);
  });
  $('form').on('submit', function (e) {
    e.preventDefault();
    $.ajax($(this).serialize());
  });
});
