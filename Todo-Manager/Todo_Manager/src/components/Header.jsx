function Header() {
  return (
    <header className=" flex justify-between mt-4">
      {/* This is logo  */}
      <div className="mt-4 ml-4 p-1">
         <h1 className="flex text-2xl font-bold">Todo <span className="text-blue-600 pl-1">Manager</span></h1>
      </div>
      {/* Pages section  */}
      <nav className=" flex p-1 mr-10">
        <ul className="flex gap-7 mr-10 mt-4 font-semibold">
          <li className=" hover:text-blue-600" >Add Task</li>
          <li className=" hover:text-blue-600" >All Tasks</li>
          <li className=" hover:text-blue-600" >Completed</li>
          <li className=" hover:text-blue-600 font-bold " >
            <button className="text-white bg-blue-600 px-4 py-1 rounded-md hover:bg-blue-700">Login</button>
            </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
