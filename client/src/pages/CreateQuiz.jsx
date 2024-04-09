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