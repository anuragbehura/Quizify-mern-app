import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Signup.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const notify = () => toast.success('Successfully Registered')
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setinputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const sendRequest = async () => {
        const res = axios.post('http://localhost:5000/api/v1/signup', {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        // send http request
        sendRequest()
            .then(() => history("/login"));
        notify();
    };

    return (
        <div className='container-signup'>
            <div className='wrapper-signup'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className='input'>
                        <input onChange={handleChange} type="text" name='name' id='name' placeholder='Full Name' value={inputs.name} />
                        <FaUser className='icon' />
                    </div>

                    <div className='input'>
                        <input onChange={handleChange} type="email" name='email' id='email' placeholder='youremail@gmail.com' value={inputs.email} />
                        <MdEmail className='icon' />
                    </div>

                    <div className='input'>
                        <input onChange={handleChange} type="password" name='password' id='password' placeholder='password' value={inputs.password} />
                        <AiFillLock className='icon' />
                    </div>

                    <button type='submit'>Sign Up</button>
                </form>
                <div className="register-link">
                    <p>Don't have an account?<Link to='/login'> Login here.</Link></p>
                </div>
            </div>
        </div>
    )
}
