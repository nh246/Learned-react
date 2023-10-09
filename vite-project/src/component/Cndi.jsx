

// Conditional statement in react


const LoginStatusBTn=(status)=>{

  if(status) {
    return <button>Logout btn</button>
  }
  else{
    return <button>Login btn</button>
  }
}


const Cndi = () => {

  
return (
  <div>
    <h1>Login status</h1>
    {LoginStatusBTn(false)}
  </div>
)
};

export default Cndi;
