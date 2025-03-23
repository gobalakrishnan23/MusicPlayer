import { useContext } from "react";
import Display from "./display";
import Player from "./player";
import Sidebar from "./sidebar";
import { PlayerContext } from "../context/playerContext";

function Home() {
    
    const {audioRef,track} = useContext(PlayerContext)
    return (
      <>
        <div className=" h-screen bg-black">
            <div className=" h-[90%] flex">
                <Sidebar/>
                <Display/>
            </div>
            <Player/>
            <audio ref={audioRef} src={track.song} preload="audo"></audio>
        </div>
      </>
    )
  }
  
  export default Home;