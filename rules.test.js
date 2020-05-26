const firebase = require("@firebase/testing");
const fs = require("fs")

const projectId = 'family-meal-69f4f'
const rules = fs.readFileSync('./firestore.rules', 'utf8')

const serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp()

beforeAll(async () => {
    await firebase.loadFirestoreRules({ projectId, rules });
})

beforeEach(async () => {
    await firebase.clearFirestoreData({ projectId });
})

afterAll(async () => {
    await Promise.all(firebase.apps().map(app => app.delete()));
})

const authedApp = (auth) => {
    return firebase.initializeTestApp({ projectId, auth }).firestore();
}

describe("users", () => {
    describe("create", () => {
        it('成功', async () => {
            const userID = 'SNa8VCnA6cU3VetNNBeWtkbZCT02';
            const db = authedApp({ uid: userID });
            await firebase.assertSucceeds(db.collection('users').doc(userID).set({
                name: 'seigi',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            }))
        })
    })
});
