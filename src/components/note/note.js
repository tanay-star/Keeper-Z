import React from 'react'
import './note.styles.css'

const Note = ({ title, content }) => {
  return (
    <div className="note">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  )
}

export default Note
