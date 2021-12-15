import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDrobLxvxXs2KvLWUCemFbHyYNNG6JRLpo",
  authDomain: "project-60-f65cf.firebaseapp.com",
  databaseURL: "https://project-60-f65cf-default-rtdb.firebaseio.com",
  projectId: "project-60-f65cf",
  storageBucket: "project-60-f65cf.appspot.com",
  messagingSenderId: "470144257867",
  appId: "1:470144257867:web:629d6da5ec3c7a1b2ae2ce"
};

if(firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}