import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGi2NEMBh4z4W6wUfN7KrMJ3Isz1djfOI",
  authDomain: "auth-router-context-ad524.firebaseapp.com",
  projectId: "auth-router-context-ad524",
  storageBucket: "auth-router-context-ad524.appspot.com",
  messagingSenderId: "224166085269",
  appId: "1:224166085269:web:4cd7bd100470a76f0bd19c",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export the auth instance
const auth = getAuth(app);
export default auth;

