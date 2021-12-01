import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import VideoMp4 from './../Assets/videos/Color.mp4'

/**
* @author
* @function Video
**/

const Video = (props) => {
  const history = useHistory()
  useEffect(()=>{


    setTimeout(()=>{
      history.push('/mango-haze')
    },20000)
  }, [])
  return(
    <video width="100%" height="100%" autoPlay muted >
    <source src={VideoMp4} type="video/mp4"/>
   </video>


   )

 }

export default Video