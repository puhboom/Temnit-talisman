import React from 'react';
// import FacebookLoginButton from './facebook'

class FacebookLoginButton extends React.Component {
  componentDidMount() {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '798508848331879',
        cookie: true,
        xfbml: true,
        version: 'v11.0'
      });
    };

    // Trigger the asynchronous loading of the Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleFacebookLogin = () => {
    window.FB.login(
      function(response) {
        if (response.authResponse) {
          // User logged in successfully
          console.log('Access Token: ' + response.authResponse.accessToken);
        } else {
          // User canceled login or did not authorize
          console.log('User canceled login or did not authorize.');
        }
      },
      { scope: 'public_profile,email' } // Add any additional permissions you need
    );
  };

  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <button onClick={this.handleFacebookLogin}>Login with Facebook</button>
      </div>
    );
  }
}

export default FacebookLoginButton;
