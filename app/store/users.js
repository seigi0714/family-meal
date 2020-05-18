import firebase from '~plugins/firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const usersRef = db.collection('users')

export const state = () => ({
     users: []
})

export const actions = {
    init: firestoreActon(({ bindFirestoreRef }) => {
        bindFirestoreRef('users','usersRef')
    }),
    
}