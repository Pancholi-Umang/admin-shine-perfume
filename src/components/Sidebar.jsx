import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const myFunction = () => {
    if (
      window?.getComputedStyle(document.getElementById("myCheck"))?.display !==
      "none"
    ) {
      document.getElementById("myCheck").click();
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg d-block navbar-light">
        <div className="container-fluid">
          <button
            type="button"
            id="myCheck"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            className="border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start Canvas-Width"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Shine Perfumes
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-center">
          <Link onClick={myFunction} className="button-86" to="/" role="button">
            <i className="fa-solid fa-chess-board"></i> &nbsp; Dashboard
          </Link>
          <Link
            onClick={myFunction}
            className="button-86"
            to="/userorders"
            role="button"
          >
            <i className="fa-solid fa-truck"></i> &nbsp; Orders
          </Link>
          <Link
            onClick={myFunction}
            className="button-86"
            to="/userproducts"
            role="button"
          >
            <i className="fa-solid fa-bag-shopping"></i> &nbsp; Products
          </Link>
          <Link
            onClick={myFunction}
            className="button-86"
            to="/admin-account"
            role="button"
          >
            <i className="fa-solid fa-user"></i> &nbsp; My accounts
          </Link>
          <Link
            onClick={myFunction}
            className="button-86"
            to="/alluseraccounts"
            role="button"
          >
            <i className="fa-solid fa-address-book"></i> &nbsp; User accounts
          </Link>
          <Link
            onClick={myFunction}
            className="button-86"
            to="/add-product"
            role="button"
          >
            <i className="fa-solid fa-add"></i> &nbsp; Add Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
