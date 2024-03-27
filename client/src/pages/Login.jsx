import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import './CSS/Login.css'
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from "react-icons/ai";

export default function Login() {
  const history = useNavigate();
  const [inputs, setinputs] = useState({
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
    const res = axios.post('http://localhost:5000/api/login', {
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
      .then(() => history("/user"));
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
          <p>Don't have an account?<Link to='/signup'> Register here.</Link></p>
        </div>
      </div>
    </div>
  )
}
