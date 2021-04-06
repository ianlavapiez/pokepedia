import firebase from "firebase";
import "firebase/firestore";

interface ConfigProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const config: ConfigProps = {
  apiKey: "AIzaSyDgXCntWcyTCPhEgBxt5WwGpmQYZFRnsNA",
  authDomain: "pokepedia-6f0ed.firebaseapp.com",
  projectId: "pokepedia-6f0ed",
  storageBucket: "pokepedia-6f0ed.appspot.com",
  messagingSenderId: "983632382221",
  appId: "1:983632382221:web:dad38c90aad5c7f4ccc844",
  measurementId: "G-Y9XV8RDM52",
};

firebase.initializeApp(config);

export const firestore: firebase.firestore.Firestore = firebase.firestore();

export default firebase;
