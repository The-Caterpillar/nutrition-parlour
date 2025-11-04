import { useState } from "react";
import NoteForm from "./NoteForm";
import './NoteForm.css'
import NoteList from "./NoteList";
function Notes(){

    const [notes,setNotes] = useState([]);

    return<div className="notes-body">
        <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
           <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
            <NoteForm notes={notes} setNotes={setNotes}/>

            <NoteList notes={notes} />
        </div>
    </div>
}

export default Notes;