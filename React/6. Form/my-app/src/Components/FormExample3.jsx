import React, { useRef } from 'react'

const FormExample3 = () => {
    const [formData, setFormData] = React.useState(null);
    const formRef =useRef({
        name: null,
        place:null,
        gender: null
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        let nameVal = formRef.current.name.value;
        let placeVal = formRef.current.place.value;
        let genderVal = formRef.current.gender.value;
        
        setFormData({
            name: nameVal,
            place: placeVal,
            gender: genderVal
        });
        formRef.current.name.value = "";
        formRef.current.place.value = "";
        formRef.current.gender.value = "";
    }
    console.log(formData);
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input type="text" id='name'  ref={(ele)=>(
        formRef.current.name = ele
      )}/> <br />
      <label htmlFor="">Place:</label>
      <input type="text" id='place' ref={(ele)=>(
        formRef.current.place = ele
      )}/> <br />
      <select id="gender" ref={(ele)=>(
        formRef.current.gender = ele
      )}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select> <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default FormExample3
