function Header() {
  return (
    <header className="bg-yellow-300 flex justify-between ">
      <div className="flex flex-wrap flex-row justify-between">
        <div className="bg-green-300">
          <h1 className="font-bold text-xl">
            Todo <span className="text-sky-500 font-bold ">Manager</span>
          </h1>
        </div>
        <nav className="flex space-4">
          <ul className="flex bg-pink-400">
            <li>Add Task</li>
            <li>All Task</li>
            <li>Complete Task</li>
            <li>
              <button>Log Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
