import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="sidebar border border-right col-md-3 col-lg-2 bg-body-tertiary flex-grow-1"
      data-bs-theme="dark"
    >
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Library
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto sidebar-main">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
              >
                <span className="bi bi-speedometer2 icon"></span>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/create"
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-plus-circle icon"></i>
                Add Book
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/books"
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-info-circle icon"></i>
                Book Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/author"
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-person-lines-fill icon"></i>
                Author Info
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
