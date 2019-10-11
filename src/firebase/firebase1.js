import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAiSQnutl6PgGPC30pSf2P8HMg-BWUncs0",
    authDomain: "budgetapp-96f53.firebaseapp.com",
    databaseURL: "https://budgetapp-96f53.firebaseio.com",
    projectId: "budgetapp-96f53",
    storageBucket: "",
    messagingSenderId: "761009761065",
    appId: "1:761009761065:web:43ac38d71c2d31a61f6538",
    measurementId: "G-2H8QC41KK4"
};

firebase.initializeApp(config);
const database = firebase.database();
// database.ref().set({
//     name: 'Steven',
//     location: {
//         city: 'Kisumu',
//         country: 'Kenya'
//     }
// })
// database.ref('name').set('Jenna');
// database.ref('location/city').set('New York');
// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(()=> {
//     console.log('Attribute was saved');
// }).catch((e)=>{
//     console.log('thingd didnt work')
// })
// database.ref()
//          .remove()
//          .then(()=>{
//              console.log("data was removed")
//          }).catch((e)=>{
//              console.log('Did not remove daata',e)
//          });


// database.ref().on('value', (snapshot) =>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })
// database.ref().set({
//     name: 'Steven',
//     age: 29,
//     stressLevel: 6,
//     job:{
//         title: 'software developer',
//         company: 'google',
//     },
//     location: {
//         city: 'Kisumu',
//         country: 'Kenya'
//     }
// }).then(()=> {
//     console.log('data was saved');
// }).catch((e)=>{
//     console.log('this failed' , e)
// })
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city':'Barcelona'
// })
// database.ref('expenses').on('value', (snapshot) =>{
    //    const expenses = [];
    //    getHeapSnapshot.forEach((childsnapshot) =>{
    //        id: childsnapshot.key,
    //        ...childsnapshot.val
    //    })
// })
// console.log(exenses)
// });