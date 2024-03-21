import React from 'react'
import "./form.css"
const Forms = ({nome,idade, email}) => {
  return (
    <form>
    <label> {nome} {idade} {email}
      <input type="text" />
    </label>
  </form>
  )
}

export default Forms
