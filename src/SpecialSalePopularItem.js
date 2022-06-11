import { useState } from "react";
export function SpecialSalePopularItem({ name, price1, price2,state,setState}) {
  const styles={top:"0.5rem",
    right: "0.5rem"}
    const [disable,setDisable]=useState("false");
    function clickHandle(){
      setState(state+1);
      setDisable("true");
    }
  return (
    <div className="col mb-5">
      <div className="card h-100">
       {name === "Popular" ? null: <div style={styles} class="badge bg-dark text-white position-absolute">Sale</div>}
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
            <h5 className="fw-bolder">{name} Item</h5>
            {name === "Sale" ? null : <div className="d-flex justify-content-center small text-warning mb-2">
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
              <div className="bi-star-fill"></div>
            </div>}
            {name === "Popular" ? null : <span className="text-muted text-decoration-line-through">{price1}</span>}
            {price2}
          </div>
        </div>
       {disable==="false"? <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button onClick={clickHandle} className="btn btn-outline-dark mt-auto">Add to cart</button>
            </div>
        </div>:null}
      </div>
    </div>
  );
}
