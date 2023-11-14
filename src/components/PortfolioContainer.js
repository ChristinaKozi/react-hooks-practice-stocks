import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, onRemoveStock }) {

  const myMappedStocks = myStocks.map(stock => <Stock key={stock.id} stock={stock} onHandle={onRemoveStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {myMappedStocks}
    </div>
  );
}

export default PortfolioContainer;
