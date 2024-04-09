import React from 'react'
import Footer from '../components/Footer'
import AfterNav from '../components/Home/AfterNav'

// import AfterNav from '../components/AfterNav'
import Main from '../components/Home/HomeMain'
import '../components/Home/HomeMain.css'
import './CSS/Home.css'


function Home() {
  return (
    <div className='Home'>
      <div className='Home-nav'>
        <AfterNav />
      </div>
      <div className='Home-main'>
        <Main />
      </div>
      <div className='Home-footer'>
        <Footer />
      </div>

    </div>
  )
}

export default Home








// import axios from 'axios';
// import {React, useEffect, useState } from 'react'

// axios.defaults.withCredentials = true;

// const Dashboard = () => {
//   const [user, setUser] = useState();

//   const sendRequest = async () =>  {
//     const res = await axios.get('http://localhost:5000/api/v1/user', {
//       withCredentials: true
//     }).catch(err => console.log(err));
//     const data = await res.data;
//     // console.log(data);
//     return data;
//   }
//   useEffect(() => {
//     sendRequest().then((data)=> setUser(data.user))
//   }, []);
//   return (
//     <div>
//       {user && <h1>{user.name}</h1>}
//     </div>
//   )
// }

// export default Dashboard;