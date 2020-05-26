import firebase from '~/plugins/firebase'
import "firebase/auth"
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const usersRef = db.collection('users')

export const state = () => ({
     users: [],
     isLogin: false
})

export const actions = {
    init: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('users','usersRef')
    }),
    async googleAuth() {
        const provider =  new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithRedirect(provider)
        firebase.auth().onCreate((user) => {
            store.dispatch('users/createUser')
        });
    },
    addUser: firestoreAction((context, {name,text}) =>{
        var user = firebase.auth().currentUser;
        if(user){
            usersRef.add({
                name: name,
                email: user.email,
                userID: user.uid,
                belongGroup: null,
                followGroup: null,
                selfIntroduction: text
            })
        }
    }),
    logout() {
        firebase.auth().signOut()
    }
}