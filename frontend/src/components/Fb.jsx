// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8dgheG3xmNCyk0uGxPIyaPWgR8TbOI4A",
  authDomain: "hospital-management-syst-b48af.firebaseapp.com",
  projectId: "hospital-management-syst-b48af",
  storageBucket: "hospital-management-syst-b48af.appspot.com",
  messagingSenderId: "509939148466",
  appId: "1:509939148466:web:6d7e7437788da578a0cbab",
  measurementId: "G-PJ818TD39G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const analytics = getAnalytics(app);
