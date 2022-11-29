/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB5-1D3B-1dTJjBRqZ33UzD3ecnr9HjadM",
  authDomain: "friendlychat-6bfce.firebaseapp.com",
  projectId: "friendlychat-6bfce",
  storageBucket: "friendlychat-6bfce.appspot.com",
  messagingSenderId: "1089933552388",
  appId: "1:1089933552388:web:882115ebfd36dd9ce57e51"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}