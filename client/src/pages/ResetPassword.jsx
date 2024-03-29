import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import './CSS/Login.css'
import { AiFillLock } from "react-icons/ai";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

axios.defaults.withCredentials = true;

export default function ResetPassword() {
    // Notify function
    const notifyEmail = () => toast.success('Password Successfilly Updated')

    const { token } = useParams();
    const history = useNavigate();
    const [inputs, setinputs] = useState({
        password: "",
    })
    const handleChange = (e) => {
        setinputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const sendRequest = async () => {
        const res = axios.post('http://localhost:5000/api/v1/reset-password/'+token, {
            password: inputs.password,
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
                    <h1>Reset Password</h1>
                    <div className='input'>
                        <input 
                        onChange={handleChange} 
                        type="password" 
                        placeholder='new password' 
                        id='password' 
                        name='password' 
                        value={inputs.password} 
                        />
                        <AiFillLock className='icon' />
                    </div>
                    <button type='submit'>Update</button>

                </form>
                <div className="register-link">
                    <p>Go back to<Link to='/login'> Login.</Link></p>
                </div>
            </div>
        </div>
    )
}
