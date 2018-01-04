window.fbAsyncInit = function() {
  console.log('FB loaded');
  FB.init({
    appId: '205647673334806',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.11'
  });
};

(function(d, s, id) {
  console.log('FB loading...?');
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
