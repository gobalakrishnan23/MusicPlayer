import { useNavigate } from "react-router-dom";

function AlbumItems(props) {

    const nav = useNavigate();

    return (
      <>
        <div className=" min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]" onClick={()=>nav(`/album/${props.id}`)}>
            <img src={props.image} className=" rounded w-45 h-45"></img>
            <p className=" font-bold mt-2 mb-1">{props.name}</p>
            <p className=" text-slate-200 text-sm">{props.desc}</p>
        </div>
      </>
    )
  }
  
  export default AlbumItems;