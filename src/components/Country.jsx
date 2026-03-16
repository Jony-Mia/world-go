import React, { useState } from 'react';
// import win10 from "../assets/Windows 11 Cursors Design Preview.png"
const Country = ({country}) => {
    let [visited, setVisited] = useState(false);
    let clicker= ()=>{
        console.log('button clicked');
        
        // setVisited(true)
        if (visited) {
        setVisited(false)
            
        }else{
        setVisited(true)

        }
    }
    
    
    return (
       <>
       
                <div>
                    <div style={{boxShadow:'0 0 5px  gray',height:'100%', borderRadius:"10px"}}>
                <section>
                    <div style={{position:"relative"}}>
                        <span style={{position:"absolute",right:"10px",top:"5px",height:'20px', width:"20px",background:"gray",color:"white",textAlign:'center',padding:"5px",borderRadius:"50%"}}>{}</span>
                    </div>
                    <img style={{borderRadius: '10px 10px 0 0',width:"100%"}}  src={country.flags?.flags?.png} alt="" />
                </section>
                <section>
                    <section style={{ padding:'10px'}}>
                        <div style={{display:"flex", alignItems:'center', justifyContent:"space-between", gap:'10px'}}>
                            <h1 style={{textAlign:"left", lineHeight:'0'}}>{country.name?.common}</h1>
                            <span style={{fontSize:"18px"}}>Region: {country.region?.region}</span>
                        </div>
                        <div>
                            <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat eligendi, totam voluptates nulla molestias ratione?</p>
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