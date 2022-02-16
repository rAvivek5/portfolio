// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCanMZWzv_X4Zt5YNoK66tulTbywAUR90o',
  authDomain: 'ooportifolio.firebaseapp.com',
  projectId: 'ooportifolio',
  storageBucket: 'ooportifolio.appspot.com',
  messagingSenderId: '548068883718',
  appId: '1:548068883718:web:8e5f108d5cc0d70a887287',
  measurementId: 'G-RZCDK33629',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
