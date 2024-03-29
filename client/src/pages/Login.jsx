import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';

axios.defaults.withCredentials = true;

export default function Login() {
  const notifyForgotPassword = () => toast.info('To reset your password write your email and click on send email button', { autoClose: 9000 })
  const history = useNavigate();

  const { setIsAuth } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/login', {
        email: inputs.email,
        password: inputs.password,
      });
      // console.log(res.data); // Handle response appropriately
      toast.success('Logged in successfully', { autoClose: 2000 });
      setIsAuth(true);
      history('/home');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to login. Please try again.', { autoClose: 2000 });
    }
  };

  return (
    <div className="container-login">
      <div className="wrapper-login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input">
            <input
              onChange={handleChange}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              value={inputs.email}
            />
            <MdEmail className="icon" />
          </div>
          <div className="input">
            <input
              onChange={handleChange}
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={inputs.password}
            />
            <AiFillLock className="icon" />
          </div>
          <button type="submit">Log in</button>
        </form>
        <div className="register-link">
          <Link onClick={notifyForgotPassword} to="/forgotPassword">Forgot Password</Link>
          <p>
            Don't have an account?
            <Link to="/signup"> Register here.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
