import Vue from 'vue'
import firebase from 'firebase'
import 'firebase/auth'

export default (context, inject) => new Promise((resolve) => {
    const observable = Vue.observable({
        currentUser: firebase.auth().currentUser,
    })
    inject('firebase', observable)
    firebase.auth().onAuthStateChanged(() => {
        observable.currentUser = firebase.auth().currentUser
        resolve()
    })
})

