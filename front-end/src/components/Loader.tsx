import Lottie from "lottie-react"
import loader from "../assets/Animation - 1748491402293.json"
export function Loader(){
 return <div className="h-[100vh] w-[100vw]  absolute top-0 z-10 bg-gray-200/60 flex items-center justify-center">
        <Lottie animationData={loader} loop={true} size={10} className="size-40"/>
    </div>
}