import Logo from "../assets/habit.png";
export function Add(){
    return (
        <div className="bg-green-50 h-[100vh]">
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
            
        </div>
    )
}