import { Link } from "react-router";
import Logout from "./components/Logout";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="p-5 container mx-auto ">
          <nav className="py-28 mt-16 bg-slate-400 rounded-lg">
            <ul className="flex items-center space-x-4 justify-center">
              <li>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </nav>
          <Logout />
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
