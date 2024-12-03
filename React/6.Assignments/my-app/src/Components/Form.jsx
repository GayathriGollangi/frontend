import React, { useEffect, useRef, useState } from 'react'
import style from './Form.module.css'
import DisplayData from './DisplayData';


const Form = () => {
    const [data,setData] = useState(null);
    const [storageData,setStorageData] = useState({})
    const formRef = useRef({
      firstName: null,
      lastName:null,
      email:null,
      phnNum:null,
      country:null,
      birthDate:null,
      image:null,
      isMarried:false,
      gender:null
    });

    const handleSubmit =(event)=>{
      event.preventDefault();
      // console.log(event);
     
      let firstNameVal = formRef.current.firstName.value;
      let lastNameVal = formRef.current.lastName.value;
      let emailVal = formRef.current.email.value;
      let phnNumVal = formRef.current.phnNum.value;
      let countryVal = formRef.current.country.value;
      let birthDateVal = formRef.current.birthDate.value;
      let imageVal = formRef.current.avatar.value;
      let isMarriedVal = formRef.current.isMarried.checked;
      let genderVal = formRef.current.gender.value;
      // console.log("hi");
      console.log(formRef);
      
      setData({
          firstName: firstNameVal,
          lastName:lastNameVal,
          email:emailVal,
          phnNum:phnNumVal,
          country:countryVal,
          birthDate:birthDateVal,
          image:imageVal,
          isMarried:isMarriedVal,
          gender:genderVal
          
      });
      formRef.current.firstName.value = "";
      formRef.current.lastName.value = "";
      formRef.current.email.value = "";
      formRef.current.phnNum.value = "";
      formRef.current.country.value = "";
      formRef.current.birthDate.value = "";
      formRef.current.avatar.value = "";
      formRef.current.isMarried.checked = false;  
      formRef.current.gender.value = "";

    }
    useEffect(() => {
      localStorage.setItem('formData', JSON.stringify(data));
    
      let items = JSON.parse(localStorage.getItem('formData'));
      if(items){
        setStorageData(items);
      }
    }, [data]);
    console.log(data);
    console.log(storageData);
    
  return (
    <div className={style.container}>
        <h3>React Forms</h3>
      <form action="" onSubmit={handleSubmit}>

        <div className={style.names}>
            <div>
        <label>First Name</label><br/>
        <input type="text" id="firstName" name="firstName" ref={(ele)=>{
          formRef.current.firstName = ele;
        }}/> <br />
        </div>
        <div>
        <label>Last Name</label><br/>
        <input type="text" id="lastName" name="lastName" ref={(ele)=>{
          formRef.current.lastName = ele;
        }}/>
        </div>
        </div>
        <div className={style.email}>
            <label>Email</label><br/>
            <input type="email" id="email" name="email" ref={(ele)=>{
          formRef.current.email = ele;
        }}/>
        </div>
        <div className={style.phones}>
            <div>
            <label>Phone</label><br/>
            <input type="tel" id="phnNum" name="phnNum" ref={(ele)=>{
          formRef.current.phnNum = ele;
        }}/>
            </div>
            <div>
                <label>Country</label>
                <select name="country" id="country" className={style.country} ref={(ele)=>{
          formRef.current.country = ele;
        }}>
                    <option value="select">Select a country</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="USA">USA</option>
                </select>
            </div>
            </div>
            <div className={style.details}>
                <div>
                <label>Birth date:</label>
                <br />
                <input type="date" id="birthDate" name='birthDate' ref={(ele)=>{
          formRef.current.birthDate = ele;
        }}/>
                </div>
                <div>
                <label>Avatar</label>
                <br />
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" ref={(ele)=>{
          formRef.current.avatar = ele;
        }}/>
                </div>
            </div>

            <div>
                <label>
                    select if Married 
                    <input type="checkbox" name="isMarried" id="isMarried" value="yes" ref={(ele)=>{
          formRef.current.isMarried = ele;
        }}/>
                    </label><br/>
            
            </div>
            <div className={style.gender}>
            
            <input type="radio" id="male" name="gender" value="male" ref={(ele)=>{
          formRef.current.gender = ele;
        }}/>
            <label>Male</label>

            <input type="radio" id="female" name="gender" value="female"  ref={(ele)=>{
          formRef.current.gender = ele;
        }}/>
            <label>Female</label>

            <input type="radio" id="other" name="gender" value="other" ref={(ele)=>{
          formRef.current.gender = ele;
        }}/>
            <label>Other</label>

        </div>
        
        <input type="submit" value="submit" className={style["submit-btn"]} />
      </form>
      <div>
      {
        <DisplayData storageData ={storageData}/>
      }
      </div>
    </div>

  )
}

export default Form
