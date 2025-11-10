// The main app for the notes page

import { useEffect, useState } from "react";
import NoteForm from "./NoteForm";
import "./NoteForm.css";
import NoteList from "./NoteList";

function Notes() {
  const [notes, setNotes] = useState(()=>{
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [] ;
  });

  useEffect(()=> {
    localStorage.setItem('notes',JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you wanna delete this note?"
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="notes-body">
      <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
        <NoteForm notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default Notes;
