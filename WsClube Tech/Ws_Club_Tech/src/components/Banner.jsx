import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full md:py-[100px] py-[35px] " >

        <div className="max-w-[1240px] mx-auto text-center font-bold">
            <div className="md:text-3xl text-2xl">
                Learn with us 
            </div>
            <h2 className="text-white md:text-5xl text-3xl md:py-2 md:mt-3 mt-2">Grow with us.</h2>
            <div className="text-white md:text-2xl md:py-3 mt-2 text-1xl">Learn
            <ReactTyped
            className="pl-1"
             strings={["Web Development", "Digital Marketing" , "DEV Ops"]}
             loop = {true}
              typeSpeed={30} 
              backSpeed={30}
              />

             </div>
             <button className="bg-black text-white p-3 rounded ">Get Started</button>
        </div>

    </div>
  )
}

export default Banner