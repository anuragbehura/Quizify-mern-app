import React from 'react'
import AfterNav from '../components/Home/AfterNav'
import './CSS/CreateQuiz.css'
import Footer from '../components/Footer'
import { TiTick } from "react-icons/ti";
import { ImBin } from "react-icons/im";

function CreateQuiz() {
  return (

    <div className='CreateQuiz'>
      <div className='createquiz-navbar'>
        <AfterNav />
      </div>
      <div className='createquiz-container'>
        <div className='createquiz-content'>
          <div className='createquiz-ques'>
            <div className="input-container">
              <input type="text" placeholder="Enter your question" id="enter-ques" name="enter-ques" />
            </div>
          </div>
          <div className='createquiz-options'>
            <div className="input-container">
              <input type="text" placeholder="Enter your answer" id="enter-answer1" name="enter-answer" />
              <TiTick className="tick-icon" />
              <ImBin className="bin-icon" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Enter your answer" id="enter-answer2" name="enter-answer" />
              <TiTick className="tick-icon" />
              <ImBin className="bin-icon" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Enter your answer" id="enter-answer3" name="enter-answer" />
              <TiTick className="tick-icon" />
              <ImBin className="bin-icon" />
            </div>
            <div className="input-container">
              <input type="text" placeholder="Enter your answer" id="enter-answer4" name="enter-answer" />
              <TiTick className="tick-icon" />
              <ImBin className="bin-icon" />
            </div>
          </div>
        </div>
        <div className='createquiz-button'>
          <button type='save'>Save Question</button>
        </div>
      </div>
      <div className='createquiz-footer'>
        <Footer />
      </div>

    </div>
  )
}



export default CreateQuiz




// this is a the functional code of this program


// import React, { useState } from 'react';
// import AfterNav from '../components/Home/AfterNav';
// import Footer from '../components/Footer';
// import { TiTick } from 'react-icons/ti';
// import { ImBin } from 'react-icons/im';
// import './CSS/CreateQuiz.css';

// function CreateQuiz() {
//   // State to manage question and answer inputs
//   const [question, setQuestion] = useState('');
//   const [options, setOptions] = useState(['', '', '', '']);

//   // Function to handle changes in question input
//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   // Function to handle changes in answer option input
//   const handleOptionChange = (index, e) => {
//     const newOptions = [...options];
//     newOptions[index] = e.target.value;
//     setOptions(newOptions);
//   };

//   // Function to add a new answer option
//   const addOption = () => {
//     if (options.length < 6) {
//       setOptions([...options, '']);
//     }
//   };

//   // Function to remove an answer option
//   const removeOption = (index) => {
//     if (options.length > 2) {
//       const newOptions = [...options];
//       newOptions.splice(index, 1);
//       setOptions(newOptions);
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission logic, e.g., sending data to a backend server
//     console.log('Submitted:', { question, options });
//     // Reset form fields after submission
//     setQuestion('');
//     setOptions(['', '', '', '']);
//   };

//   return (
//     <div className="CreateQuiz">
//       <div className="createquiz-navbar">
//         <AfterNav />
//       </div>
//       <div className="createquiz-container">
//         <form onSubmit={handleSubmit}>
//           <div className="createquiz-content">
//             <div className="createquiz-ques">
//               <div className="input-container">
//                 <input
//                   type="text"
//                   placeholder="Enter your question"
//                   value={question}
//                   onChange={handleQuestionChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="createquiz-options">
//               {options.map((option, index) => (
//                 <div className="input-container" key={index}>
//                   <input
//                     type="text"
//                     placeholder={`Enter option ${index + 1}`}
//                     value={option}
//                     onChange={(e) => handleOptionChange(index, e)}
//                     required
//                   />
//                   {index > 1 && (
//                     <ImBin
//                       className="bin-icon"
//                       onClick={() => removeOption(index)}
//                     />
//                   )}
//                   {index === options.length - 1 && (
//                     <TiTick className="tick-icon" onClick={addOption} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <button type="submit">Submit Quiz</button>
//         </form>
//       </div>
//       <div className="createquiz-footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default CreateQuiz;
