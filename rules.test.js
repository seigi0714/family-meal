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

/* describe("users", () => {
    describe("create", () => {
        it('成功', async () => {
            const userID = 'doighroo'
            const db = authedApp({ uid: userID });
            await firebase.assertSucceeds(db.collection('users').doc(userID).set({
                name: 'seigi',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            }))
        })
    })
}); */

describe("groups", () => {
    describe("groupUser", () => {
        beforeEach(async () => {
            // invitationCodeを事前に作っておく
            const userID = 'doighroo'
            const groupID = 'rwro4pjg'
            const db = authedApp({ uid: userID });
            await db.collection('groups').doc(groupID).set({
                name: 'firstGroup',
                groupUsers: userID
            })
            await db.collection('invitationCodes').doc("code").set({
               code: "code",
               groupID: groupID,
               expireAt: firebase.firestore.FieldValue.serverTimestamp()+ 30 * 60 * 1000,
               createAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            
        })

        it("成功", async () => {
            
            const userID = 'doighroo'
            const groupID = 'rwro4pjg'
            const db = authedApp({ uid: userID });
            const code = db.collection('invitationCodes').doc("code")
             await firebase.assertSucceeds(db.collection('groups').doc(groupID).collection('groupUsers').doc(userID).set({
                 invitationCodes: code
             })
            )
            })
    })
})