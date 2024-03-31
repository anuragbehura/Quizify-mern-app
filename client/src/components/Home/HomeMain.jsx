// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Navbar.css'
// import UserContext from '../../context/UserContext';
// // import AuthContext from '../../context/AuthContext';

// axios.defaults.withCredentials = true;

// function Main() {
//     const { user, setUser } = useContext(UserContext)
//     // const { user, setUser } = useState();
//     //   const { isAuth, setIsAuth } = useContext(AuthContext);
//     // const navigate = useNavigate();


//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const res = await axios.get('http://localhost:5000/api/v1/user', {
//                     withCredentials: true,
//                 });
//                 const data = await res.data;
//                 setUser(data.message);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//                 toast.error('Failed to fetch user data.');
//             }
//         };

//         fetchUserData();
//     }, []);

//     if (!user) return <div>Please Login</div>
    
//     return <div>Welcome {user.name}</div>
// }

// export default Main


import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import UserContext from '../../context/UserContext';
import { Link } from 'react-router-dom';
=======
import '../Navbar.css'
import './Main.css'
>>>>>>> 87ceeb754586b68dfe064b03db534079ba76de45
import AuthContext from '../../context/AuthContext';
>>>>>>> 0b46f45720ee01155c9e2e3595af66dcc847b64e

axios.defaults.withCredentials = true;

function Main() {
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/user');
                const data = res.data;
                setUser(data.message);
            } catch (error) {
                console.error('Error fetching user data:', error);
                toast.error('Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [setUser]);

    if (loading) return <div>Loading...</div>;
    if (!user) return toast.info('Please Login first!')
    
    return (
<<<<<<< HEAD
    <div className='MainContsiner'>
        <div className='userConatiner'>
            <h1>Welcome</h1>
            <Link to='/Dashboard'><h2>{user.name}</h2></Link>
=======
        // <span><Link to='/dashboard'>{user && <h1>Welcome {user.name}</h1>}</Link></span>
        <div className='main-page'>
            <span><Link to='/dashboard'>{user && <h1>Welcome {user.name}</h1>}</Link></span>
            <div className='container'>
                <div className='main-page-content'>
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
>>>>>>> 0b46f45720ee01155c9e2e3595af66dcc847b64e
        </div>
    </div>
    );
}

export default Main;







