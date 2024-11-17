import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  // console.log(note);
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
      <h4>
        {/* you can use slice too*/}
        {note.title.length > 30 ? note.title.substr(0, 30) + "..." : note.title}
      </h4>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;