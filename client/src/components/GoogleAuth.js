import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn, signOut } from '../actions'


class GoogleAuth extends Component {
  componentDidMount() {
    // Load the Google API's client and auth2 libraries
    window.gapi.load('client:auth2', () => {
      // Initialize the Javascript client >> loads the gapi.auth2 module to perform OAuth
      window.gapi.client.init({
        clientId: '1052285304530-gfke87hm8i056r0lih53pfs4gfpdekn7.apps.googleusercontent.com',
        scope: 'email'
      /* Once init() is complete:
          1) Provide a reference to the AuthInstance object
          2) Pass isSignedIn.get() into the onAuthChange method to update the state by invoking one of two action creators
          3) Invoke isSignedIn's listen() method to execute a callback function whenever user's signed-in status changes */
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

/* Function that runs whenever the user's signed-in status changes.
   The isSignedIn argument is a Boolean value provided by this.auth.isSignedIn.get().
   Depending on the value of isSignedIn one of two action creators is called and
   the state inside of the Redux Store is changed. */
   onAuthChange = isSignedIn => {
    if (isSignedIn) {
      // Pass in the Google provided user ID into our action creator
      this.props.signIn(this.auth.currentUser.get().getId())
    } else {
      this.props.signOut()
    }
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)