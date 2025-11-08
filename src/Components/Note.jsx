// UI of each note, to be called inside noteList

const Note = ({ note, deleteNote }) => {
  return (
    <>
      <div
        className={`p-4 bg-white rounded-lg shadow-md border-l-4`}
        style={{
          borderLeftColor:
            note.priority === "High"
              ? "darkred"
              : note.priority === "Medium"
              ? "darkorange"
              : "green",
        }}
      >
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-gray-600">
          <strong> Category: </strong> {note.category}
        </p>
        <p className="text-sm text-gray-600">
          <strong> Priority: </strong> {note.priority}
        </p>
        <p className="text-sm text-gray-600">
          <strong> Description: </strong> {note.description}
        </p>
        <button
          onClick={() => deleteNote(note.id)}
          className="mt-3 text-red-600 cursor-pointer
                                transition hover:text-red-800"
        >
          🗑️Delete
        </button>
      </div>
    </>
  );
};

export default Note;
