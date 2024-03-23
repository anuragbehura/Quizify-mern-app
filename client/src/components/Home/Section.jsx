import React from 'react';
import image1 from '../../assets/student.jpg';
import image2 from '../../assets/teacher.jpg';



const Section = () => {
    return (
        <div className='page2'>
            {/* <div className='section'>
                <h1>Features Of Quizify</h1>
            </div> */}
            {/* <div className='features'>
                <div className='card_content'>
                    
                    <div className='content1'>
                        <h3>User Authentication</h3>
                        <p>Allow users to create accounts or
                            log in via social media accounts to track their progress and scores.</p>
                    </div>
                    <div className='content1'>
                        <h3>Accessibility Features</h3>
                        <p>Implementing features such as screen readers and adjustable text size ensures that the app is accessible to users with disabilities,
                            promoting inclusivity and widening the app's user base.</p>
                    </div>
                    <div className='content1'>
                        <h3>Timer</h3>
                        <p> Adding a timer to quizzes adds excitement and challenge,
                            encouraging users to answer questions quickly and accurately.</p>
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

                </div>

            </div> */}

            <div className='section2'>
                <div className='process'>
                    <h1>Indivisuals Employing</h1>
                </div>
                <div className='user_content'>
                    <div className='user'>
                        <div className='user_image'>
                            <img src={image1} alt="student" height={150} width={150} />
                        </div>
                        <h2>Students</h2>
                        <p>Quizify offer students an interactive platform for self-assessment, allowing them to review course material, practice problem-solving,
                            and receive immediate feedback on their performance.</p>
                    </div>
                    <div className='user'>
                        <div className='user_image'>
                            <img src={image2} alt="teacher" height={150} width={150} />
                        </div>
                        <h2>Teachers</h2>
                        <p>Quizify provide teachers with a versatile tool for creating engaging assessments,
                            monitoring student progress, and identifying areas for further instruction.</p>
                    </div>
                </div>


            </div>

        </div>

    );
}


export default Section;