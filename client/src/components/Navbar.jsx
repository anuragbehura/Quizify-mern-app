import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

axios.defaults.withCredentials = true;

const Navbar = () => {

  return (
    <div className="header">
      <div className='heading'>
        <h1>Quizify</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
          <li><Link to='/login'>Log in</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
