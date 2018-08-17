const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.aggregateWows = functions.firestore
    .document('/wows/{wowId}')
    .onWrite((snapshot, context) => {
        const wowId = context.params.wowId;
        const videoId = wowId.split("_")[1];
        const resourceDoc = admin.firestore().collection('resources').doc(videoId);
        return admin.firestore().collection('wows')
            .where("videoId", "==", videoId)
            .get()
            .then(querySnapshot => {
                const wows = querySnapshot.size;
                console.log(wows);
                console.log(videoId);
                return resourceDoc.update({wows: wows});
            })
            .catch(err => console.log(err));
    });

exports.aggregateHmms = functions.firestore
    .document('/hmms/{hmmId}')
    .onWrite((snapshot, context) => {
        const hmmId = context.params.hmmId;
        const videoId = hmmId.split("_")[1];
        const resourceDoc = admin.firestore().collection('resources').doc(videoId);
        return admin.firestore().collection('hmms')
            .where("videoId", "==", videoId)
            .get()
            .then(querySnapshot => {
                const hmms = querySnapshot.size;
                console.log(hmms);
                console.log(videoId);
                return resourceDoc.update({hmms: hmms});
            })
            .catch(err => console.log(err));
    });

exports.aggregateGiggles = functions.firestore
    .document('/giggles/{giggleId}')
    .onWrite((snapshot, context) => {
        const giggleId = context.params.giggleId;
        const videoId = giggleId.split("_")[1];
        const resourceDoc = admin.firestore().collection('resources').doc(videoId);
        return admin.firestore().collection('giggles')
            .where("videoId", "==", videoId)
            .get()
            .then(querySnapshot => {
                const giggles = querySnapshot.size;
                console.log(giggles);
                console.log(videoId);
                return resourceDoc.update({giggles: giggles});
            })
            .catch(err => console.log(err));
    });

// exports.aggregateHmms = functions.database
//     .ref('hmms/')
//     .onCreate((snapshot, context) => {
//         console.log(context.params)
//     });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });