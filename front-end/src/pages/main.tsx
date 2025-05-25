import Logo from "../assets/habit.png";
import { Calendar } from "rsuite";
import '../anoter.css'
import { Completed } from "../components/completed";
import { motion } from "motion/react";

export function Main() {
  let arrya = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="bg-green-50 h-[100%]  font-mona">
      <div className="flex justify-between px-3 py-3 ">
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

      <div className="px-10 py-10  mt-5  flex  justify-around ">
        <div>
          <motion.div
          initial={{
            x:-100,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.8
          }}
            className="pl-5 pr-10  bg-white rounded-xl shadow-sm w-[97%] h-fit mb-5"
            id="streak-manager"
          >
            <div className="flex flex-col">
              <div className="flex items-center text-start gap-2 mb-2 -ml-1 justify-start ">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/plasticine/100/medal2-1.png"
                  alt="medal2-1"
                />
                <div>
                  <p className="text-5xl font-semibold mb-1 text-neutral-600">
                    19
                  </p>
                  <p className="text-[1.1rem] font-semibold text-gray-400">
                    Days streak
                  </p>
                </div>
              </div>
              <div className="bg-white  p-4 flex gap-10 ">
                {arrya.map((item) => (
                  <div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-green-400 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="4"
                        stroke="white"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div className="text-center mt-3 font-semibold text-md text-neutral-500">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
           initial={{
            y:100,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.8
          }}
            className=" bg-white rounded-xl shadow-sm w-[97%] h-fit"
            
          >
            <div className="p-5">
              <p className="font-normal text-2xl text-black">Goal Progress</p>
              <div className="my-8 bg-green-200 h-2 rounded-2xl z-0">
                <div className="bg-green-500 w-[10%] relative rounded-2xl h-full">
                  <div className="bg-green-500 border-3 border-gray-100 -top-1 absolute left-10 w-4 h-4  rounded-full "></div>
                </div>
              </div>
              <p className="mt-4 text-[1.1rem] text-gray-600">
                You’re{" "}
                <span className="text-green-600 font-semibold">
                  ahead of pace
                </span>{" "}
                and should reach your goal{" "}
                <span className="font-medium text-gray-900">
                  {" "}
                  ahead of schedule.
                </span>
              </p>
            </div>
          </motion.div>

        </div>

        <div>
          <motion.div
           initial={{
            x:100,
            opacity:0
          }}
          animate={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.8
          }}
            className="bg-white p-5 h-fit  shadow-sm flex flex-col items-center rounded-2xl"
            id="calnader"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Calendar compact />
            </div>
          </motion.div>

          <motion.div
           initial={{
            y:100,
            opacity:0
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.8
          }}
          className="bg-white p-5 h-fit  shadow-sm   rounded-2xl mt-5">
            <p className="font-medium text-[1rem] text-center text-gray-800">All Selected Habits: Your Path to <span className="text-lg text-green-600 font-medium">Transformation!</span></p>

            <div className="mt-5 p-3 ">
              
                <Completed/>
                <Completed/>
                <Completed/>
            
                
             
              
            
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}
