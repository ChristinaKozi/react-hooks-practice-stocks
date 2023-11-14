import React from "react";

function Stock({ stock, onHandle }) {
  const {id, ticker, name, type, price} = stock

  function handleClick(){
    onHandle({id,name,price,ticker,type})
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
