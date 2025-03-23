import { useContext, useState } from "react";
// images
import shuffle from "/icons8-shuffle-24.png";
import prev from "/icons8-arrow-32.png";
import next from "/icons8-arrow-32 (1).png";
import play_icon from "/icons8-play-30 (1).png";
import loop_arrow from "/icons8-loop-arrow-48.png";
import micro from "/icons8-micro-24.png";
import list from "/icons8-list-32.png";
import speaker from "/icons8-portable-speaker-48.png";
import sound from "/icons8-speaker-24.png";
import mini from "/icons8-ipad-mini-24.png";
import zoom from "/icons8-decompress-50 (1).png";
import { PlayerContext } from "../context/playerContext";

function Player() {
  const { seekBar, seekBg, play, pause, playStatus, track,time,before,after,seekBgClick } =
    useContext(PlayerContext);

  return (
    <>
      <div className=" h-[10%] bg-black flex justify-between items-center text-white px-4">
        <div className=" hidden lg:flex items-center gap-4">
          <img src={track.image} className=" w-12"></img>
          <div>
            <p>{track.name.slice(0, 10) + "..."}</p>
            <p>{track.desc.slice(0, 10) + "..."}</p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-1 m-auto">
          <div className=" flex gap-4">
            <img src={shuffle} className=" w-4 cursor-pointer"></img>
            <img onClick={before} src={prev} className=" w-4 cursor-pointer"></img>
            {playStatus ? (
              <img
                onClick={pause}
                src="/icons8-pause-30.png"
                className=" w-4 cursor-pointer"
              ></img>
            ) : (
              <img
                onClick={play}
                src={play_icon}
                className=" w-4 cursor-pointer"
              ></img>
            )}
            <img onClick={after} src={next} className=" w-4 cursor-pointer"></img>
            <img src={loop_arrow} className=" w-4 cursor-pointer"></img>
          </div>
          <div className=" flex items-center gap-5">
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div
              ref={seekBg} onClick={seekBgClick}
              className=" w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            >
              <hr
                ref={seekBar}
                className=" h-1 border-none w-0 bg-green-800 rounded-full"
              ></hr>
            </div>
            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
          </div>
        </div>
        <div className=" hidden lg:flex items-center gap-2 opacity-75">
          <img src={play_icon} className=" w-4"></img>
          <img src={micro} className=" w-4"></img>
          <img src={list} className=" w-4"></img>
          <img src={speaker} className=" w-4"></img>
          <img src={sound} className=" w-4"></img>
          <div className="w-20 bg-slate-50 h-1 rounded"></div>
          <img src={mini} className=" w-4"></img>
          <img src={zoom} className=" w-4"></img>
        </div>
      </div>
    </>
  );
}

export default Player;
