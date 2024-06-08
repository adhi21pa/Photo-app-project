import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewPhoto = () => {
    const [data, changeData] = useState(
        [
            {"book_title":"The Alchemist","author":"paulo coelho","publisher":"xyz","price":250},
            {"book_title":"Harry potter","author":"Rowling","publisher":"cherry","price":399},
            {"book_title":"Jungle Book","author":"Kipling","publisher":"h&h","price":450},
            {"book_title":"goat life","author":"Bennyamin","publisher":"abc","price":500},
            {"book_title":"oliver","author":"charles","publisher":"jgi","price":300},
        ]
    )
  return (
    <div>
        <Navbar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Publisher</th>
      <th scope="col">Price</th>
    </tr>
    </thead>
    {data.map(
        (value, index) => {
            return <tbody>
                <tr>
                    <th scope="row">{value.book_title}</th>
                    <td>{value.author}</td>
                    <td>{value.publisher}</td>
                    <td>{value.price}</td>
                </tr>
            </tbody>
        }
    )}
    </table>
            </div>
        </div>
    </div>


    </div>
  )
}

export default ViewPhoto