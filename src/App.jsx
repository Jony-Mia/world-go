import Food from './components/Food';
import './App.css';
import Countries from './components/Countries';

let dataList =[
  {id:1,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:2,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:3,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:4,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:5,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:6,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
  {id:7,name:"Jony",phone:"01770522886",email:"ajonymia321@gmail.com"},
];

function App() {
  return (
    <>
        <Countries/>
        {/* <Food></Food> */}
    </>
  )
}

export default App; 