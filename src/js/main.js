document.querySelector('#load-quote').addEventListener('click', () => {
  const quoteHeader = new Headers({
    method: 'GET',
    'Content-Type': 'application/json'
  });
  const quote = fetch('http://quotes.rest/qod.json');
  // ?filter[orderby]=rand&filter[posts_per_page]=1
  quote
    .then(response => {
      var contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        throw new TypeError("That's no JSON!");
      }
    })
    .then(data => {
      const quoteData = data.contents.quotes[0];
      document.getElementById('quote-display').innerHTML = `${quoteData.quote}`;
      document.getElementById('author-title').innerHTML = `- ${
        quoteData.author
      },<br> &nbsp; &nbsp;${quoteData.title}`;
    })
    .catch(error => {
      alert(error);
      console.log(error);
    });
});

// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en
