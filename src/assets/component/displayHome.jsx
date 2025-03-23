import Navbar from "./navbar";
import AlbumItems from "./albumItems";
import albumData from "../albumData.json";

function DisplayHome() {

  return (
    <>
      <div>
        <Navbar />
        <div className=" mb-4">
          <h1 className=" my-5 font-bold text-2xl">Recently Played</h1>
          <div className=" flex overflow-auto">
            {albumData.map((item, i) => (
              <AlbumItems
                key={i}
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div className=" mb-4">
          <h1 className=" my-5 font-bold text-2xl">Your Top Playlist</h1>
          <div className=" flex overflow-auto">
            {albumData.map((item, i) => (
              <AlbumItems
                key={i}
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
