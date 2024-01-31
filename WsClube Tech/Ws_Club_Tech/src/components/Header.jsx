import { TbMenu2 } from "react-icons/tb";
function Header() {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] items-center py-2 mx-auto flex justify-between ">
        <div className="text-3xl font-bold">
            WsClub Tech 
        </div>
        <TbMenu2 />
        <ul className="hidden md:flex gap-10 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
