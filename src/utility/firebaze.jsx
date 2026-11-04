// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjHvuN3gCdT1PpsLKDgAgpPCFw8I7nX94",
//   authDomain: "fir-777ec.firebaseapp.com",
//   projectId: "fir-777ec",
//   storageBucket: "fir-777ec.firebasestorage.app",
//   messagingSenderId: "671459162942",
//   appId: "1:671459162942:web:29eecb131ef208405b8a6f",
//   measurementId: "G-6H9SM1V6D7"
// };

// // Initialize Firebase
// const app =initializeApp(firebaseConfig);
// export const auth=getAuth(app);
//  export const db=app.firestore();










// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBjHvuN3gCdT1PpsLKDgAgpPCFw8I7nX94",
//     authDomain: "fir-777ec.firebaseapp.com",
//     projectId: "fir-777ec",
//     storageBucket: "fir-777ec.firebasestorage.app",
//     messagingSenderId: "671459162942",
//     appId: "1:671459162942:web:29eecb131ef208405b8a6f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Authentication
// const auth = getAuth(app);

// // Export Firebase services
// export { app, auth };





import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjHvuN3gCdT1PpsLKDgAgpPCFw8I7nX94",
  authDomain: "fir-777ec.firebaseapp.com",
  projectId: "fir-777ec",
  storageBucket: "fir-777ec.firebasestorage.app",
  messagingSenderId: "671459162942",
  appId: "1:671459162942:web:29eecb131ef208405b8a6f",
  measurementId: "G-6H9SM1V6D7"
};

// Initialize Firebase only once
const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

// Export Firebase app
export default app;
