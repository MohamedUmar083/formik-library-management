import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ setId }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [deleteUser, setdeleteUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, [deleteUser]);

  const fetchData = async () => {
    await axios
      .get("https://665724a99f970b3b36c81f26.mockapi.io/api/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };

  // Handle for Edit the details
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  // Handle for Delete the User
  const handleDelete = async (id) => {
    await axios
      .delete(`https://665724a99f970b3b36c81f26.mockapi.io/api/users/${id}`)
      .then((res) => setdeleteUser(res.data))
      .catch((error) => console.log(error));
    alert("User Deleted Successfully!!!!");
  };

  return (
    <div className="container-fluid user-main">
      <div className="row">
        <div className="col-6">
          <legend>User Information</legend>
        </div>
        <div className="col-6"></div>
      </div>
      <div className="container user-body">
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Company</th>
                <th scope="col" colSpan={2}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((element, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{element.id}</th>
                    <td>{element.name}</td>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td>{element.address.street}</td>
                    <td>{element.company.name}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          handleEdit(element.id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
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

export default Users;
