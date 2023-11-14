import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState('')
  const [filterBy, setFilterBy] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
      .then(r=>r.json())
      .then(data=>setStocks(data))
  },[])

  function handleAddStock(stockToAdd){
    const boughtStocks = [...myStocks, stockToAdd]
    setMyStocks(boughtStocks)
  }

  function handleRemoveStock(stockToRemove) {
    const currentMyStocks = myStocks.filter(stock => stock.id !== stockToRemove.id)
    setMyStocks(currentMyStocks)
  }

  function handleToggleSort(e){
    setSortBy(e.target.value)
  }

  function handleFilter(e){
    setFilterBy(e.target.value)
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} handleToggleSort={handleToggleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={handleAddStock} sortBy={sortBy} filterBy={filterBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
