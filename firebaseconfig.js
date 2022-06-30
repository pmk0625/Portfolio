(function (window) {
    'use strict';
    var App = window.App || {};

    var FirebaseConfig = {
        apiKey: "AIzaSyCSnb-LGRB1iriQ62k4VBJGtkaZw1i-b_A",
        authDomain: "minkyu-ray-park-portfolio.firebaseapp.com",
        projectId: "minkyu-ray-park-portfolio",
        storageBucket: "minkyu-ray-park-portfolio.appspot.com",
        messagingSenderId: "453260334424",
        appId: "1:453260334424:web:0983aeecb36f5c95cf412d"
    };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);

    window.App = App;
})(window);


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSnb-LGRB1iriQ62k4VBJGtkaZw1i-b_A",
  authDomain: "minkyu-ray-park-portfolio.firebaseapp.com",
  projectId: "minkyu-ray-park-portfolio",
  storageBucket: "minkyu-ray-park-portfolio.appspot.com",
  messagingSenderId: "453260334424",
  appId: "1:453260334424:web:0983aeecb36f5c95cf412d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */