import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./component/Main";
import SideBar from "./component/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app-react")) || []
  );
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes-app-react", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setActiveNote(newNote.id);
    setNotes((pre) => [...pre, newNote]);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const getActiveNote = () => {
    const noteSearch = notes.find((note) => note.id === activeNote);
    return noteSearch;
  };

  const onUpdateNotes = (updateNote) => {
    const updateNotes = notes.map((note) =>
      note.id === activeNote ? updateNote : note
    );
    setNotes(updateNotes);
  };

  return (
    <div className="App">
      <SideBar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      ></SideBar>
      <Main activeNote={getActiveNote()} onUpdateNotes={onUpdateNotes}></Main>
    </div>
  );
}

export default App;
