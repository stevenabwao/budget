import * as firebase from 'firebase'


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGIN761009761065G_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
   
};

 firebase.initializeApp(config);
const database = firebase.database();

// database.ref('expenses').on('value', (snapshot) =>{
//     const expenses =[];
//     snapshot.forEach((childSnapshot) =>{
//         expenses.push({
//          id: childSnapshot.key,
//          ...childSnapshot.val()
//         })
//     });
//     console.log(expenses)
// })
    
// once uses promises

// database.ref('expenses').once('value').then((snapshot) =>{
//         const expenses =[];
//         snapshot.forEach((childSnapshot) =>{
//             expenses.push({
//              id: childSnapshot.key,
//              ...childSnapshot.val()
//             })
//         });
//         console.log(expenses)
//     })

export {firebase, database as default}
