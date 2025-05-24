import logo from "../assets/habit.png"
export function Logo(){
    return <>
    <div className="font-mona p-5">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" height={40} width={40} />
          <p className="text-[1.5rem] text-gray-900 font-medium">H-Track</p>
        </div>
      </div>
    </>
}