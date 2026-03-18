import { useEffect, useState } from "react";
import Navbar from "./Navbar";

let shop = [
    {id:1,category: "Fruits",     price: " $1", stock: true,  name:"Apple"},
    {id:2,category: "Fruits",     price: " $1", stock: false,  name:"Dragonfruit"},
    {id:3,category: "Fruits",     price: " $2", stock: false, name:"Passionfruit"},
    {id:4,category: "Fruits",     price: " $3", stock: true,  name:"Banana"},
    {id:5,category: "Vegetables", price: " $2", stock: false, name:"Cucumber"},
    {id:6,category: "Vegetables", price: " $2", stock: true,  name:"Spinach"},
    {id:7,category: "Vegetables", price: " $4", stock: true, name:"Pumpkin"},
    {id:8,category: "Vegetables", price: " $1", stock: true,  name:"Peas"},
    {id:9,category: "Fruits",     price: " $1", stock: false,  name:"Pine Apple"},
];
export default function Food(){
    let [fruits, setFruits]= useState([]);
    let [vegetables, setVegetables]= useState([]);

    let fruitlist = shop.filter(s=> s.category==="Fruits");
    let vegetablesList = shop.filter(s=> s.category==="Vegetables");

 useEffect(()=>{
       setFruits(fruitlist)
       setVegetables(vegetablesList)
 },[])

 function check(e){
    let target = e.target;
    let fruitsStock = shop.filter(s=> s.stock===true).filter(s=>s.category==="Fruits")
    let vegetablesStock = shop.filter(s=> s.stock===true ).filter(s=>s.category==="Vegetables")
    
        if(target.checked){
            setFruits(fruitsStock);
            setVegetables(vegetablesStock) ;
        } else{
            setFruits(fruitlist)
            setVegetables(vegetablesList)
        }
}
    
function searchBar(e){
    let value = e.target.value.toLocaleLowerCase();
    let searchFood = shop.filter(s=>s.name.toLocaleLowerCase().includes(value))

    console.clear()
    let searchList = [...searchFood];
    searchList.forEach(f=>{
        if(f.category==="Fruits"){
            console.log(f);
            
            // setFruits(f);
        }else{
            console.log(f);
            // setVegetables(f)
        }
    })
    
}

    return(
    <>
    <Navbar/>
            <br />
            <Search searchBar={searchBar}></Search> 
            <br />
            <Checkbox check={check}></Checkbox>            
            <br />
            <Table fruits={fruits} vegetables={vegetables}></Table>
            
    </>
    );
}

export function Checkbox({check}){
    return(
        <>
            <br />
            <input type="checkbox" onClick={check} id="check" />
            <label htmlFor="check">Only show products in stock</label>
        </>
    )
}

export function Search({value,searchBar}){
    return(<>
    <input type="text" onChange={searchBar} placeholder="Search" value={value}/>
    </>)
}

export function Table({fruits, vegetables}){
    return(
    <table cellSpacing={0} cellPadding={10} border={1}>
        <thead>
            <tr>
                <th rowSpan={3}>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th colSpan={2}>Fruits</th>
            </tr>
            {fruits.map(m=>(
                <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.price}</td>
                </tr>
            ))}
            <tr>
                <th colSpan={2}>Vegetables</th>
            </tr>
            {vegetables.map(m=>(
                <tr key={m.id}>
                    <td>{m.name}</td>
                    <td>{m.price}</td>
                </tr>
            ))}
            
        </tbody>
    </table>
)}