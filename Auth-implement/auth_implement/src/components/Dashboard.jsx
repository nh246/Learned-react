
import { useAuth } from './../context/AuthContext';
function Dashboard() {

  const {currentUser} = useAuth()
  console.log("This from dashboard",currentUser)

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard