import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Forgot() {
    // Notify function
    const notifyEmail = () => toast.success('➡️ Check your email for reset password link')

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
        const res = axios.post('http://localhost:5000/api/v1/forgot-password', {
            email: inputs.email,
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // send http request
        sendRequest()
            .then(() => {
                notifyEmail();
                history("/login");
            })

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
