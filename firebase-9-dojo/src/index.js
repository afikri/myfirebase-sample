import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0-Xu-dYw49ySWnSNrrnY_7UtXos6pa3g",
  authDomain: "fir-9-dojo-fdf9d.firebaseapp.com",
  projectId: "fir-9-dojo-fdf9d",
  storageBucket: "fir-9-dojo-fdf9d.appspot.com",
  messagingSenderId: "709074561387",
  appId: "1:709074561387:web:f9c95620a93cef30d1842e",
};

// init firebase app
initializeApp(firebaseConfig);

// init service
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    //   console.log(snapshot.docs);

    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
      console.log(books);
    });
  })
  .catch((err) => {
    console.log(err.messagingSenderId);
  });

// adding docs
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(()=>{
    addBookForm.reset()
  });
});

// deleting docs
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
});
