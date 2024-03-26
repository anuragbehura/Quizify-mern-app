import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'

export default function Forgot() {
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        email: "",
    })
    const handleChange = (e) => {
        setinputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const sendRequest = async () => {
        const res = axios.post('http://localhost:5000/api/v1/login', {
            email: inputs.email,
            password: inputs.password
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // send http request
        sendRequest()
            .then(() => history("/login"));

    };

    
    return (
        <div className='container-login'>
            <div className='wrapper-login'>
                <form onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                    <div className='input'>
                        <input 
                        onChange={handleChange} 
                        type="email" 
                        placeholder='youremail@gmail.com' 
                        id='email' 
                        name='email' 
                        value={inputs.email} 
                        />
                        <MdEmail className='icon' />
                    </div>
                    <button type='submit'>Send Email</button>

                </form>
                <div className="register-link">
                    <p>Go back to<Link to='/login'> Login.</Link></p>
                </div>
            </div>
        </div>
    )
}
