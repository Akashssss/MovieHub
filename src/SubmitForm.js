import React from 'react'
import { useState , useEffect } from 'react'

export default function ({movieName , movieTime}) {

    const [fname, setFname] = useState(localStorage.getItem("first_name") ?localStorage.getItem("first_name"):"") ;
    const [lname, setLname] = useState(localStorage.getItem("last_name") ? localStorage.getItem("last_name") : "") ; 
    const [no , setNo] =  useState("") ; 
    const [email , setEmail] = useState("") ; 
    const [seats , setSeats] = useState("") ; 

    useEffect(() => {
        const storedValue = localStorage.getItem('first_name');
        if (storedValue) {
            setFname(storedValue);
        }
    }, []);
    useEffect(() => {
        const storedValue = localStorage.getItem('last_name');
        if (storedValue) {
            setLname(storedValue);
        }
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('Mobile_no');
        if (storedValue) {
            setNo(storedValue);
        }
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('email');
        if (storedValue) {
            setEmail(storedValue);
        }
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('seats');
        if (storedValue) {
            setSeats(storedValue);
        }
    }, []);



    const onsubmitHandler= ()=>{
      

        setFname('') ; 
        setLname('') ; 
        setNo('') ; 
        setEmail('') ; 
        setSeats(0) ; 

    }
 const co= localStorage.getItem(seats ) ; 
 console.log(co)
  return (
    <div  className='w-full h-full'>
       <div className='mt-4 font-extralight text-white text-5xl text-center'>{movieName}</div>
          <div className='flex justify-end'> <div className=' text-white mr-5 font-bold' >Schedule : &nbsp;
              <span className='font-extralight'>{movieTime.days},</span>&nbsp;&nbsp;<span className='font-extralight'>{movieTime.time}</span></div></div>
        <form action="">
              
                  <div className='mb-4 ml-4 mr-4'>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input value={fname} onChange={(e) => {
                      const newValue = e.target.value;
                      setFname(newValue);
                      localStorage.setItem('first_name', newValue);
                  }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hello" required />
                  </div>

              <div className='mb-4 ml-4 mr-4'>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input value={lname} onChange={(e) => {
                      const newValue = e.target.value;
                      setLname(newValue);
                      localStorage.setItem('last_name', newValue);
                  }} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="world" required />
              </div>

              <div className='mb-4 ml-4 mr-4' >
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No.</label>
                  <input value={no} onChange= {(e)=>
                  {
                      const newValue = e.target.value;
                      setNo(newValue);
                      localStorage.setItem('mobile_no', newValue);
                  }} type="tel" id="first_name" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-456-7890" required />
              </div>
                 
              <div className='mb-4 ml-4 mr-4'>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input value={email} onChange={(e) => {
                      const newValue = e.target.value;
                      setEmail(newValue);
                      localStorage.setItem('email', newValue);
                  }}type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc123@gmail.com" />
              </div>

              <div className='mb-4 ml-4 mr-4'>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Booked Seats :</label>
                  <input value={seats} onChange={(e) => {
                      const newValue = e.target.value;
                      setSeats(newValue);
                      localStorage.setItem('seats', newValue);
                  }} type="number" min ="0" max="70" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" />
              </div>


                   <div className='flex justify-end'>
                  <div className='mt-6 text-lg'>
                      <button type = "submit" className="bg-blue-900 hover:bg-gray-400 text-gray-50 font-bold py-1 px-2 rounded-xl inline-flex items-center  mb-5 mr-5 cursor-pointer border z-[999] m-4"
                          onClick={(e) => {e.preventDefault() ;  onsubmitHandler() ; }}
                      >
                          <span className='pl-5 pr-5 pt-3 pb-3'>Book Now!</span>
                      </button>
                  </div>
                   </div>



        </form>
    </div>
  )
}
