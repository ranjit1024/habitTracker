import Logo from "../assets/habit.png";



export function Main() {
     
  return (
   
    <div className="">
    <div className="flex justify-between gap-10 w-[100vw]">

      <div className="flex items-center gap-1 p-3 ">
        <img src={Logo} alt="" height={30} width={25} />
        <p className="text-[1em] text-gray-900 font-medium">H-Track</p>
      </div>

      <div className="p-3 ">
        <img className="hover:cursor-pointer active:rotate-10 duration-500 hover:scale-105" width="32" height="48" src="https://img.icons8.com/pulsar-gradient/48/lifecycle.png" alt="lifecycle"/>
      </div>

    </div>

    <div>
      streak 
    </div>

     
    </div>
   
  );
}
