import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set, get, update, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const cloudDb = getFirestore(app);
export const db = getDatabase();

export const addData = async () => {
  const db = getDatabase();
  set(ref(db, 'operation/'), {
    time: 0,
  });
};

export const updateData = async (id: string) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `operation/time`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const db = getDatabase();
        const updates = {};
        //@ts-ignore
        updates['/operation/time'] = snapshot.val() + 1;
        //@ts-ignore
        updates['/operation/id'] = id;
        update(ref(db), updates);
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
