import { TbMenu2 } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Header() {

  const [toggle , setToggle] = useState(false)
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] items-center py-2 mx-auto flex justify-between ">
        {/* Logo section  */}
        <div className="text-3xl font-bold">
            WsClub Tech 
        </div>

        {/* Menu toggle  */}
        {
          toggle ? <TbMenu2 onClick={()=>setToggle(!toggle)}
          className="text-white text-2xl  md:hidden block"/> 
          : 
          <IoCloseSharp onClick={()=>setToggle(!toggle)} className="text-white text-2xl  md:hidden block" />
        }
        

        {/* nav menu  */}

        <ul className="hidden md:flex gap-10 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        {/* responsive menu */}
        <ul className={`duration-300 bg-black w-full min-h-fit md:hidden fixed top-[84px] text-white ${toggle ? "left-[-100%] " : " left-[0]"  }`} >
            <li className="p-4">Home</li>
            <li className="p-4">Company</li>
            <li className="p-4">Resources</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
        </ul>

      </div>
    </div>
  );
}

export default Header;
