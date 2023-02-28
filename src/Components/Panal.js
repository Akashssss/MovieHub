import React from 'react'
import Seats from './Seats'
import { useState } from 'react';

export default function Panal() {

    const A = [1,2,3,4,5,6,7];
    const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col m-20'>
        <div className='w-full h-[120px] bg-gray-50 text-center mt-4 mb-24' style={{transform :"rotateX(-70deg)" , 
        boxShadow : "0 3px 10px rgba(255 ,255,255,0.5) ,  0 3px 10px rgba(255 ,255,255,0.9),   0 3px 10px rgba(255 ,255,255,0.9)",

        }}> Screen</div>

        <div className='flex  justify-between '  >
              <div className=''>
                  {A.map((x) => (
                      <div key={String.fromCharCode(64 + x)} className='flex'><Seats no={'1' + String.fromCharCode(64 + x)} /><Seats no={'2' + String.fromCharCode(64 + x)}/></div>))}            </div>
               <div className='ml-10'>
                  {A.map((x) => (
                      <div className='flex' key={String.fromCharCode(64 + x)}><Seats no={'3' + String.fromCharCode(64 + x)} /><Seats no={'4' + String.fromCharCode(64 + x)} /><Seats no={'5' + String.fromCharCode(64 + x)} /><Seats no={'6' + String.fromCharCode(64 + x)} /><Seats no={'7' + String.fromCharCode(64 + x)} /><Seats no={'8' + String.fromCharCode(64 + x)} /></div>))}    </div>
              <div className='ml-10 '>
                  {A.map((x) => (
                      <div className='flex' key={String.fromCharCode(64 + x)}><Seats no={'7' + String.fromCharCode(64 + x)} /><Seats no={'8' + String.fromCharCode(64 + x)} /></div>))}            </div>
        </div>
    </div>
  )
}
