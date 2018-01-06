document.addEventListener('DOMContentLoaded', () => {
  let quoteText = new String();
  let quoteAuthor = new String();

  document.getElementById('load-quote').addEventListener('click', () => {
    const quoteHeader = new Headers({
      method: 'GET',
      'Content-Type': 'application/json'
    });

    const quote = fetch('https://talaikis.com/api/quotes/random/', quoteHeader);

    quote
      .then(response => {
        var contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new TypeError("That's no JSON!");
        }
      })
      .then(quoteData => {
        quoteText = quoteData.quote;
        quoteAuthor = quoteData.author;
        document.getElementById('quote-display').innerHTML = `${quoteText}`;
        document.getElementById('author-title').innerHTML = `- ${quoteAuthor}`;
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  });

  document.getElementById('tweet').addEventListener('click', () => {
    const tweetIntent = 'https://twitter.com/intent/tweet?text=';
    let quoteTextQueryString = quoteText.replace(/ /g, '+');
    window.location = `${tweetIntent}${quoteTextQueryString} - ${quoteAuthor}`;
  });

  document.getElementById('fakebook').addEventListener('click', () => {
    FB.ui(
      {
        method: 'share',
        mobile_iframe: true,
        href: 'https://developers.facebook.com/docs/'
      },
      function(response) {
        console.log(response);
      }
    );
  });
});
