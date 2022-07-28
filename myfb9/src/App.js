import React from 'react'
import { db } from "./config/firebase"
import { collection, getDocs } from "firebase/firestore"

const App = () => {
  const collectionRef = collection(db, "books")
  getDocs(collectionRef)
    .then((snapshot) => {
      let books = []
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
        console.log(books)
      })
    })
    .catch((err) => {
      console.log(err.messagingSenderId)
    })
  return (
    <div>
      <table style={{ margin: "300px auto", padding: "30px", border: "1px solid #000" }}>
        <tr style={{ border: "1px solid #000" }}>
          <th style={{ borderBottom: "2px solid #000" }}>Book's Title</th>
          <th style={{ borderBottom: "2px solid #000" }}>Author</th>
        </tr>
        {
          books.map((book) => {
            return (
              <tr>
                <td style={{ borderBottom: "1px dotted #000" }}><h3>{book.title}</h3></td>
                <td style={{ borderBottom: "1px dotted #000" }}><h3>{book.author}</h3></td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App