import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Next from '../Components/NextButton/Next'
import PurpleLogo from './../Assets/color-logo-purple.svg'

/**
* @author
* @function Redirecttoquiz
**/

const Redirecttoquiz = (props) => {
    const history = useHistory()
    const points = localStorage.getItem('points')
    useEffect(() => {
        // setTimeout(()=>{
        //     history.push('/quiz')
        // },2000)
    }, [])
    return (
        <div className='points_container'>
          <div className="content-container">
            <h2 className='score_text'>
                You only scored {points} out of 5.
            </h2>
            <p className="tryagain_text">You'll have to try again <br /> for your chance to win!</p>
            <div id='next_btn_points'>
                <Next text='Try Again.' link='/quiz' color='#6D0A45' />
            </div>
            <img className="colorLogo" src={PurpleLogo} alt="Color Cannabis Orange Logo" />
            <p className="legal_copy">
              All product images and labels provided for information and illustrative purposes
              only, and do not represent the actual cannabis product, product label or it’s appearance.
            </p>
          </div>
        </div>
    )

}

export default Redirecttoquiz