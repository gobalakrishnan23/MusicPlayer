import { useEffect, useState } from 'react';
import './App.css'
import Home from './assets/component/home';
import Opening from './assets/component/opening';

function App() {
  const [pageReload,setPageReload] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setPageReload(false)
    },2000)
    return ()=>clearTimeout(timer);
  },[])
  return (
    <>
      {pageReload ? <Opening/> : <Home/>}
    </>
  )
}

export default App;
 