import logo from "../assets/habit.png";
import calander from "../assets/calander.png";
import { motion } from "motion/react";
import {  useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";
export function LandingPage() {
  const navigate = useNavigate();
  let arrya = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <>
      <>
      <div className="bg-gray-50">
      <Logo/>

      </div>
        <div className="bg-gray-50 font-mona p-5 h-[]">
          
            
            <div className="hero-conent relative flex items-center flex-col justify-center px-20 h-[70vh] pb-10">
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
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className="
            
              flex flex-col items-center  h-[100] pt-6  font-[600] text-center  text-[#093125]"
              >
                <p className="text-[5.4rem] z-1 relative ">
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

                <p className="-mt-7 z-10 text-[5.4rem] relative">
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

              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="mx-10  mt-6 text-center text-[1.3rem] font-normal  text-green-950"
              >
                <p>
                  H-Track helps you to take control and effectively track and
                  manage the process of breaking bad habits or adopting new
                  ones. Start your transformation today!
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.8,
                }}
                className="pt-10"
              >
                <motion.button
                 
                  onClick={() => {
                    navigate("/signIn");
                  }}
                  className=" px-5 py-2 text-white bg-[#21a510] hover:cursor-pointer  rounded-xl font-medium "
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
        
        </div>

        <div className=" pt-25 flex items-center flex-col justify-center font-mona">
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

          <motion.div
            initial={{
              transform: "skewX(25deg)",
              opacity: 0,
            }}
            whileInView={{
              transform: "skewX(0deg)",
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="pt-6 pb-20  flex items-center justify-center text-center px-60 flex-col "
          >
            <p className="leading-16 text-green-950 text-[3rem] text-center  font-medium">
              Adapt good habits and break new ones using a scientific way
            </p>
            <p className="pt-7 text-green-950 text-[1.2rem]  font-normal">
              You can break any habit and adopt a new one in just 21 days.
              Commit to the process, and you will see significant changes in
              your life.
            </p>
          </motion.div>

          <motion.div
            initial={{
              y: 50,

              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="bg-[#f1f4f1] mt-10 w-[90%]  rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm"
          >
            {/* Text Section */}
            <div className=" mb-10 px-5 w-70%">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Track Progress
              </h2>
              <p className="text-gray-700 text-[1.2rem] mb-10 mt-4 pr-10">
                H-Track enables you to track your progress with precision,
                empowering you to break bad habits and adopt good ones. This is
                essential for achieving your personal growth and success.
              </p>
              <button
                onClick={() => {
                  navigate("/signIn");
                }}
                className="bg-green-700 hover:cursor-pointer hover:bg-green-800 text-white px-5 py-2 rounded-md shadow-md mt-10"
              >
                Explore all
              </button>
            </div>

            {/* Chart Section */}
            <div className=" flex justify-center  w-full   ">
              <img src={calander} className="size-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: 50,

              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="mt-12 w-[90%] flex max-md:flex-wrap justify-between items-center gap-5"
          >
            <div className="bg-[#f1f4f1] flex w-full flex-col rounded-xl">
              <div className="p-10 text-center flex flex-col justify-center items-center w-full">
                <p className="text-green-950 text-center text-[1.6rem] font-semibold">
                  Streak Manager
                </p>
                <p className={`mt-5 text-[1.1rem]  text-gray-950`}>
                  H-Track offers streak management to keep you motivated and
                  helps you stay on the right path.
                </p>
              </div>

              <div className="bg-white p-8 flex justify-center flex-col items-center m-1 rounded-xl ">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/plasticine/100/medal2-1.png"
                  alt="medal2-1"
                />
                <div className="bg-white   flex items-center justify-center gap-6  py-[3%] px-5 mx-2 w-[100%]">
                  {arrya.map((item) => (
                    <div>
                      <div className="text-center mb-3 font-bold text-xl text-gray-800/50">
                        {item}
                      </div>
                      <div className="w-10 h-10 bg-[#fd9503] rounded-full flex items-center justify-center  ">
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
                    </div>
                  ))}
                </div>

                <p className="mt-2 font-semibold text-xl text-gray-600">
                  7 days of streak!
                </p>
                <p className="mt-2 text-gray-900 font-medium">
                  You'r are makeing good progress
                </p>
              </div>
            </div>

            <div className="bg-[#f1f4f1] flex w-full flex-col rounded-xl">
              <div className="bg-[#f1f4f1] flex w-full flex-col rounded-xl">
                <div className="p-10 text-center flex flex-col justify-center items-center w-full">
                  <p className="text-green-950 text-center text-[1.6rem] font-semibold">
                    Dynamic Dashboard
                  </p>
                  <p className={`mt-5 text-[1.1rem]  text-gray-950`}>
                    H-Track provides a dynamic dashboard that allows you to
                    monitor your progress and take appropriate action.
                  </p>
                </div>

                <div className="bg-white p-8 flex justify-center flex-col items-center m-1 rounded-xl ">
                  <div className=" object-center h-70 bg-contain bg-center bg-no-repeat  bg-[url(https://img.freepik.com/premium-vector/vector-illustration-study-concept-market-expansion-financial-report-investment-data_675567-9237.jpg)]   flex items-center justify-center gap-6  py-[3%] px-5 mx-2 w-[100%]"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#273f3c] p-10 mt-25 font-mona flex items-center justify-between">
          <div className="text-white text-[2.7rem] font-medium w-200">
            <motion.p
              initial={{
                x: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="relative"
            >
              <div className="absolute bg-[#e1fa6d] h-1 w-34 bottom-2 -left-1"></div>
              It's time to become addicted to new habits.
            </motion.p>
          </div>
          <div>
            <motion.button
              initial={{
                x: 100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              onClick={() => {
                navigate("/signIn");
              }}
              whileHover={{
                scale:1.04
              }}
              className="px-10 py-3 font-medium text-gray-900 hover:cursor-pointer bg-[#e1fa6d] rounded-2xl"
            >
              Explore H-Track
            </motion.button>
          </div>
        </div>

        <div>
          <footer className="bg-white shadow-sm dark:bg-[#111c1d] font-mona ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <a
                  href="https://flowbite.com/"
                  className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img src={logo} className="h-8" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    H-Track
                  </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline me-4 md:me-6">
                      Licensing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  H-Track™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </footer>
        </div>
      </>
    </>
  );
}
