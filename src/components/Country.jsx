import React, { useState } from 'react';

const Country = ({country,visitedCountry}) => {
    let [visited, setVisited] = useState(false);
    let clicker= ()=>{
        console.log('button clicked');
        
        if (visited) {
        setVisited(false)
            
        }else{
        setVisited(true)

        visitedCountry(country)
        }
    }
    
    
    return (
       <>
          <div>
            <div className={visited?'visited' : "not-visited"} style={
                {
                boxShadow:'0 0 5px  gray',
                height:'100%', borderRadius:"10px"
                }}>
                <section>
                    <div style={{position:"relative"}}>
                        <span style={{position:"absolute",right:"10px",top:"5px",height:'20px', width:"20px",background:"gray",color:"white",textAlign:'center',padding:"5px",borderRadius:"50%"}}>{}</span>
                    </div>
                    <img style={{borderRadius: '10px 10px 0 0',width:"100%"}}  src={country.flags?.flags?.png} alt={country.flags?.flags?.alt} />
                </section>
                <section>
                    <section style={{ padding:'10px'}}>
                        <div style={{display:"flex", alignItems:'center', justifyContent:"space-between", gap:'10px'}}>
                            <h1 style={{textAlign:"left", lineHeight:'0'}}>{country.name?.common}</h1>
                            <span style={{fontSize:"18px"}}>Region: {country.region?.region}</span>
                        </div>
                        <div>
                            <p  style={{textAlign:'justify',lineClamp:"3", overflow:"hidden"}}>{country.flags?.flags?.alt}</p>
                           <div style={{gap:"5px",justifyContent:"space-around", display:"flex"}}>
                            
                            <p>Population: {country.population?.population}</p>
                            <p>Capital: {country.capital?.capital}</p>
                           </div>
                        </div>
                        <button onClick={clicker} style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"end",padding:"10px 20px",margin:"auto"}}>{visited ? "Visited": "Not Visited" }</button>
                    </section>
                </section>
            </div>
                    
         </div>
       </>
    );
};

export default Country;