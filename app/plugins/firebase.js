import firebase, { initializeApp } from 'firebase'

if (!firebase.apps.length) {
    initializeApp({
        apiKey: "AIzaSyD0BdyLnncHTHUv6QIzPIyrhhPygcR5PlA",
        authDomain: "family-meal-69f4f.firebaseapp.com",
        databaseURL: "https://family-meal-69f4f.firebaseio.com",
        projectId: "family-meal-69f4f",
        storageBucket: "family-meal-69f4f.appspot.com",
        messagingSenderId: "797128335126",
        appId: "1:797128335126:web:6d7d3ae594d3eced34fa37",
        measurementId: "G-Y1DF9L843J"
    })
}

export default firebase