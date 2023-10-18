import { useState } from "react";

const Form = () => {
  let [FormObj, SetformObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  })

  const InputOnChange = (property,value) =>{
    SetformObj(prevObj=>({
        ...prevObj,
        [property]:value
    }))
  }
  return (
    <div className="container">
      <h1>Simple Form</h1>
      <br />
      <form>
        <input onChange={()=>{InputOnChange()}} value={FormObj.fName} placeholder="First name" />
        <br />
        <input value={FormObj.lName}placeholder="Last name" />
        <br />
        <select value={FormObj.city}>
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
        </select>
        <br />
        <input checked={FormObj.gender==="Male"}type="radio" name="gender"/> Male 
        <input checked={FormObj.gender==="Female"} type="radio" name="gender"/> Female
   
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
