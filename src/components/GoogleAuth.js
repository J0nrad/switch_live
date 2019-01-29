import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  //using the life cycle for the api will only be called once.
  //we use window to get to the library and then we use a callback to init
  //the information needed.
  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client.init({
        clientId: '1082902895736-4fqgi2djuk5gfaml3qus5ukk6feidun1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChanged(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChanged);
      });
    });
  }

  onAuthChanged = isSignedIn => {
    if(isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  signInClicked = () => {
    this.auth.signIn();
  }

  signOutClicked = () => {
    this.auth.signOut();
  }

  authButton() {
    if (this.props.isSignedIn === null ) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.signOutClicked} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.signInClicked} className="ui red google button">
          <i className="google icon"/>
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>{this.authButton()}</div>
    );
  }
};

const msp = state => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(msp, { signIn, signOut })(GoogleAuth);

//GoogleAuth connects to the google Auth js api library.
//To better understand GoogleAuth open up your console on your webapp
//put in gapi.load('client:auth2')
//now gapi has a lot more functionality than before.
//Now we can use gapi.client.init({ clientId: 'clientid'})
//https://developers.google.com/api-client-library/javascript/reference/referencedocs
//For references of library search fot authentication

//Using Auth2 gives us a reference to an instace of a GAPI auth2 user
