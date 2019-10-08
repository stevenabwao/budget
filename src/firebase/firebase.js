import * as firebase from 'firebase'












firebase.initializeApp(config);
const database = firebase.database();
database.ref().sec('i love kisumu')