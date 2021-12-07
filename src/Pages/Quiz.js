import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useHistory } from 'react-router'
import PurpleBg from './../Assets/purple-bg.png'
import PurpleLogo from './../Assets/color-logo-purple.svg'
import OrangeBg from './../Assets/orange-bg.png'
import OrangeLogo from './../Assets/color-logo-orange.svg'

/**
* @author
* @function Quiz
**/

// We are going to have a list of questions
// from this list we're going to randomly select an index
// this index will be stored in memory and deleted from the other array
// we then run an conditional statement to determine what are the answers
// we then concatinate when the answer is correct or do nothing if it is not.
// we're nor going to call and random search function on the old array for another question.

const Quiz = (props) => {
    var completed = []
    var points = 0
    var counter = 0
    const question = useRef()
    const questionNumber = useRef()
    const orangeLogoRef = useRef()
    const purpleLogoRef = useRef()
    const a = useRef()
    const b = useRef()
    const c = useRef()
    const d = useRef()
    const e = useRef()
    const bg = useRef()
    const showA = useRef()
    const showB = useRef()
    const showC = useRef()
    const showD = useRef()
    const showE = useRef()
    const keyMap = ['a', 'b', 'c', 'd', 'e']
    const questionaire_limit = 5
    const list_of_questions = [
      {
        question: 'For ultimate freshness, our Live Resin Vapes are made from:',
        options: {
          a: 'A. Fresh frozen Mango Haze Flower',
          b: 'B. Dried Mango Haze Flower',
          c: 'C. Mango Tree Sap'
        },
        answer: 'a',
        bg: `url(${PurpleBg})`
      },
      {
        question: 'By freezing fresh Mango Haze flower we retain the terpenes to extract the truest expression of the plant?',
        options: {
          a: 'A. True',
          b: 'B. False',
        },
        answer: 'a',
        bg: `url(${OrangeBg})`
      },
      {
        question: "Color’s Mango Haze Live Resin has what cannabinoid ratio?",
        options: {
          a: 'A. 1:1 - CBD:THC',
          b: 'B. 2:1 - CBD:THC',
          c: 'C. 100% CBD',
          d: 'D. 100% THC'
        },
        answer: 'b',
        bg: `url(${PurpleBg})`
      },
      {
        question: "What flavour palate explosion can you expect from Color Mango Haze Live Resin?",
        options: {
          a: "A. Cheesy + Peppery",
          b: "B. Sweet + Spice",
          c: "C. Floral + Citrus"
        },
        answer: 'b',
        bg: `url(${OrangeBg})`
      },
      {
        question: 'What go-to format is Color Mango Haze Live Resin available in?',
        options: {
          a: 'A. Milled Flower, Ready-to-Roll',
          b: 'B. PAX Pod',
          c: 'C. 510 Vape Cartridge'
        },
        answer: 'c',
        bg: `url(${PurpleBg})`
      }
    ]
    const history = useHistory()

    useEffect(() => {
        randList()
    }, [])

    const randList = () => {

      keyMap.forEach(key => {
        // Set answer colors to orange or purple depending on odd or even question index
        if (completed.length % 2 === 0) { // Orange
          eval(`show${key.toUpperCase()}`).current.style = "background-color: #FF8C00"
          orangeLogoRef.current.className = 'logo'
          purpleLogoRef.current.className = 'logo displayNone'
        } else { // Purple
          eval(`show${key.toUpperCase()}`).current.style = "background-color: #6D0A45"
          orangeLogoRef.current.className = 'logo displayNone'
          purpleLogoRef.current.className = 'logo'
        }
      })

      if (completed.length >= questionaire_limit) {
        if(points < 4){
          localStorage.setItem('points', points)
          history.push('/points')
        }
        else{
          localStorage.setItem('points', points)
          history.push('/data-capture')
        }
      } else {
        let random = counter++
        const check_completed = completed.find(element => element == random)

        // For some reason zero is being ignored. That why it's in the conditional statement below.
        if (check_completed || check_completed === 0) {
          randList()
        }
        else {
          completed.push(random)
          question.current.textContent = list_of_questions[random].question
          bg.current.style.background = list_of_questions[random].bg
          bg.current.style.backgroundSize = '100% 100%'

          keyMap.forEach(key => {
            eval(key).current.className = `ans`
            if (list_of_questions[random].options[key]) {
              eval(key).current.textContent = list_of_questions[random].options[key]
              eval(`show${key.toUpperCase()}`).current.className = `orange_bg ${key}`
            } else {
              eval(`show${key.toUpperCase()}`).current.className = 'displayNone'
            }
          })
        }
      }
    }

    const selected_answer = (selected_data) => {

      let index = completed[completed.length -1]

      if(selected_data == list_of_questions[index].answer) {
        gsap.to(`.${selected_data}`, {backgroundColor: '#FF8C00', duration: 0.5})
        eval(selected_data).current.textContent = 'Correct.';
        eval(selected_data).current.className = `ans correct`;
        points++;
      } else{
        gsap.to(`.${selected_data}`, {backgroundColor: '#6D0A45', duration: 0.5})
        eval(selected_data).current.textContent = 'Incorrect';
      }

      setTimeout(()=>{
        questionNumber.current.textContent = completed.length + 1
        randList()
      }, 1000)
    }

    return (
      <div className="quiz-container" ref={bg}>
        <div id='quizHolder'>
            <div id='titleHolder'>
              <div className="questionNumber" ref={questionNumber}>1</div>
              <h1 ref={question}></h1>
            </div>
            <div id='answer_list'>
                <div ref={showA} className='displayNone' onClick={() => selected_answer('a')}><p className='ans' ref={a}></p></div>
                <div ref={showB} className='displayNone' onClick={() => selected_answer('b')}><p className='ans' ref={b}></p></div>
                <div ref={showC} className='displayNone' onClick={() => selected_answer('c')}><p className='ans' ref={c}></p></div>
                <div ref={showD} className='displayNone' onClick={() => selected_answer('d')}><p className='ans' ref={d}></p></div>
                <div ref={showE} className='displayNone' onClick={() => selected_answer('e')}><p className='ans' ref={e}></p></div>
            </div>
            <img ref={orangeLogoRef} className="colorLogo" src={OrangeLogo} alt="Color Cannabis Orange Logo" />
            <img ref={purpleLogoRef} className="colorLogo displayNone" src={PurpleLogo} alt="Color Cannabis Orange Logo" />
        </div>
        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>
      </div>
    )

}

export default Quiz
