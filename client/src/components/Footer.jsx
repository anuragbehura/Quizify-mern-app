import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import './Footer.css';



const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col_1'>
                        <h1>Quizify</h1>
                        <p>Engage your intellect with our interactive quizzes,
                            spanning diverse topics and difficulty levels. Challenge yourself, 
                            track your progress, and compete for the top spot on our leaderboard!</p>
                        <FaGithub className='icon' />
                        <FaLinkedin className='icon' />

                    </div>
                    <div className='col_2'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li className='footer_item'>
                                <a className='link' href='#'>Services</a>
                            </li>
                            <li className='footer_item'>
                                <a className='link' href='#'>About Us</a>
                            </li>
                            <li className='footer_item'>
                                <a className='link' href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col_3'>
                        <h3>Contact Info</h3>
                        <p><FaPhoneAlt className='' /> +91 9438132541</p>
                        <p><MdEmail className='' /> behura960@gmail.com</p>
                        <p> <MdPlace className='' /> Odisha,India</p>
                    </div>

                </div>


            </div>
            <hr></hr>
            <div className='copyright'>
                <p>Copyright &#169; 2024 Quizify. All rights reserved.</p>
            </div>

        </div>

    );
}
export default Footer;