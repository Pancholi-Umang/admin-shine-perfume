import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [Items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getData = () => {
    const baseURL = "https://listofallperfumes-default-rtdb.firebaseio.com/items.json/"
    axios.get(baseURL).then((response) => {
      setData(response.data);
      setItems(response.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  var DATAarr = [];
  for (let key in data) {
    console.log("key");
    if(key){
      DATAarr.push(Object?.assign(data[key], {id: key }));
    }
  }
console.log(DATAarr,"da");

  var ITEMSarr = [];
  for (let key in Items) {
      ITEMSarr.push(Object.assign(Items[key], { id: key }));
    }

  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = ITEMSarr.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(myFilter);
  };


  const DeleteProduct = (id) => {
    const DeleteCardData = axios.delete(
      `https://listofallperfumes-default-rtdb.firebaseio.com/items/${id}.json`
    );
    DeleteCardData?.then(() => {
      getData();
    });

  }

  // id auto add karavvani chhe product length-1
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
              {DATAarr.map((value) => {
                const { imag, name, category, price, id } = value;
                // description
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
                                <button className="border-0">
                                  <Link className="badge bg-primary ms-2 border-0 removeLink" to={`/edit-items/${id}`}>Edit</Link>
                                </button>
                                <button className="border-0 bg-danger badge" onClick={()=>DeleteProduct(id)}>Delete</button>
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
