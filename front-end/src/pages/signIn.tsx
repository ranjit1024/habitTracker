
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/logo";
export function Signin() {
  const navigate = useNavigate();
  return (
    <>
     <div className="absolute">
        <Logo/>
        
        </div>
      <div className="h-[100vh]  flex justify-between items-center font-mona">
        <div className="w-[60%] max-md:hidden h-full bg-center bg-cover bg-no-repeat bg-[url(https://cdn.leonardo.ai/users/a2f14ac8-df2c-4da0-aef1-7ecf6e45fdce/generations/88e56ba9-28c3-4342-93a6-cceca41e354a/Leonardo_Phoenix_10_A_visually_appealing_onemonth_calendar_wit_0.jpg)]">

 
        </div>
        <div className="bg-white max-md:w-[100vw] flex  flex-col px-7 py-10 rounded-md  w-[50%] ">
        <p className="text-center mb-5 text-[1.7rem] text-[#111c1d] font-medium">Sign In</p>    
    <div className="w-full mb-5">
  <div className="relative w-full">    
    <label htmlFor="input" className="text-sm ml-1 text-green-950">Email</label>        
    <input type="text" className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="email@gmail.com" />

  </div>
</div>

          <div className="w-full">
            <div className="relative">
                <label htmlFor="input" className="text-sm ml-1 text-green-950">Password</label>
              <input
                type="password"
                className="w-full pl-3 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-600 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Your password"
              />
              <p className="flex items-center !mt-3 text-xs text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 !mr-1.5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </p>
            </div>
          </div>
          <div className="text-center mt-5 w-full">
          <button className="!rounded-md  bg-[#21a510] w-full  py-2 px border border-transparent text-center !text-sm !text-white transition-all  hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer " type="button">
  Sing in
</button>
          </div>
        <p className="text-sm !mt-5 font-medium text-gray-700 ml-1">Not a User? <span className="text-blue-600 hover:text-blue-700 hover:underline underline-offset-2 hover:cursor-pointer" onClick={()=>{
            navigate('/signup')
        }}>Try Now</span></p>
        </div>
      </div>
    </>
  );
}
