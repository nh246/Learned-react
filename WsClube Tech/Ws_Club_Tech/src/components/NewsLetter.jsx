function NewsLetter() {
  return (
    <div className="bg-[#2699fb] p-4 md:flex justify-between ">
      <div className="max-w-[1240px] py-[40px] mx-5 ">
        <h1 className="font-bold text-white text-[20px] md:text-[30px]">Want to learn IT Skills ?</h1>
        <p className="text-white md:text-[15px]">Sign up to our newsletter and stay up to date.</p>
      </div>
      <div className="max-w-[1240px] mx-10 ">
        <input type="text" className="p-3 mr-2 mt-4 text-slate-600 rounded " placeholder="Email"/>
        <button className="bg-black text-white p-3 rounded ">Submit</button>
        <br/>
        <p className="text-white mt-1">We care about the protection of your data.
        <br/> Read our Privacy Policy</p>
      </div>
    </div>
  );
}

export default NewsLetter;
