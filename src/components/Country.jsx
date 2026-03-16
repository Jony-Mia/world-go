import React, { Activity, useState } from 'react';

const Country = ({country,visitedCountry,setClicker}) => {
    let [visited, setVisited] = useState(false);
    let [flags, setFlags] = useState(false);

    let clicker= (e)=>{
        console.log('button clicked');
        
        if (visited) {
        setVisited(false)
        // setClicker(country)

        }else{
        setVisited(true)
        // setClicker(country)

        visitedCountry(country)
        }
    }
    function addFlags(){
        if (flags) {
            setFlags(false)
        } else {
            setFlags(true)
        }
    }
    
    
    
    return (
       <>
          <div>
            <div className={visited?'visited' : "not-visited"} style={
                {
                boxShadow:'0 0 5px  gray',
                height:'100%', borderRadius:"10px",
                padding:"10px"
                }}>
                <section>
                    <div style={{position:"relative"}}>
                        <Activity mode={flags?"visible":"hidden"}>
                            <span style={{position:"absolute",right:"0",top:"0",borderRadius:"0 0 0 10px ",background:"white",color:"white",textAlign:'center',padding:"5px"}}>
                                <img src={country.flags?.flags?.png} width={40} alt="" />
                            </span>
                        </Activity>
                    </div>
                    <img style={{borderRadius: '10px 10px 0 0',width:"100%"}}  src={country.flags?.flags?.svg} alt={country.flags?.flags?.alt} />
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
                        
                    </section>
                    <section style={{display:"flex"}}>
                        
                        <button onClick={clicker} style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"end",padding:"10px 20px",margin:"auto"}}>{visited ? "Visited": "Not Visited" }</button>
                        <button onClick={addFlags} style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"end",padding:"10px 20px",margin:"auto"}}>{flags ? "Flags Added": "Add Flag" }</button>
                    </section>
                </section>
            </div>
                    
         </div>
       </>
    );
};

export default Country;