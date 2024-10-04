import "./App.css";
import { useState, useEffect } from "react";
import Country from './Components/Country/Country';
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);
  const countryStyleBox = {
    margin: '3px',
    padding: '3px',
    border: '1px solid blue',
  };
  const handleCountry = (country)=>{
    console.log("country added" ,country)
  }
  return (
    <div>
      <h1>This is basic data</h1>
      <h1>Countries loades : {countries.length}</h1>
    
        {countries.map((country) => (
          <Country style={countryStyleBox} country ={country} handleCountry={handleCountry} ></Country>
        ))}
      
    </div>
  );
}

export default App;
