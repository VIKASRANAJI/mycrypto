import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Coins.css'
import { Pagination } from '@mui/material';

const Coins = (props) => {
    
    const [page , setPage] = useState(1);
    
   
    return (
        <div className='container'>
            <div>
      
                <div className='heading'>
                    <p>Rank</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Market Cap</p>
                </div>

                {props.coins.slice((page-1)*10 , (page-1)*10 + 10).map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                      
                        </Link>
                        
                    )
                })}
             
             <Pagination style = {{display: "flex" , justifyContent:"center" , marginBottom:20}}
            count={(props.coins?.length/10).toFixed(0)} 
 color="secondary" onChange={(_, value) =>{setPage(value); window.scroll(0,100);}}
/>

            </div>
           
         
 
    
              
        </div>
    )
}

export default Coins;