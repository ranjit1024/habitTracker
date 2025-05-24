import Logo from "../assets/habit.png";

export function Main() {
  return (
    <>
    <div className="p-2">

      <div className="flex items-center gap-1">
        <img src={Logo} alt="" height={30} width={25} />
        <p className="text-[1em] text-gray-900 font-medium">H-Track</p>
      </div>
    </div>
    </>
  );
}
