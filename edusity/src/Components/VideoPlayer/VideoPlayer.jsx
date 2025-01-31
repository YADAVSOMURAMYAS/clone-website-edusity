import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/edudity-video.mp4'
const VideoPlayer = ({playState,setPlayState}) => {
        const player=useRef(null);
        const closePlayer = (e) => {
            if(e.target === player.current){
                setPlayState(false);
            }
        }


  return (
    <div className={`video-player ${playState? '': 'hide'}` }>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
import './VideoPlayer.css'
import { use } from 'react'
export default VideoPlayer
