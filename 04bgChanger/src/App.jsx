import {useState} from "react"
function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen 
    duration-200"
  style={{backgroundColor: color}}

  >
    <div className="fixed flex flex-wrap 
   justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center
    gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl">
      <button 
      onClick={()=>setColor("red")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"red"}}>Red</button>
      <button 
      onClick={()=>setColor("green")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"green"}}>Green</button>
      <button 
      onClick={()=>setColor("yellow")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"yellow"}}>yellow </button>
      <button
      onClick={()=>setColor("pink")} 
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"pink"}}>pink</button>
      <button 
      onClick={()=>setColor("gold")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"gold"}}>gold</button>
      <button 
      onClick={()=>setColor("blue")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"blue"}}>blue</button>
      <button 
      onClick={()=>setColor("aqua")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"aqua"}}>aqua</button>
      <button 
      onClick={()=>setColor("orange")}
      className="outlne-none px-4 py-1
       rounded-full text-white shadow-lg"
       style ={{backgroundColor:"orange"}}>orange</button>
    </div>
   </div>

  </div>
  )
}

export default App
