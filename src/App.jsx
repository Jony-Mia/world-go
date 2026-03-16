import Food from './components/Food';
import './App.css';
import Countries from './components/Countries';
import { Suspense } from 'react';

function App() {
  const countryList = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
  
  return (
    <>

        <Suspense fallback={<p>Loading......</p>}>
          <Countries countryList={countryList}/>
        </Suspense>

        {/* <Food></Food> */}
    </>
  )
}

export default App; 