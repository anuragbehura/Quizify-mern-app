import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

const AfterNav = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/user',{
          withCredentials: true,
        });
        const data = await res.data;
        setUser(data.message);
      } catch (err) {
        console.error('Error fetching user data:', err);
        toast.error('Failed to fetch user data.');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout', null);
      setUser(null);
      toast.success('Logged out successfully.');
      navigate('/login');
    } catch (err) {
      console.error('Error logging out:', err);
      toast.error('Failed to log out.');
    }
  };

  return (
    <div>
        <nav>
          <span>{ user && <h1>Welcome { user.name }</h1> }</span>
          <button onClick={handleLogout}>Logout</button>
        </nav>
    </div>
  );
};

export default AfterNav;