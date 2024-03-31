import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AfterNav.css'


axios.defaults.withCredentials = true;

const Navbar = () => {

    //   const { user, setUser } = useState(null);
    //   const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    // const refreshToken = async () => {
    //   const res = await axios.get('http://localhost:5000/api/v1/refresh', {
    //     withCredentials: true,
    //   });
    //   const data = await res.data;
    //   setUser(data.message);
    //   return data;
    // };

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/api/v1/logout');
            //   setUser(null);
            toast.success('Logged out successfully.');
            navigate('/login');
        } catch (err) {
            console.error('Error logging out:', err);
            toast.error('Failed to log out.');
        }
    };



    return (
        <div className="navbar">
            <div className='nav_heading'>
                <h1>Quizify</h1>
            </div>
            <nav className="nav_content">
                <ul>
                    <li class="button"><a href="#">Create Quiz</a></li>
                    <li><Link to='/profile'>Dashboard</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                    
                </ul>
                
            </nav>
        </div>
    );
}
export default Navbar;
