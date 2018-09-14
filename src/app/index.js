import React, { Component } from 'react'
import firebase, { provider } from '../firebase'

class App extends Component {
  login() {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log('Login success', result)
    }).catch((error) => {
      console.log('Login failure', error)
    })
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      console.log('Signout success')
    }).catch((error) => {
      console.log('Signout failure', error)
    });
  }

  render() {
    console.log(firebase)
    return (
      <div>
        <button type="button" onClick={this.login}>Sigin</button>
        <button type="button" onClick={this.signOut}>SigOut</button>
      </div>
    )
  }
}

export default App
