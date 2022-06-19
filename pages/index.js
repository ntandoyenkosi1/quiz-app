import { useEffect, useState } from "react"
import ProgressBar from "react-bootstrap/ProgressBar";
import Head from "next/head";
export default function Home() {
  const [progress,setProgress]=useState(5)
  
  // function move() {
  //   var elem = document.getElementById("progress-bar");

  //   var width = 1;
  //   var id = setInterval(frame, 10);
  //   function frame() {
  //     if (width >= 100) {
  //       clearInterval(id);
  //     } else {
  //       width++; 
  //       elem.style.width = width + '%'; 
  //     }
  //   }
  // }
  // useEffect(() => {
  //   move()
  // },[])
  
  
  return (

    <div>
    <h1 className="text-3xl text-center text-blue-800">
      Quiz
      </h1>
      <div className="flex justify-center pt-20 pb-20 rounded-sm border-2 border-red-500 hover:bg-orange-200 font-mono shadow-md">
        <span>What is your name</span>
      </div>
      <div id="progress-bar" className="flex justify-center">
        <p>{ progress }</p>
      </div>
      <div className="flex justify-center pt-10 pb-5 underline">
        <span>Select answer</span>
      </div>
      <div className="pt-5 flex justify-between">
        <span className="pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 text-center pl-20 hover:bg-orange-100 font-mono drop-shadow-lg">Ntando Ntando Ntando Ntando</span>
        <span className="pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 pl-20 hover:bg-orange-100 font-mono drop-shadow-xl">Ntando</span>
        <span className="pr-20 pt-20 pb-20 rounded-sm border-2 border-red-500 pl-20 hover:bg-orange-100 font-mono drop-shadow-lg">Ntando</span>
      </div>
      </div>
  )
}