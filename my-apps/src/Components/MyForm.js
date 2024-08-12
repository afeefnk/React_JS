import React from 'react'

const MyForm = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" placeholder='Enter first name' name='firstname' />
      </form>
    </div>
  )
}

export default MyForm
