import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from "react-icons/ai";

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      if (data.error) {
        toast.error(data.error)
      } else {
        setData({});
        toast.success('Successfully Logged in.')
        navigate('/dashboard')
        toast('Welcome!')
      }
    } catch (error) {

    }
  }


  return (
    <div className='container-login'>
      <div className='wrapper-login'>
        <form onSubmit={loginUser}>
          <h1>Login</h1>
          <div className='input'>
            <input type="email" placeholder='youremail@gmail.com' id='email' name='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <MdEmail className='icon' />
          </div>
          <div className='input'>
            <input type="password" placeholder='password' id='password' name='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <AiFillLock className='icon' />
          </div>
          <button type='submit'>Log in</button>

        </form>
        <div className="register-link">
          <p>Don't have an account?<Link to='/signup'> Register here.</Link></p>
        </div>
      </div>
    </div>
  )
}
