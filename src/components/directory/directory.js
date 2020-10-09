import React from 'react'
import './directory.styles.css'
//importing components
import Note from '../note/note'
//importing the notes.js
import notes from '../../notes'

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [],
    }
  }

  componentDidMount() {
    this.setState({ notes: notes })
  }

  render() {
    return (
      <div className="directory">
        {this.state.notes.map((note) => {
          return (
            <Note key={note.key} title={note.title} content={note.content} />
          )
        })}
      </div>
    )
  }
}

export default Directory
