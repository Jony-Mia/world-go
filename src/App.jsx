import Food from './components/Food';
import './App.css';
import Countries from './components/Countries';
import { Activity, Suspense, useState } from 'react';

function App() {
  const countryList = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
  let [visible,setVisible ] = useState(false);
  return (
    <>

    <button onClick={()=>setVisible(!visible)}>hi{` ${visible}`}</button>
    <Activity mode={visible ? "visible":"hidden"}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nam.</p>

    </Activity>
        <Suspense fallback={<p style={{textAlign:"center"}}>Loading......</p>}>
          <Countries countryList={countryList}/>
        </Suspense>


    </>
  )
}

export default App; 