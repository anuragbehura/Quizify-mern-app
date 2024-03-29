// import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Navbar.css'
// import AuthContext from '../context/AuthContext';

// axios.defaults.withCredentials = true;


// const AfterNav = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const { isAuth, setIsAuth } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const refreshToken = async () => {
//     const res = await axios.get('http://localhost:5000/api/v1/refresh', {
//       withCredentials: true,
//     });
//     const data = await res.data;
//     setUser(data.message);
//     return data;
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/v1/user', {
//           withCredentials: true,
//         });
//         const data = await res.data;
//         setUser(data.message);
//       } catch (err) {
//         console.error('Error fetching user data:', err);
//         toast.error('Failed to fetch user data.');
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/v1/logout');
//       setUser(null);
//       toast.success('Logged out successfully.');
//       navigate('/login');
//     } catch (err) {
//       console.error('Error logging out:', err);
//       toast.error('Failed to log out.');
//     }
//   };

//   return (
//     <div className='header'>
//       {/* <nav>
//           <span>{ user && <h1>Welcome { user.name }</h1> }</span>
//           <button onClick={handleLogout}>Logout</button>
//         </nav> */}

//       <div className='heading'>
//         <h1>Quizify</h1>
//       </div>
//       <nav className='navigation'>
//         <ul>
//           <li><Link to='/profile'>{user && <h1>{user.name}</h1>}</Link></li>
//           <li><Link onClick={handleLogout}>Logout</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default AfterNav;