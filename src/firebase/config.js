import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD4VH3D1I4fELDhktxpKk29m68kxSgTYsc",
  authDomain: "chat-room-715b1.firebaseapp.com",
  projectId: "chat-room-715b1",
  storageBucket: "chat-room-715b1.appspot.com",
  messagingSenderId: "399606075770",
  appId: "1:399606075770:web:77157ff564e6781c5806c3"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectAuth, projectFirestore, timestamp }