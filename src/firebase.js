import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsa2eymZ-WeSZiISLYOqOd4K4qiCb-Y6Y',
  authDomain: 'idobatakaigi-with-koichiro.firebaseapp.com',
  projectId: 'idobatakaigi-with-koichiro',
  storageBucket: 'idobatakaigi-with-koichiro.appspot.com',
  messagingSenderId: '250418924926',
  appId: '1:250418924926:web:0762f9467a454addc2772f',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
