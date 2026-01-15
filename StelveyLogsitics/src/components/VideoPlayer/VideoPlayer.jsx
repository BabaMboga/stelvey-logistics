import React from 'react'
import { useRef } from 'react'
import './VideoPlayer.css'
import stelvey_vid from '../../assets/stelvey-logistics.mp4'

const VideoPlayer = ({playVideo,setPlayVideo}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayVideo(false)
        }
    }


  return (
    <div className={`video-player ${playVideo ? '': 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={stelvey_vid} autoPlay muted controls></video>
        {/* <iframe
            src="https://www.youtube.com/watch?v=C4jjFanHZo8?autoplay=1&mute=1" 
            frameborder="0"
            // width="100%"
            // height="100%"
            title= "Stelvey Logistics Company Profile"
            allow="autoplay; encrypted-media"
        ></iframe> */}
    </div>
  )
}

export default VideoPlayer