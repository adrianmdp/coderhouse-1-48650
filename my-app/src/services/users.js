import { inhabitants } from "../data/inhabitants";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// const getAll = async () => {

//     const response = await fetch("https://conectadas-1192e-default-rtdb.firebaseio.com/users.json")
//     const data = await response.json()

//     return data;

// }

// const getAll = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(inhabitants);
//     }, [500]);
//   });
// };

const getAll = async () => {
  const db = getFirestore();
  const usersCollection = collection(db, "users");
  const snapshot = await getDocs(usersCollection);

  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return users;
};

// const get = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(inhabitants.find((elem) => elem.id.toString() === id));
//     }, [500]);
//   });
// };

const get = async (id) => {
  const db = getFirestore();

  const userDoc = doc(db, "users", id);
  const snapshot = await getDoc(userDoc);

  const user = { id: snapshot.id, ...snapshot.data() };

  return user;
};

const getByName = async (name) => {
  const db = getFirestore();
  const usersCollection = collection(db, "users");

  const q = query(usersCollection, where("name", "==", name));
  const snapshot = await getDocs(q);

  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return users;
};

const getByPrice = (minPrice, maxPrice) => {};

const add = (user) => {};

export const usersService = { getAll, get, add, getByName };
