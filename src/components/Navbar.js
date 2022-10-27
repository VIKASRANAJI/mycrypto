import React from 'react';
import {FaCoins} from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  
  return (
    
    <Link to = '/'>
        <div className='navbar'>
           <FaCoins className='icon' />
            <h1>Crypto <span className='purple'>Hub</span></h1>
            <select>
              <option>INR</option>
              <option>USD</option>
            </select>
           
        </div>
    </Link>
  )
}

export default Navbar