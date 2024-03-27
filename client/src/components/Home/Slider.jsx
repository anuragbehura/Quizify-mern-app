import React from "react";
import Slider from "react-slick";
import './Slider.css';

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div  className="page2">
        <div className="slider-container">
           <div className='section'>
                   <h1>Features Of Quizify</h1>
            </div>
    <Slider {...settings}>

       <div className='content1'>
         <h3>User Authentication</h3>
         <p>Allow users to create accounts or
           log in via social media accounts to track their progress and scores.</p>
       </div>

       <div className="content1">
         <h3>Accessibility Features</h3>
         <p>Implementing features such as screen readers and adjustable text size ensures that the app is accessible to users with disabilities,
          promoting inclusivity and widening the app's user base.</p>
      </div>
      <div className='content1'>
         <h3>Timer</h3>
         <p> Adding a timer to quizzes adds excitement and challenge,
           encouraging users to answmdestions quickly and accurately.</p>
      </div>
       <div className='content1'>
         <h3>Leaderboard</h3>
        <p>Display a leaderboard showing top scores either globally or within specific categories.
           This encourages competition and engagement among users..</p>
       </div>
      <div className='content1'>
         <h3>Multi-platform Support</h3>
         <p>Develop the app to work seamlessly across multiple platforms
           such as Android, and web browsers to reach a wider audience.</p>
       </div>
       <div className='content1'>
         <h3>Leaderboards</h3>
         <p>Implement a feature that ranks and displays users' scores, fostering competitiveness and
           motivation among participants as they strive to attain top positions based on their performance.</p>
       </div>
       <div className='content1'>
         <h3>Data Security</h3>
         <p>Employ strategies to safeguard user information, incorporating encryption techniques,
           robust authentication protocols, and adherence to legal privacy standards to ensure the confidentiality and integrity of personal data.</p>
       </div>

    
     </Slider>
     </div>
     </div>
  );
}
export default CenterMode;
