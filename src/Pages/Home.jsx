import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setDetail }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const handleDetail = (id) => {
    setDetail(id);
    navigate(`/detail/${id}`);
  };

  const fetchData = async () => {
    await axios
      .get("https://665724a99f970b3b36c81f26.mockapi.io/api/books")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid head-home">
      <div className="row">
        <div className="col-6">
          <legend>Dashboard</legend>
        </div>
      </div>
      <div className="container main-home">
        <h3>All Books</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {user.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-header">
                      Author : {element.author_name}
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Book Title : {element.book_title}
                      </p>
                      <p className="card-text">
                        Published Date : {element.book_published_date}
                      </p>
                      <p className="card-text">
                        ISBN : {element.book_isbn_number}
                      </p>
                    </div>
                    <div className="card-footer">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          handleDetail(element.id);
                        }}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
