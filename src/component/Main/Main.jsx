import React from "react";
import "../../App.css";
const Main = ({ activeNote, onUpdateNotes }) => {
  const onEditField = (key, value) => {
    onUpdateNotes({ ...activeNote, [key]: value, lastModified: Date.now() });
  };

  function onTabKeyDown(e){
    if (e.key === 'Tab') {
      e.preventDefault();
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;

      console.log({start, end});
      console.log(e.target.value);
  
      // set textarea value to: text before caret + tab + text after caret
      e.target.value = e.target.value.substring(0, start) +
        "\t" + e.target.value.substring(end);
      onEditField("body", e.target.value);
      // put caret at right position again
      e.target.selectionStart = e.target.selectionEnd = start + 1;
    }
  }

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
            onKeyDown={onTabKeyDown}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Main;
