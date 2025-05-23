import "./App.css";
import logo from "./assets/habit.png";
import arrow from "./assets/arrow.png"
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

          <div className="hero-conent relative flex items-center flex-col justify-center p-20">
            {/* <----adding incons ---------> */}
            {/* <div className="absolute bottom-10 right-30 ">
              <img src={arrow} alt="" height={30} width={30} className="-rotate-20" />
              <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-habit-lifestyles-flaticons-lineal-color-flat-icons.png" alt="external-habit-lifestyles-flaticons-lineal-color-flat-icons"/>
            </div> */}
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

            <div className="
            
            w-[100%]  flex flex-col items-center   h-[100] py-6 font-[600] text-center  text-[#093125]">
              <p className="text-[5.4rem] z-10 relative"> <div className="bg-[#cff709a9] h-6 w-93 -z-1  absolute right-25 bottom-5 "></div>Single platform to </p>
              <p className="-mt-5 text-[5rem]">manage and track habits</p>
              
            </div>
          </div>

          {/* <div className="relative h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
