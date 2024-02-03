import laptop from "../assets/laptop.jpg";

function Experts() {
  return (
    <div className="max-w-[1240px] mx-auto my-10 md:grid grid-cols-2">
      <div className=" container  col-span-1 md:w-[80%]">
        <img className="fit inline" src={laptop} alt="laptop" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center p-2">
        <h2 className="text-[#00df9a] font-bold text-2xl my-2">LEARN FROM EXPERTS</h2>
        <p className="my-2 font-medium text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum cumque eum vero quasi! Iste veniam hic inventore laudantium omnis fugiat distinctio earum?</p>
        <button className="bg-black text-white p-3 rounded my-2 w-[30%] font-bold center">Get Started</button>
      </div>
    </div>
  );
}

export default Experts;
