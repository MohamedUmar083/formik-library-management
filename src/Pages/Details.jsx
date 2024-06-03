import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ detail, setId }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    id: "",
    book_id: "",
    book_title: "",
    book_isbn_number: "",
    book_published_date: "",
    author_name: "",
    author_dob: "",
    author_bio: "",
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(`https://665724a99f970b3b36c81f26.mockapi.io/api/books/${detail}`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container-fluid details-head">
      <div className="row">
        <div className="col-6">
          <legend>Deatails of {info.book_title}</legend>
        </div>
      </div>
      <div className="container details-main">
        <form className="row g-3" onSubmit={() => handleSubmit(info.id)}>
          <legend>BOOK INFORMATION</legend>
          <div className="col-6 col-md-4">
            <label className="form-label">ID :</label>
            <input
              type="text"
              className="form-control"
              name="id"
              placeholder={info.id}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Book ID :</label>
            <input
              type="text"
              className="form-control"
              name="book_id"
              placeholder={info.book_id}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Book Title :</label>
            <input
              type="text"
              className="form-control"
              name="book_title"
              placeholder={info.book_title}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Published Date :</label>
            <input
              type="text"
              className="form-control"
              name="book_published_date"
              placeholder={info.book_published_date}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">ISBN :</label>
            <input
              type="text"
              className="form-control"
              name="book_isbn_number"
              placeholder={info.book_isbn_number}
              readOnly
            />
          </div>

          <hr />
          <legend>AUTHOR DETAILS</legend>
          <div className="col-6 col-md-4">
            <label className="form-label">Author Name :</label>
            <input
              type="text"
              className="form-control"
              name="author_name"
              placeholder={info.author_name}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Author DOB :</label>
            <input
              type="text"
              className="form-control"
              name="author_dob"
              placeholder={info.author_dob}
              readOnly
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Author Bio</label>
            <input
              type="text"
              className="form-control"
              name="author_bio"
              placeholder={info.author_bio}
              readOnly
            />
          </div>
          <hr />
          <div className="d-grid gap-2 d-md-flex">
            <button type="submit" className="btn btn-warning">
              Edit
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
