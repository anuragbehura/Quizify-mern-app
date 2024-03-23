import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Signup.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

export default function Signup() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })


    const signupUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data
        try {
            const { data } = await axios.post('/signup', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({})
                toast.success('Successfully Registered.')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container-signup'>
        <div className='wrapper-signup'>
            <form onSubmit={signupUser}>
                <h1>Register</h1>
                <div className='input'>
                    <input type="text" name='name' id='name' placeholder='Full Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    <FaUser className='icon' />
                </div>

                <div className='input'>
                    <input type="email" name='email' id='email' placeholder='youremail@gmail.com' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <MdEmail className='icon' />
                </div>
                

                <div className='input'>
                    <input type="password" name='password' id='password' placeholder='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                    <AiFillLock className='icon' />
                </div>

                <button onSubmit={signupUser} type='submit'>Sign Up</button>
            </form>
            <div className="register-link">
                <p>Don't have an account?<Link to='/login'> Login here.</Link></p>
            </div>
        </div>
        </div>
    )
}
