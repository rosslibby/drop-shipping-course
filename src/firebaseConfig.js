import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq8KNoWaOGnZhvAgCqf7YR0VWP3rVV6MU",
  authDomain: "e-commerce-blueprint.firebaseapp.com",
  databaseURL: "https://e-commerce-blueprint.firebaseio.com",
  projectId: "e-commerce-blueprint",
  storageBucket: "",
  messagingSenderId: "596405741350",
  appId: "1:596405741350:web:c809a275ec5ad401ff03e7"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const steps = firebase.database().ref(`lessons`);
export const steps = firebase.database().ref(`steps`); // kill this line and uncomment the above for old functionality
export const progress = firebase.database().ref(`progress`);
export const comments = firebase.database().ref(`comments`);
export const payments = firebase.database().ref(`payments`);
export const users = firebase.database().ref(`users`);
export const database = firebase.database();

export default firebaseConfig;
