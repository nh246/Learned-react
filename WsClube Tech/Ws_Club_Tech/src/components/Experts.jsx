import laptop from "../assets/laptop.jpg";

function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 border border-black grid grid-cols-2">
      <div className=" container border border-blue-600 col-span-1 w-[80%]">
        <img className="fit" src={laptop} alt="laptop" />
      </div>
      <div className="border border-blue-600 col-span-1"></div>
    </div>
  );
}

export default Experts;
