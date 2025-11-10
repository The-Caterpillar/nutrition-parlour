// To render all the notes as a list
import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
  const defaultMessage = (
    <p className="text-center text-gray-500">No notes yet! </p>
  );

  return notes.length == 0 ? (
    defaultMessage
  ) : (
    <>
      <div className="space-y-4">
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote}></Note>
        ))}
      </div>
    </>
  );
};

export default NoteList;