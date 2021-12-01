import React from 'react'
import Tshirt from './../Assets/t-shirt-prize.png'
import Logo from './../Assets/color-logo-orange.svg'
import Next from '../Components/NextButton/Next'


const Prize = (props) => {
  return(
    <div className='prize_page'>
        <img className="colorLogo" src={Logo} alt="Color Cannabis Logo" />
        <h2>Complete this quick quiz for a <span>chance to win a</span> Color Mango Haze Custom Ice Dye Kit.</h2>

        <img src={Tshirt} className="tshirtPrize" alt="Color Cannabis Tshirt Prize" />
        {/* </div> */}
        <div id='next_btn_prize'>
          <Next text="Let's Go!" link='/educational-video' color='#FF8C00'/>
        </div>

        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>
    </div>
   )

 }

export default Prize