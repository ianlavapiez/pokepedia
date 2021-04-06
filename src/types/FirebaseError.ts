import firebase from "firebase";

type FirebaseErrorType = firebase.FirebaseError;

export default interface FirebaseError extends FirebaseErrorType {}
