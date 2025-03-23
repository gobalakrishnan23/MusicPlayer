import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import albumData from "../albumData.json"
// images
import spotify_logo from "/icons8-spotify-logo-50.png";
import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

function DisplayAlbum() {
  
  const {id} = useParams();
  const albumdata = albumData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <div>
        <Navbar/>
        <div className=" mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img src={albumdata.image} className=" w-48 h-48 rounded"></img>
            <div className=" flex flex-col">
                <p>Playlist</p>
                <h2 className=" text-4xl font-bold mb-4 md:text-6xl">{albumdata.name}</h2>
                <h4>{albumdata.desc}</h4>
                <p className=" mt-2 flex items-center gap-2">
                    <img src={spotify_logo} className=" inline-block w-5"></img>
                    <b>Spotify Clone</b> 33,62,251 likes |
                    <b> 1 Song </b>| about 2hr 35 min
                </p>
            </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className=" hidden md:block">Date Added</p>
        <img src="/icons8-clock-30.png" className=" m-auto w-4"></img>
      </div>
      <hr></hr>
      <div onClick={()=>playWithId(albumdata.id)} className=" grid grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]">
        <p className=" text-white flex items-center">
          <b className=" mr-4 text-[#a7a7a7]">{albumdata.id}</b>
          <img src={albumdata.image} className=" inline w-10 mr-5 h-10"></img>
          <p>{albumdata.name}</p>
        </p>
        <p>{albumdata.desc}</p>
        <p>3 days ago</p>
        <p className=" text-center">{albumdata.duration}</p>
      </div>
    </>
  );
}

export default DisplayAlbum;
