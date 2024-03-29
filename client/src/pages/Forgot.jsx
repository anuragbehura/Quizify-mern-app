import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Forgot() {
    // Notify function
    const notifyEmail = () => {
        try {
            toast.success('➡️ Check your email for reset password link');
        } catch (error) {
            console.error('Error displaying toast notification:', error);
        }
    };

    const history = useNavigate();

    const [inputs, setInputs] = useState({ email: '' });

    const handleChange = (e) => {
        try {
            setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        } catch (error) {
            console.error('Error updating inputs state:', error);
        }
    };

    const sendRequest = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/v1/forgot-password', { email: inputs.email });
            return res.data;
        } catch (error) {
            console.error('Error sending forgot password request:', error);
            throw error; // Re-throw the error for further handling
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await sendRequest();
            notifyEmail();
            history('/login');
        } catch (error) {
            console.error('Error during forgot password process:', error);
            // You can handle the error here, e.g., display an error message to the user
        }
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
