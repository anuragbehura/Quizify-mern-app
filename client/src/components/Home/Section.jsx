import React from 'react';
import image1 from '../../assets/student.jpg';
import image2 from '../../assets/teacher.jpg';
import './Section.css';



const Section = () => {
    return (
        <div className='page2'>

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