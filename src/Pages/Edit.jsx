import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
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

  useEffect(() => {
    formik.setValues(edit);
  }, [edit]);

  const validationSchema = Yup.object().shape({
    book_id: Yup.string()
      .matches(/^[a-zA-Z0-9]{8}$/, "Invalid Book ID (A1B2C3D4)")
      .required("Book Id Should not be Empty"),
    book_title: Yup.string().required("Book Title Should not be Empty"),
    book_isbn_number: Yup.string()
      .matches(
        /^\d{1,5}[- ]\d{1,7}[- ]\d{1,7}[- ][\dX]$/,
        "Invalid ISBN-10 Format (3-16-148410-9 / 3 16 148410 9)"
      )
      .required("Book ISBN Number Should not be Empty"),
    book_published_date: Yup.string().required(
      "Book's Published Date Should not be Empty"
    ),
    author_name: Yup.string().required("Author Name Should not be Empty"),
  });

  const formik = useFormik({
    initialValues: {
      book_id: "",
      book_title: "",
      book_isbn_number: "",
      book_published_date: "",
      author_name: "",
      author_dob: "",
      author_bio: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(
          `https://665724a99f970b3b36c81f26.mockapi.io/api/books/${id}`,
          values
        )
        .then((res) => res.data)
        .catch((err) => console.log(err));

      navigate("/books");
      alert("Book Details Editted Successfully!!!!!");
    },
  });
  const fetchData = async () => {
    await axios
      .get(`https://665724a99f970b3b36c81f26.mockapi.io/api/books/${id}`)
      .then((res) => setEdit(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid edit-main">
      <div className="row">
        <div className="col-6">
          <legend>Edit Information</legend>
        </div>
      </div>
      <div className="container edit-main">
        {/* Form for the Specific id to edit the details */}
        <form className="row g-3" onSubmit={formik.handleSubmit}>
          <legend>BOOK INFORMATION</legend>

          <div className="col-6 col-md-4">
            <label className="form-label">Book ID :</label>
            <input
              type="text"
              className="form-control"
              name="book_id"
              value={formik.values.book_id}
              onChange={formik.handleChange}
              placeholder="A1B2C3D4"
            />
            <div className="text-danger">{formik.errors.book_id}</div>
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Book Title :</label>
            <input
              type="text"
              className="form-control"
              name="book_title"
              value={formik.values.book_title}
              onChange={formik.handleChange}
            />
            <div className="text-danger">{formik.errors.book_title}</div>
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Published Date :</label>
            <input
              type="date"
              className="form-control"
              name="book_published_date"
              value={formik.values.book_published_date}
              onChange={formik.handleChange}
            />
            <div className="text-danger">
              {formik.errors.book_published_date}
            </div>
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">ISBN :</label>
            <input
              type="text"
              className="form-control"
              name="book_isbn_number"
              value={formik.values.book_isbn_number}
              onChange={formik.handleChange}
              placeholder="3-16-148410-X / 3 16 148410 X"
            />
            <div className="text-danger">{formik.errors.book_isbn_number}</div>
          </div>

          <hr />
          <legend>AUTHOR DETAILS</legend>
          <div className="col-6 col-md-4">
            <label className="form-label">Author Name :</label>
            <input
              type="text"
              className="form-control"
              name="author_name"
              value={formik.values.author_name}
              onChange={formik.handleChange}
            />
            <div className="text-danger">{formik.errors.author_name}</div>
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Author DOB :</label>
            <input
              type="date"
              className="form-control"
              name="author_dob"
              value={formik.values.author_dob}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label">Author Bio</label>
            <input
              type="text"
              className="form-control"
              name="author_bio"
              value={formik.values.author_bio}
              onChange={formik.handleChange}
            />
          </div>

          <hr />
          {/* Buttons for Update and Go back */}
          <div className="d-grid gap-2 d-md-flex">
            <button type="submit" className="btn btn-success">
              Update
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/books")}
            >
              Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
