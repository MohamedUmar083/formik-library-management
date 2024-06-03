import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";
import Footer from "./Components/Footer";
import Users from "./Pages/Users";
import Details from "./Pages/Details";
import Sidebar from "./Components/Sidebar";
import Books from "./Pages/Books";
import Author from "./Pages/Author";

const App = () => {
  const [id, setId] = useState(1);
  const [detail, setDetail] = useState(1);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <div className="row h-100">
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route path="/" element={<Home setDetail={setDetail} />} />
              <Route path="/books" element={<Books setId={setId} />} />
              <Route path="/author" element={<Author setId={setId} />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit id={id} />} />
              <Route
                path="/detail/:id"
                element={<Details detail={detail} setId={setId} />}
              />
            </Routes>
          </main>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

// Day-30 01:10:00
