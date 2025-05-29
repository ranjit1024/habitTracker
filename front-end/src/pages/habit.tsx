import Logo from "../assets/habit.png";
import "../App.css"
import 'rsuite/dist/rsuite.min.css'; 
import { DateRangePicker } from "rsuite";

import axios from "axios";

export function Add() {
  return (
    <div className="bg-green-50 h-[100vh] max-md:w-[100vw] max-md:h-[100%] font-mona ">
       <div className="flex justify-between px-3 py-3 ">
        <div className="flex items-center gap-1    ">
          <img src={Logo} alt="" height={30} width={30} />
          <p className="text-[1.2rem] text-gray-900 font-medium">H-Track</p>
        </div>
.
        <div className="hover:cursor-pointer hover:scale-105 active:bg-green-100 rounded-2xl">
          <img
            width="32"
            height="48"
            src="https://img.icons8.com/pulsar-line/48/lifecycle.png"
            alt="lifecycle"
          />
        </div>
      </div>

      <div className="!p-10 flex items-center flex-col ">
    <p className="text-3xl !mb-5 text-green-900/70 font-medium">Start Habit</p>
        <div className="bg-white p-5 rounded-md shadow-sm   flex gap-5  items-center max-md:flex-wrap max-md:w-[100vw] max-md:justify-center ">
          <div className="w-fit">
            <div className="relative ">
    
              <input
                type="text"
                className="w-[40vw] pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="Start Habit"
              />


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

            </div>
          </div>
          
      <div className="w-fit max-md:w-fit max-lg:flex max-lg:justify-center">
            <DateRangePicker size="md" onOk={(e)=>{
              console.log(e)
            
            }} shouldDisableDate={(date:Date)=>{
                const today = new Date();
                today.setHours(0,0,0,0);
                return date < today
            }}/>
     
      </div>
      <div className="w-fit">
        <button className="px-7 py-2 bg-green-500 !rounded-md !text-white !text-[1rem] hover:scale-104 " onClick={async()=>{
          // const token = (localStorage.getItem('token'))
          // console.log(token)
          // console.log(token)
          // if(!token){
          //   console.error("not token")
          //   return;
          // }
          const reponse = await axios.post('http://localhost:8787/api/v1/habit/add', {
            token:localStorage.getItem("token")
          });
          console.log(reponse)
        
        }}>Follow Habit</button>
      </div>
 
     
        </div>

      </div> 

    </div>
  );
}

export function Break() {
  return (
    <div className="bg-green-50 h-[100vh] font-mona">
      <div className="flex justify-between px-3 py-3  ">
        <div className="flex items-center gap-1    ">
          <img src={Logo} alt="" height={30} width={30} />
          <p className="text-[1.2rem] text-gray-900 font-medium">H-Track</p>
        </div>

        <div className="hover:cursor-pointer hover:scale-105 active:bg-green-100 rounded-2xl">
          <img
            width="32"
            height="48"
            src="https://img.icons8.com/pulsar-line/48/lifecycle.png"
            alt="lifecycle"
          />
        </div>
      </div>

      <div className="!p-10 flex items-center flex-col ">
    <p className="text-3xl !mb-5 text-red-900/70 font-medium">Break Habit</p>
        <div className="bg-white p-5 rounded-md shadow-sm   flex gap-5  items-center max-md:flex-wrap max-md:w-[100vw] max-md:h-[100vh] ">
          <div className="w-fit">
            <div className="relative ">
    
              <input
                type="text"
                className="w-[40vw] pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300  focus:shadow"
                placeholder="Break Habit"
              />


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute w-5 h-5 top-2.5 right-2.5 text-slate-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
</svg>

            </div>
          </div>
          
      <div className="w-fit">
          <DateRangePicker size="md" onOk={(e)=>{
              console.log(e)
            
            }} shouldDisableDate={(date:Date)=>{
                const today = new Date();
                today.setHours(0,0,0,0);
                return date < today
            }}/>
      </div>
      <div className="w-fit">
        <button className="px-7 py-2 bg-red-500 !rounded-md !text-white !text-[1rem] hover:scale-104 ">Break Habit</button>
      </div>
 
     
        </div>

      </div>


    </div>
  );
}
