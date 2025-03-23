import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./displayHome";
import DisplayAlbum from "./displayAlbum";
import { useEffect, useRef } from "react";
import albumData from "../albumData.json";

function Display() {
  const displayref = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumId = isAlbum ? loc.pathname.slice(-1) : "";
  const bgclr = albumData[Number(albumId)].bgColor;
  
  useEffect(()=>{
    if(isAlbum){
      displayref.current.style.background = `linear-gradient(${bgclr},#121212)`;
    }else{
      displayref.current.style.background = "#121212";
    }
  })
  return (
    <>
      <div
        ref={displayref}
        className=" w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
      >
        <Routes>
          <Route path="/" element={<DisplayHome />}></Route>
          <Route path="/album/:id" element={<DisplayAlbum />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Display;
