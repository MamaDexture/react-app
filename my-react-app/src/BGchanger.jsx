import React from 'react'
import { useState } from "react";
export default function BGchanger() {
    let [color,setColor] =useState('bg-yellow-500');
  return (
    <>
    <div className= {` w-screen h-screen ${color} `}>
    <div className='bg-pink-700 p-8 rounded flex justify-around'>
    <button onClick={() => setColor('bg-red-800')} className='bg-red-800 text-black p-5 rounded-full'>red</button>
    <button onClick={() => setColor('bg-yellow-400')} className='bg-yellow-400 text-black p-5 rounded-full'>yellow</button>
    <button onClick={() => setColor('bg-purple-700')} className='bg-purple-700 text-black p-5 rounded-full'>purple</button>
    <button onClick={() => setColor('bg-green-700')} className='bg-green-700 text-black p-5 rounded-full'>green</button>
    <button onClick={() => setColor('bg-orange-700')} className='bg-orange-700 text-black p-5 rounded-full'>orange</button>
    <button onClick={() => setColor('bg-white')} className='bg-white text-black p-5 rounded-full'>white</button>
    <button onClick={() => setColor('bg-black')} className='bg-black text-white p-5 rounded-full'>black</button>
    </div>
    </div>
    
    </>
  )
}
