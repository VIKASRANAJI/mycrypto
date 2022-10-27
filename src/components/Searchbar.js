import React from 'react'
import './Coins.css'
const Searchbar = () => {
  return (
    <div className='barcontainer'>
      <div className='searchcontainer'>
      <h1 className='H1'>Cryptocurrency Prices by Market Cap</h1>
      </div>
      <form>
      <input id='input'   type='text' placeholder='Search For a Cryptocurreny' />
      <button type='submit' id='btnn'><i className='fa fa-search'></i></button>
      </form>
    </div>
    
     
    
  )
}

export default Searchbar;