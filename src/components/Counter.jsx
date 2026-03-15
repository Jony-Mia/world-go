import { useState } from "react"

export default function Device({dataList}){
    let [counter, setCounter]= useState(0);
    
    return(
        <>
    <p>{counter}</p>
    <button onClick={()=>setCounter(counter+1)}>Count {counter}</button>
        </>
    )
}