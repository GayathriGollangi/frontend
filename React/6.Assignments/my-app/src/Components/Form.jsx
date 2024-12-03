import React from 'react'
import style from './Form.module.css'
const Form = () => {
  return (
    <div className={style.container}>
        <h3>React Forms</h3>
      <form action="">

        <div className={style.names}>
            <div>
        <label for="name">First Name</label><br/>
        <input type="text" id="name" name="firstName"/> <br />
        </div>
        <div>
        <label for="name">Last Name</label><br/>
        <input type="text" id="lastName" name="lastName"/>
        </div>
        </div>
        <div className={style.email}>
            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email"/>
        </div>
        <div className={style.phones}>
            <div>
            <label for="phone">Phone</label><br/>
            <input type="tel" id="phone" name="phone"/>
            </div>
            <div>
                <label>Country</label>
                <select name="country" id="" className={style.country}>
                    <option value="select">Select a country</option>
                    <option value="india">India</option>
                    <option value="china">China</option>
                    <option value="USA">USA</option>
                </select>
            </div>
            </div>
            <div className={style.details}>
                <div>
                <label for="start">Birth date:</label>
                <br />
                <input type="date" id="start"  />
                </div>
                <div>
                <label for="avatar">Avatar</label>
                <br />
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </div>

            <div>
                <label for="message">
                    select if Married 
                    <input type="checkbox" name="isMarried" id="isMarried" />
                    </label><br/>
            
            </div>
            <div className={style.gender}>
            
            <input type="radio" id="male" name="gender" value="male" />
            <label>Male</label>

            <input type="radio" id="female" name="gender" value="female" />
            <label>Female</label>

            <input type="radio" id="other" name="gender" value="other" />
            <label>Other</label>

        </div>
        
        <input type="submit" value="submit" className={style["submit-btn"]} />
      </form>
    </div>
  )
}

export default Form
