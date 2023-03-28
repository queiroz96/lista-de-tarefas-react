import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyClKZIC0R9fkVTcXp1bTnPy7O3_zBVaeWU",
    authDomain: "lista-de-tarefas-c6e2a.firebaseapp.com",
    projectId: "lista-de-tarefas-c6e2a",
    storageBucket: "lista-de-tarefas-c6e2a.appspot.com",
    messagingSenderId: "268898728043",
    appId: "1:268898728043:web:1b050feb61a091ce33592e"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase; 