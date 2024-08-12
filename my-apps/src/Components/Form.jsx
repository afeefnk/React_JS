import React from 'react';
import "./Form.css";

const Form = () => {
  return (
    <div className='container'>
        <h1>Form in React</h1>
        <form>
            <label htmlFor="firstname">Firstmame</label>
            <input type="text" placeholder='Enter first name' name='firstname' />
            <label htmlFor="lastname">Lastname</label>
            <input type="text" placeholder='Enter last name' name='lastname' />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter email' name='email'/>
            <label htmlFor="contact">Contact</label>
            <input type="email" placeholder='Enter phone' name='contact' />
            <label htmlFor="gender">Gender</label>
            <input type="radio" name='gender' />Male
            <input type="radio" name='gender' />Female
            <input type="radio" name='gender' />Other
            <label htmlFor="subject">Subject</label>
            <select name="subject" id="subject">
                <option value="Math">Math</option>
                <option value="Physics">Physics</option>
                <option value="English">English</option>
            </select>
            <button type='button'>Reset</button>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
