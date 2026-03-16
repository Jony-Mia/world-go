import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countryList}) => {
    let [visitedCountry,setVisitedCountry] = useState([]);


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
    function visit(e){
        console.log('this country visiteed');
        
        
        
    }
    return (
        <div>
            <h1 style={{textAlign:"center"}}>List of the countries {countries.length}</h1>
            <hr />
            <h1>Total country visited</h1>
            
             <div style={style}>

            {
                countries.map(country=><Country visitedCountry={visit} key={country.ccn3?.ccn3} country={country} />)
            }
             </div>
        </div>
    );
};

export default Countries;