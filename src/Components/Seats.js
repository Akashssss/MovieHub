import React from 'react'
import { useState } from 'react'
export default function Seats({no }) {

   const onClickHandler = ()=>{
    if(open !="occupied")
      {
        if(open== "nota")
         {
            setOpen("selected") ; 
            setCol("bg-green-500") ; 
           
            
         }
         else
         {
            setOpen("nota") ; 
            setCol("bg-amber-100") ; 
           


         }
      }
      else
      {
        setCol("bg-gray-800") ;
      }
   }

    const [open , setOpen ] = useState('nota')
    const [col, setCol] = useState("bg-amber-100")
   
  return (
      <div onClick={() => { onClickHandler() }} className={`flex justify-center items-center rounded-tr-full rounded-tl-full m-2 w-[20px] h-[20px] ${col} text-black text-center p-4 cursor-pointer shadow- shadow-2xl`}>
          <span className=''>{no}</span> </div>
  )
}
