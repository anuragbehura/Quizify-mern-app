import React from 'react';
import image from '../../assets/pic1.png';




const Main = () => {
    return (
        <div className='page1'>
            <div className='main'>
                <div className='content'>
                    <h2>Wisdom in Waves:Dive into Quizzes</h2>
                    <p>Explore the realm of knowledge at Quizify.</p>
                    <p>Quizzes that entertain, challenge, and enlighten</p>
                    <button type='button'>Get Started</button>
                </div>
                <div className='image'>
                    <img src={image} alt='front pic' height={400} />
                </div>
            </div>
 
        </div>







    );
}
export default Main;