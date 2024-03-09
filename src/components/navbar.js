import React from "react"

export default function NavBar(){
    return(
        <div className="border flex items-center justify-left p-[10px] border-black w-[100vw] h-[9.5vh] text-white bg-black max-sm:h-[7vh] max-lg:h-[6vh]">
            <h1 className='font-bold text-[1.2vw] mt-[0vw] max-sm:text-[1.7vh] max-lg:text-[1.5vh] '>My Weather App</h1>
        </div>
    )
}