import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct, searchProduct, fetchSingleRecord, deleteRecord } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getAllProduct = useSelector((state) => state.item.products);
  const productSearchItem = useSelector((state) => state.item.search);

  var SEARCH_ARR = [];
  for (let key in productSearchItem) {
    if (key) {
      SEARCH_ARR.push(Object?.assign(productSearchItem[key], { id: key }));
    }
  }

  var ITEMSarr = [];
  for (let key in getAllProduct) {
    ITEMSarr.push(Object.assign(getAllProduct[key], { id: key }));
  }

  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = ITEMSarr.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    });
    dispatch(searchProduct(myFilter));
  };

  const DeleteProduct = (id) => {
        const filteredData = ITEMSarr.filter((item) => item.id !== id);
        dispatch(deleteRecord(filteredData,id)) 
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    // all product ne atla mate call kari chhe km k getProduct() thi badhi product male chhe
    if (ITEMSarr.length === 0) {
      dispatch(getProduct());
    }
    dispatch(searchProduct(ITEMSarr));
  }, [getAllProduct]);

  const getEditToClick = (id) => {
    dispatch(fetchSingleRecord(id));
    navigate(`/edit-items/${id}`);
  };
console.log(ITEMSarr)
  return (
    <div className="container-fluid">
      <div className="col-md-10 container px-1 mt-2">
        <input
          type="text"
          className="setWidthWithMedia form-control"
          placeholder="Search Here..."
          onChange={changeHandler}
        />
      </div>
      <section>
        {loading ? (
          <div className="containes">
            <div className="item1-1"></div>
            <div className="item2-2"></div>
            <div className="item3-3"></div>
            <div className="item4-4"></div>
            <div className="item5-5"></div>
          </div>
        ) : (
          <div className="text-center container py-5">
            <h4 className="mt-2 mb-5">
              <strong>All Products</strong>
            </h4>
            <div className="row">
              {SEARCH_ARR?.map((value) => {
                const { imag, name, category, price, id } = value;
                return (
                  <div
                    className="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4"
                    key={id}
                  >
                    <div className="card">
                      <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light">
                        <img src={imag} className="w-100" />
                        <div>
                          <div className="mask">
                            <div className="d-flex justify-content-start align-items-end h-100">
                              <h5 className="mt-1">
                                <button
                                  className="badge bg-primary mx-2 border-0 removeLink"
                                  onClick={() => getEditToClick(id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="border-0 bg-danger badge"
                                  onClick={() => DeleteProduct(id)}
                                >
                                  Delete
                                </button>
                              </h5>
                            </div>
                          </div>
                          <div className="hover-overlay">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.15)",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title mb-3">{name}</h5>
                        <p>{category}</p>
                        <h6 className="mb-3">{price}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
