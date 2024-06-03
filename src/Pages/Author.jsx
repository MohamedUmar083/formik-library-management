import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Author = ({ setId }) => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState([]);
  const [deleteAuthor, setdeleteAuthor] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteAuthor]);

  const fetchData = async () => {
    await axios
      .get("https://665724a99f970b3b36c81f26.mockapi.io/api/books")
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log(err));
  };

  // Handle for Edit the details
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  // Handle for Delete the Author
  const handleDelete = async (id) => {
    await axios
      .delete(`https://665724a99f970b3b36c81f26.mockapi.io/api/books/${id}`)
      .then((res) => setdeleteAuthor(res.data))
      .catch((error) => console.log(error));
    alert("Book Deleted Successfully!!!!");
  };

  return (
    <div className="container-fluid author-main">
      <div className="row">
        <div className="col-6">
          <legend>Author Information</legend>
        </div>
      </div>
      <div className="container author-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">DOB</th>
                <th scope="col">Biography</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {author.map((element, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{element.id}</th>
                    <td>{element.author_name}</td>
                    <td>{element.author_dob}</td>
                    <td>{element.author_bio}</td>
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

export default Author;
