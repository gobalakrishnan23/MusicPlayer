// images
import search from "/icons8-search-24 (1).png"
import stack from "/icons8-stack-of-paper-48.png"
import rihght_arrow1 from "/icons8-right-arrow-48.png"
import plus from "/icons8-plus-24.png"
import { useNavigate } from "react-router-dom"

function Sidebar() {

    const nav = useNavigate();

    return (
      <>
        <div className=" w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className=" bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div onClick={()=>nav("/")} className=" flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#ccc]">
                    <img src="/icons8-home-32.png" className=" w-6"></img>
                    <p className=" font-bold">Home</p>
                </div>
                <div className=" flex items-center gap-3 pl-8 cursor-pointer hover:bg-[#ccc]">
                    <img src={search} className=" w-6"></img>
                    <p className=" font-bold">Search</p>
                </div>
            </div>
            <div className=" bg-[#121212] h-[85%] rounded">
                <div className=" p-4 flex items-center justify-between">
                    <div className=" flex items-center gap-3">
                        <img src={stack} className=" w-8"></img>
                        <p className=" font-semibold">Your Library</p>
                    </div>
                    <div className=" flex items-center gap-3">
                        <img src={rihght_arrow1} className=" w-5"></img>
                        <img src={plus} className=" w-5"></img>
                    </div>
                </div>
                <div className=" p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Create your first Playlist</h1>
                    <p className=" font-light">it's easy we will help you</p>
                    <button className=" px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">create playlist</button>
                </div>
                <div className=" p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                    <h1>Find some Podcasts to ollow</h1>
                    <p className=" font-light">we'll keep you update on new episodes</p>
                    <button className=" px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcasts</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Sidebar;