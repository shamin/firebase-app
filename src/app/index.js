import React, { Component } from 'react'
import firebase, { provider, database } from '../firebase'

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

  write() {
    const user = firebase.auth().currentUser
    if (user) {
      database.ref('users/' + user.uid).set({
        test: user.email,
      })
    } else {
      database.ref('users/123').set({
        test: "as",
      })
    }
  }

  render() {
    console.log(firebase)
    return (
      <div>
        <button type="button" onClick={this.login}>Sigin</button>
        <button type="button" onClick={this.signOut}>SigOut</button>
        <button type="button" onClick={this.write}>Write test</button>
      </div>
    )
  }
}

export default App
