import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "no",
  
};
const Form = () => {
    const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
        
    
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formState);
    setFormState(initialValue);
  }
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="userName"
          value={formState.userName}
        />
        <select
          onChange={handleChange}
          name="country"
          value={formState.country}
        >
          <option value="">Select</option>
          <option value="india">India</option>
          <option value="china">china</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="">
          <input
            type="radio"
            name="isMarried"
            onChange={handleChange}
            value="yes"
            checked={formState.isMarried === "yes"}
          />
          yes
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="isMarried"
            onChange={handleChange}
            value="no"
            checked = {formState.isMarried === 'no'}
          />
          no
        </label>


        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
