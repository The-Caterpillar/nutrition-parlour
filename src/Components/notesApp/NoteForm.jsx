// The create-note-form
import { useState } from "react";
import "./NoteForm.css";
import Button from "../Button/Button";

function NoteForm({ notes, setNotes }) {
  // const [title,setTitle] = useState('Title');
  // const [priority,setPriority] = useState('Medium');
  // const [category,setCategory] = useState('');
  // const [description,setDescription] = useState('');

  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "High",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title) return;

    if(formData.description === '')
    {
      formData.description = '---';
    }
    // Create new note object
      const newNote = { id: Date.now(), ...formData };
    // Add notes to state
      setNotes([newNote, ...notes]);

    // reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "High",
      description: "",
    });
  };

  return (
    <>
      <button
        className=" w-full py-2 rounded-lg cursor-pointer
                          bg-gray-100 hover:bg-purple-200
                          border-gray-300 hover:border-purple-300
                          text-purple-800 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Hide ❌" : " Create ➕"}
      </button>

      {/* CREATE NOTE FORM:  */}
      {isFormVisible ? (
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title
            </label>
            <input
              name="title"
              placeholder="title"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="priority" className="block font-semibold">
              Priority
            </label>
            <select
              name="priority"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value={"High"}>🔴 High</option>
              <option value={"Medium"}>🟠 Medium</option>
              <option value={"Low"}>🟢 Low</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              name="category"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value={"Work"}>🏢 Work</option>
              <option value={"Personal"}>🏡 Personal</option>
              <option value={"Ideas"}>💡Ideas</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <Button
            onClick={handleSubmit}
            className="hover:bg-purple-600 cursor-pointer w-full bg-purple-500 text-white py-2 rounded-lg "
            disabled={formData.title === "" || formData.category === ""}
          >
            Add Note
          </Button>
        </form>
      ) : (
        <p></p>
      )}
    </>
  );
}

export default NoteForm;
