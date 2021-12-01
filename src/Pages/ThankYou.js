import React, { useEffect } from 'react'
import Points from './../Assets/orig-roomba.png'
import { useHistory } from 'react-router'
import Next from '../Components/NextButton/Next'
import Logo from './../Assets/color-logo-orange.svg'

/**
* @author
* @function ThankYou
**/

const ThankYou = (props) => {
    const history = useHistory()
    const points = localStorage.getItem('points')
    return (
      <div className='thanks_container'>
        <img className="colorLogo" src={Logo} alt="Color Cannabis Logo" />
        <div className='messaging_for_points'>
          <h2 className='msg_text'>
            Thank you for taking our Colour Quiz!
          </h2>
          <p>Please contact your Store Manager to receive your Mango Haze Ice Dye Kit.</p>
        </div>
        <div id='next_btn_thanks'>
          <Next text='Play Again' link='/quiz' color='#FF8C00' />
        </div>
        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>
      </div>
    )

}

export default ThankYou