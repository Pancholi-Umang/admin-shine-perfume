import React from "react";

const Account = () => {
  return (
    <div className="container-fluid">
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-light rounded-3 p-3 mb-4"
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">User</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://i.pinimg.com/736x/f7/e2/a9/f7e2a99119c1999a16ae83c4fca1865d.jpg"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">Shine Perfume</h5>
                  <div className="d-flex justify-content-center mb-2"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Shine Perfume</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">shineperfume.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">0261 2568363</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(+91) 8690012345</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        100, Marvella corridor,vesu SURAT-395006
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">https://shineperfume.com</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-github fa-lg"></i>{" "}
                        {/* style="color: #333333;" */}
                        <p className="mb-0">shine perfume</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-twitter fa-lg"></i>{" "}
                        {/*style="color: #55acee;"*/}
                        <p className="mb-0">shine perfume</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg"></i>{" "}
                        {/*style="color: #ac2bac;"*/}
                        <p className="mb-0">shine perfume</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-facebook-f fa-lg"></i>{" "}
                        {/*style="color: #3b5998;"*/}
                        <p className="mb-0">shine perfume</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
