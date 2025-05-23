import "./App.css";
import logo from "./assets/habit.png";
import calander from "./assets/calander.png"
import { motion } from "motion/react"

function App() {
  const pColor = "#14a901";
  let arrya = ["M","T","W","T","F","S","S"]
  return (
    <>
      <div className="bg-gray-50 font-mona p-5">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" height={40} width={40} />
            <p className="text-[1.5rem] text-gray-900 font-medium">H-Track</p>
          </div>

          <div className="hero-conent relative flex items-center flex-col justify-center px-20 pt-20 pb-10">
            {/* <----adding incons ---------> */}

            <div className="bg-white flex items-center gap-1 text-sm font-medium py-1 px-3 shadow-2xl border-1 border-gray-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="darkgreen"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>

              <p className="text-green-800">Track for best</p>
            </div>

            <motion.div
            initial={{
              y:20,
              opacity:0
              
            }}
            animate={{
              y:0,
              opacity:1
            }}
            transition={{
              duration:1,
              
            }}
              className="
            
              flex flex-col items-center  h-[100] pt-6  font-[600] text-center  text-[#093125]"
            >
              <p className="text-[5.4rem] z-10 relative ">
                {" "}
                <div className="bg-[#cff709a9] h-6 w-93 -z-1  absolute right-25 bottom-5 "></div>{" "}
                <div className=" h-6 w-93 -z-1  absolute top-2 -left-3 opacity-60 ">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/hands/100/positive-dynamic.png"
                    alt="positive-dynamic"
                  />
                </div>{" "}
                Single platform to{" "}
              </p>

              <p className="-mt-7 z-0 text-[5.4rem] relative">
                <div className="absolute -right-3 opacity-60 top-10 -z-1 ">
                  <img
                    width="30"
                    height="50"
                    src="https://img.icons8.com/officel/50/goal.png"
                    alt="goal"
                  />
                </div>
                manage and track habits
              </p>
            </motion.div>

            <motion.div initial={{
              scale:0
            }}
            animate={{
              scale:1
            }} 
            transition={{
              delay:0.8,
              duration:0.8
            }} className="px-10 pt-6 text-center text-[1.3rem] font-normal  text-green-950">
              <p>
                H-Track helps you to take control and effectively track and
                manage the process of breaking bad habits or adopting new ones.
                Start your transformation today!
              </p>
            </motion.div>

            <motion.div initial={{
              
              opacity:0
            }} 
            animate={{
            
              opacity:1
            }}
            transition={{
              delay:1.5,
              duration:0.8
            }}
            className="pt-10">
              <motion.button 
          
              whileHover={{
                scale:1.1,
              }} 
              
                className=" px-5 py-2 text-white bg-[#21a510] hover:cursor-pointer  rounded-xl font-medium ">
                Get Started
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      <div className=" pt-35 flex items-center flex-col justify-center font-mona">
        <div className="bg-white flex items-center gap-2 text-sm font-medium py-1 px-3 shadow-2xl border-1 border-gray-300 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="darkgreen"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>

          <p className="text-green-800">FEATURE</p>

          
        </div>

        <div className="pt-6 pb-20  flex items-center justify-center text-center px-60 flex-col ">
           <p className="leading-16 text-green-950 text-[3rem] text-center  font-medium">Adapt good habits and break new ones using a scientific way</p>
           <p className="pt-7 text-green-950 text-[1.2rem]  font-normal">You can break any habit and adopt a new one in just 21 days. Commit to the process, and you will see significant changes in your life.</p>
        </div>

    <div className="bg-[#f1f4f1] mt-10 w-[90%]  rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm">
      {/* Text Section */}
      <div className=" mb-10 px-5 w-70%">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Track Progress
        </h2>
        <p className="text-gray-700 text-[1.2rem] mb-10 mt-4 pr-10">
         H-Track enables you to track your progress with precision, empowering you to break bad habits and adopt good ones. This is essential for achieving your personal growth and success.
        </p>
        <button className="bg-green-700 hover:cursor-pointer hover:bg-green-800 text-white px-5 py-2 rounded-md shadow-md mt-10">
          Explore all
        </button>
      </div>

      {/* Chart Section */}
      <div className=" flex justify-center  w-full   ">
        <img src={calander}  className="size-full" />
      </div>
    </div>

    <div className="mt-12 w-[90%] flex justify-between items-center gap-5">
      <div className="bg-[#f1f4f1] flex w-full flex-col rounded-xl">
       <div className="p-10 text-center flex flex-col justify-center items-center w-full">
        <p className="text-green-950 text-center text-[1.6rem] font-semibold">Streak Manager</p>
        <p className={`mt-5 text-[1.1rem]  text-gray-950`}>H-Track offers streak management to keep you motivated and helps you stay on the right path.</p>
       </div>

       <div className="bg-white p-8 flex justify-center flex-col items-center m-1 rounded-xl ">
        <img width="100" height="100" src="https://img.icons8.com/plasticine/100/medal2-1.png" alt="medal2-1"/>
        <div className="bg-white   flex items-center justify-center gap-6  py-[3%] px-5 mx-2 w-[100%]">
          
          
          {
        arrya.map(item=>(
          <div>
            <div className="text-center mb-3 font-bold text-xl text-gray-800/50">
              {item}
              </div>
          <div className="w-10 h-10 bg-[#fd9503] rounded-full flex items-center justify-center  ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="white" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

          </div>
          </div>
        ))
       }
       
        </div>


        <p className="mt-2 font-semibold text-xl text-gray-600">7 days of streak!</p>
        <p className="mt-2 text-gray-900 font-medium">You'r are makeing good progress</p>
        </div>
       
      </div>
      
       
        <div className="bg-[#f1f4f1] flex w-full flex-col rounded-xl">
       <div className="p-10 text-center flex flex-col justify-center items-center w-full">
        <p className="text-green-950 text-center text-[1.6rem] font-semibold">Dynamic Dashboard</p>
        <p className={`mt-5 text-[1.1rem]  text-gray-950`}>H-Track delivers a powerful Dynamic Dashboard that enables you to monitor your progress and take decisive action.</p>
       </div>

       <div className="bg-white   flex justify-center flex-col items-center m-1 rounded-xl ">
        


       <div className="flex  items-center justify-center ">
         
       <img width={490}  src="https://img.freepik.com/premium-vector/vector-illustration-study-concept-market-expansion-financial-report-investment-data_675567-9237.jpg"/>
       </div>
        
        


        
        </div>
       
      </div>
    </div>
    
    

      </div>

      <div>
        fsdf
      </div>
    </>
  );
}

export default App;
