import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from "react-icons/ai";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//coustom toast messaage


export default function Login() {
  // toast message functions
  const notify = () => toast.success('Logged in successfully', { autoClose:2000 })
  const notifyForgotPassword = () => toast.info('To reset your password write your email and click on send email button', {autoClose: 9000})
  const notifyUser = () => toast('👨 Welcome Bhai!', { delay: 5000, autoClose: 6000 })

  // navigate init
  const history = useNavigate();
  const [inputs, setinputs] = useState({  // using states over here
    email: "",
    password: ""
  })
  const handleChange = (e) => { // handlling inputs
    setinputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  

  // using POST request to pushing the data to backend
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
      .then(() => history("/user"));

    notify(); 
    notifyUser();
  };
  


  return (
    <div className='container-login'>
      <div className='wrapper-login'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input'>
            <input onChange={handleChange} type="email" placeholder='youremail@gmail.com' id='email' name='email' value={inputs.email} />
            <MdEmail className='icon' />
          </div>
          <div className='input'>
            <input onChange={handleChange} type="password" placeholder='password' id='password' name='password' value={inputs.password} />
            <AiFillLock className='icon' />
          </div>
          <button type='submit'>Log in</button>

        </form>
        <div className="register-link">
          <Link onClick={notifyForgotPassword} to="/forgotPassword">Forgot Password</Link>
          <p>Don't have an account?<Link to='/signup'> Register here.</Link></p>
        </div>
      </div>
    </div>
  )
}
