const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  Object.values(tweets).forEach((content) => {
    const tweet = createTweetElement(content);
    $(document).ready(function () {
      $('#display-tweet').prepend(tweet);
    });
  });
};

const createTweetElement = function (tweet) {
  const username = tweet.user.name;
  const avatar = tweet.user.avatars;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const createdTime = timeago.format(Date.now() - tweet.created_at);
  console.log(createdTime);

  // escape function to prevent XSS attack
  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  // ...
  return `
<div class="tweets">
    <header class="username-row">
      <div class="names">
        <a class="avatar-img"><img src=${escape(avatar)} alt=""></a>
        <a class="full-name">${escape(username)}</a>
      </div>
      <a class="username">${escape(handle)}</a>
    </header>
    <p class="article">${escape(content)}</p>
    <footer class="tweet-footer">
      <a class="tweet-time">${escape(createdTime)}</a>
      <div class="action-group">
        <i class="flag fa-xs fa-sharp fa-solid fa-flag"></i>
        <i class="retweet fa-xs fa-solid fa-retweet"></i>
        <i class="heart fa-xs fa-solid fa-heart"></i>
      </div>
    </footer>
    </div>
    `;
};

const ajaxGetData = () => {
  $.ajax('/tweets', { method: 'GET' }).then((postData) => {
    renderTweets(postData);
  });
};
