import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARsbZvAmasy4FqVuUlE-EP5sCdKlCwNnA",
  authDomain: "fir-homework-59f9e.firebaseapp.com",
  projectId: "fir-homework-59f9e",
  storageBucket: "fir-homework-59f9e.appspot.com",
  messagingSenderId: "1013375211328",
  appId: "1:1013375211328:web:3ec8d8fb489b5549480ca5",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getFbItems = async () => {
  try {
    const snapshot = await db.collection("todos").get().docs;
    console.log(snapshot);
    const items = snapshot.map((doc) => ({ ...doc.data(), id: doc.id }));
    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const addFbItem = async (item) => {
  try {
    await db.collection("todos").add(item);
  } catch (err) {
    console.error(err);
  }
};

export const updateFbItem = async (item, id) => {
  try {
    await db.collection("todos").doc(id).update(item);
  } catch (err) {
    console.log(err);
  }
};

export const clearFbItems = async (item) => {
  await db
    .collection("todos")
    .doc(item.id)
    .delete()
    .then(() => {})
    .catch(function (err) {
      console.log(err);
    });
};
