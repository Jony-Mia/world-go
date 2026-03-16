import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countryList}) => {
    let [counter,setCounter] = useState(12);
    let countryLists = use(countryList);
    let countries = countryLists.countries;
    const style = {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: '10px',
        gridTeplateRows: "repeat(2,1fr)",
        padding:'10px',
        margin:'auto',
        width:"90%"
    };

    return (
        <div>
            <h1 style={{textAlign:"center"}}>List of the countries {countries.length}</h1>
            <hr />
            <button onClick={()=>setCounter(counter+10)}>Add {counter}</button>
             <div style={style}>

            {
                countries.map(country=><Country  key={country.ccn3?.ccn3} country={country} />)
            }
             </div>
        </div>
    );
};

export default Countries;