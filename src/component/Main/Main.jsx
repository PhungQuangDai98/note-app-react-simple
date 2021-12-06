import React from "react";
import "../../App.css";
const Main = ({ activeNote, onUpdateNotes }) => {
  const onEditField = (key, value) => {
    onUpdateNotes({ ...activeNote, [key]: value, lastModified: Date.now() });
  };

  if (!activeNote)
    return <div className="no-active-note">No Note Selected</div>;

  return (
    <>
      <div className="app-main">
        <div className="app-main-note-edit">
          <input
            type="text"
            id="title"
            name="title"
            autoFocus
            value={activeNote.title}
            onChange={(e) => onEditField(e.target.name, e.target.value)}
          />
          <textarea
            id="body"
            name="body"
            value={activeNote.body}
            onChange={(e) => onEditField(e.target.name, e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Main;
