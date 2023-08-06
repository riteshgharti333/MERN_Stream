// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-weLec3VLlwMz9u4xFOOyY-kofQK5114",
  authDomain: "neflix-data.firebaseapp.com",
  projectId: "neflix-data",
  storageBucket: "neflix-data.appspot.com",
  messagingSenderId: "818747101080",
  appId: "1:818747101080:web:6afe45703a72e0e9b2e5ed",
  measurementId: "G-DYD9DW0JZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export default storage;
