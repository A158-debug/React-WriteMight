import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCj252D8J45VWcCYuoQJCueFaNUApnIu0k",
  authDomain: "memories-352715.firebaseapp.com",
  projectId: "memories-352715",
  storageBucket: "memories-352715.appspot.com",
  messagingSenderId: "64044986296",
  appId: "1:64044986296:web:f20e55cfc9433d0f5da94d"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// export const provider = new GoogleAuthProvider();