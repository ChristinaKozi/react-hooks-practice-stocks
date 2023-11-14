import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks,onAddStock, sortBy,filterBy }) {

  const stockCollumn = stocks
  .filter(stock=> filterBy === "" || stock.type.toLowerCase() === filterBy.toLowerCase())
  .sort((stock_one, stock_two) =>{
    if (sortBy === "Alphabetically"){
      const nameA = stock_one.name.toUpperCase()
      const nameB = stock_two.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      } else {
        return stock_one.price - stock_two.price
      }
    }
    return 0
  })
  .map(stock => <Stock key={stock.id} stock={stock} onHandle={onAddStock}/>)
                

  return (
    <div>
      <h2>Stocks</h2> 
      {stockCollumn}
    </div>
  );
}

export default StockContainer;
