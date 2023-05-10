import { Link } from 'react-router-dom';
import React from 'react';

const Navebar = () => {
    return (
        <div className='navstyle'>
            <ul className='urlLinks'>
                <li>
                  <Link to='/'>Home</Link> 
                </li>
                <li>
                  <Link to='articles'>Articles</Link> 
                </li>
                <li>
                  <Link to='about'>About</Link> 
                </li>
            </ul>
        </div>
    );
}

export default Navebar;
