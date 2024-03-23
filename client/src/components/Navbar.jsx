import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="header">
            <div className='heading'>
                <h1>Quizify</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to='/'>Enter Code</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                    <li><Link to='/login'>Log in</Link></li>
                </ul>
            </nav>   
        </div>
    );
}
export default Navbar;
