import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = ({ setId }) => {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [deleteBook, setdeleteBook] = useState([]);
  useEffect(() => {
    fetchData();
  }, [deleteBook]);

  const fetchData = async () => {
    await axios
      .get("https://665724a99f970b3b36c81f26.mockapi.io/api/books")
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  };

  // Handle for Edit the details
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  // Handle for Delete the Book
  const handleDelete = async (id) => {
    await axios
      .delete(`https://665724a99f970b3b36c81f26.mockapi.io/api/books/${id}`)
      .then((res) => setdeleteBook(res.data))
      .catch((error) => console.log(error));
    alert("Book Deleted Successfully!!!!");
  };

  return (
    <div className="container-fluid book-main">
      <div className="row">
        <div className="col-6">
          <legend>Book Information</legend>
        </div>
      </div>
      <div className="container book-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Book Id</th>
                <th scope="col">Book Title</th>
                <th scope="col">ISBN</th>
                <th scope="col">Published Data</th>

                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {book.map((element, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{element.id}</th>
                    <td>{element.book_id}</td>
                    <td>{element.book_title}</td>
                    <td>{element.book_isbn_number}</td>
                    <td>{element.book_published_date}</td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => {
                          handleEdit(element.id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          handleDelete(element.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Books;
