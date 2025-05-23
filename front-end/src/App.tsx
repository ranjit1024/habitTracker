import "./App.css";
import logo from "./assets/habit.png";

function App() {
  // #14a901

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

            <div
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
            </div>

            <div className="px-10 pt-6 text-center text-[1.3rem] font-normal  text-green-950">
              <p>
                H-Track helps you to take control and effectively track and
                manage the process of breaking bad habits or adopting new ones.
                Start your transformation today!
              </p>
            </div>

            <div className="pt-10">
              <button className=" px-5 py-2 text-white bg-[#21a510] hover:cursor-pointer  rounded-xl font-medium ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-14 flex items-center flex-col justify-center font-mona">
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

    <div className="bg-[#f1f4f1] mt-10 w-[90%]  rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm">
      {/* Text Section */}
      <div className="max-w-lg mb-10 px-5">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Track Progress
        </h2>
        <p className="text-gray-700 mb-10 mt-2">
         H-Track helps you monitor your progress, motivating you to break bad habits and develop good ones, setting the stage for your personal growth.
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md shadow-md mt-14">
          Explore all
        </button>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg p-4 w-full md:w-1/2">
        
      </div>
    </div>

      </div>
    </>
  );
}

export default App;
