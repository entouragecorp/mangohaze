import React from 'react'
import Next from '../Components/NextButton/Next'
import NextGreen from '../Assets/next-green.png'
import Cartridge from '../Assets/mango-cartridge.png'
import './Pages.scss'

/**
* @author
* @function SweetSour
**/

const SweetSour = (props) => {
  return(
    <div className='strain-info-container'>

      <div className='info_container'>
        <h1>Mango Haze</h1>
        <h2>510 LIVE RESIN CARTRIDGE</h2>
      </div>

      <div className='columns_holder'>

        <div className='shared_width left-content'>

          <div className='shared_width'>


            <div className='info_container'>
              <p className='margin_zero' style={{fontSize: '13px'}}>
                Mango Haze Live Resin by Color is a pure cannabis extract with a rich
                mango aroma and hints of spice and pine celebrating a 2:1 CBD:THC ratio.
                Every batch of live resin by Color Cannabis is crafted from freshly
                frozen cannabis flower and contains no diluents.
              </p>
            </div>

            <div className='info_container'>
              <p className='label'>SATIVA HYBRID</p>
              <p className='margin_zero thin'>THC 20-26% mg/g</p>
              <p className='margin_zero thin'>CBD 43-49% mg/g</p>
            </div>
            <div className='info_container'>
              <p className='label'>AROMA & FLAVOURS</p>
              <p className='margin_zero thin'>Tropical, Fruity, Mango</p>
            </div>

            <div className='info_container'>
              <p className='label'>LICENSED PRODUCER</p>
              <p className='margin_zero thin'>WeedMD Rx Inc.</p>
            </div>

            <div id='next_btn_mango_haze'>
              <Next text="Let's Start." link='/quiz' color='#FF8C00'/>
            </div>
          </div>

        </div>

        <div className="vape_container">
          <img id='vapePen' src={Cartridge} alt='' />
        </div>

        <p className="legal_copy">
          All product images and labels provided for information and illustrative purposes
          only, and do not represent the actual cannabis product, product label or it’s appearance.
        </p>

      </div>
    </div>
   )

 }

export default SweetSour