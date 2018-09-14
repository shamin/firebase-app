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

  render() {
    console.log(firebase)
    return (
      <div><button type="button" onClick={this.login}>Sigin</button></div>
    )
  }
}

export default App
