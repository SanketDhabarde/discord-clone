import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1CK3OwpA-1YgNjBmcm9K80LbcFc1fvkw",
    authDomain: "todo-app-7ff4e.firebaseapp.com",
    databaseURL: "https://todo-app-7ff4e-default-rtdb.firebaseio.com",
    projectId: "todo-app-7ff4e",
    storageBucket: "todo-app-7ff4e.appspot.com",
    messagingSenderId: "1062296040798",
    appId: "1:1062296040798:web:8521da1c42e91d3bbe4bcf",
    measurementId: "G-02Y8B3DDBS"
};

firebase.initializeApp(firebaseConfig);

export const storage= firebase.storage();

export const auth = firebase.auth();

const db=firebase.firestore();

export default db;