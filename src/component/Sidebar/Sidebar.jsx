import React from "react";
import "../../App.css";

const SideBar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortByDate = (noteA, noteB) => noteB.lastModified - noteA.lastModified;
  return (
    <>
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
          {notes.sort(sortByDate).map((note) => (
            <div
              className={`app-sidebar-note ${
                note.id === activeNote && "active"
              }`}
              key={note.id}
              onClick={() => {setActiveNote(note.id)}}
            >
              <div className="sidebar-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
              </div>
              <p>
                {
                  note.body.length <= 50
                  ? note.body
                  : note.body.substr(0, 50) + "..."}
              </p>
              <small>
                Last modified: {new Date(note.lastModified).toLocaleString()}
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
