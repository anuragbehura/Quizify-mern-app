import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Navbar.css'
import './Main.css'
import AuthContext from '../../context/AuthContext';

axios.defaults.withCredentials = true;

function Main() {
    const { user, setUser } = useState();
    //   const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/user', {
                    withCredentials: true,
                });
                const data = await res.data;
                setUser(data.message);
            } catch (error) {
                console.error('Error fetching user data:', error);
                toast.error('Failed to fetch user data.');
            }
        };

        fetchUserData();
    }, []);

    return (
        // <span><Link to='/dashboard'>{user && <h1>Welcome {user.name}</h1>}</Link></span>
        <div className='main-page'>
            <span><Link to='/dashboard'>{user && <h1>Welcome {user.name}</h1>}</Link></span>
            <div className='container'>
                <div className='content'>
                    <div className='input'>
                        <input
                         type="enter-code"
                         placeholder="Enter a code to join"
                         id="enter-code"
                         name="enter-code"/>
                        <button type="submit">Join</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main