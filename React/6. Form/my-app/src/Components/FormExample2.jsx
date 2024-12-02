import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "no",
  favColors:[
    {color:"red",checked:false},
    {color:"blue",checked:false},
    {color:"green",checked:false},

  ]
};
const FormExample2 = () => {
    const [formState, setFormState] = useState(initialValue);

  const handleChange = (event,index) => {
    const { name, value ,checked} = event.target;

    if(name === "favColors"){
        const newFavColors = [...formState.favColors];
        newFavColors[index].checked = checked;
    }
    else{
        setFormState({ ...formState, [name]: value });
        }
    
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

        <br />
        {
            formState.favColors.map((colorObj,index)=>{
                return(
                <label htmlFor="" key={index} >
                    <input type="checkbox" name="favColors" checked={colorObj.checked} onChange={(event)=>{
                        handleChange(event,index)
                    }}/>{colorObj.color}
                </label>
            )})
        }

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormExample2;
