import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Logo from './../Assets/color-logo-orange.svg'

/**
* @author
* @function Datacapture
**/

const Datacapture = (props) => {
  let points = localStorage.getItem('points')
  const history = useHistory()

  // Push the contents of the the form to localstorage.

  const on_submit = (e) => {
    e.preventDefault()
    const user_metadata = JSON.parse(localStorage.getItem('users_metadata'))

    // console.log(`Fullname: ${e.target.fullname.value} | Email: ${e.target.email.value} | Company: ${e.target.store.value}`)
      var users_data = {
      'fullname': `${e.target.fullname.value}`,
      'email': `${e.target.email.value}`,
      'company': `${e.target.store.value}`,
      'points': points,
      ...user_metadata
      }
    fetch("https://bottlecapdev.pythonanywhere.com/mangohaze", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(users_data)
    }).then((resp) => resp.json())
    .then((respr) =>{
      const status = respr.status
      if(parseInt(status) === 200){
        history.push('/ThanksForEntry')
      }

    })
  }

  return (
    <div className='data-capture-container'>

      <div id='quiz_result_holder_'>
        <img className="colorLogo" src={Logo} alt="Color Cannabis Logo" />
        <div id='contact_header_comment_holder'>
          <h2>Congratulations! <br /> You scored</h2>
          <h3>{`${points} out of 5.`}</h3>
          <p>Please leave your information <br /> below to be entered to win!</p>
        </div>
      </div>

      <form className='form_collection' onSubmit={on_submit}>


        <div className='input_container'>
          <div className='input_wrapper'>
            <div className='label_bg'>
              <label htmlFor='fullname' className='labels_' >FULLNAME</label>
            </div>
            <input className='inputs formInput' type='text' id='fullname' name='fullname' required></input>
          </div>

        </div>

        <div className='input_container'>
          <div className='input_wrapper'>
          <div className='label_bg'>
          <label htmlFor='email' className='labels_' >EMAIL</label>
          </div>
          <input className='inputs formInput' type='email' id='email' name='email' required></input>
          </div>
        </div>

        <div className='input_container'>
          <div className='input_wrapper'>
          <div className='label_bg'>
          <label htmlFor='store' className='labels_' >STORE</label>
          </div>
          <input className='inputs formInput' type='text' id='store' name='store' required></input>
          </div>
        </div>

        <input type='submit' id='submit_btn' value='Submit'></input>
      </form>

      <p className="legal_copy">
        All product images and labels provided for information and illustrative purposes
        only, and do not represent the actual cannabis product, product label or it’s appearance.
      </p>
    </div>
  )

}

export default Datacapture