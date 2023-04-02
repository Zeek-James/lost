// import { Store } from "../utils/Store";
// import { Note } from "@/types";
import { useState } from "react";
// import React, { useContext, useState } from "react";

const characterLimit = 400;
const titleLimit = 50;

export function NotePad({ handleSaveNote }) {
  // const { dispatch } = useContext(Store);

  const [editNote, setEditNote] = useState(null);
  const [newNote, setNewNote] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const handleTitle = (event) => {
    if (titleLimit - event.target.value.length >= 0) {
      editNote
        ? setEditNote({ ...editNote, title: event.target.value })
        : setNewNote({ ...newNote, title: event.target.value });
    }
  };

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      editNote
        ? setEditNote({ ...editNote, content: event.target.value })
        : setNewNote({ ...newNote, content: event.target.value });
    }
  };

  const handleSaveClick = () => {
    if (newNote.content.trim().length > 0) {
      if (editNote) {
        handleSaveNote(editNote, "edit");
        setEditNote(null);
      } else {
        handleSaveNote(newNote);
      }
      setNewNote({ id: 0, title: "", content: "" });
      return;
    }
    alert("Add a note please");
  };

  return (
    <div>
      <h2 className="font-semibold mb-5 text-3xl">
        {editNote ? "Edit Note" : "What is new?"}
      </h2>
      <div className=" shadow-md bg-fuchsia-100 rounded p-4 ">
        <div className="flex flex-col my-6">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="mb-2 p-2"
            onChange={handleTitle}
            value={editNote ? editNote.title : newNote.title}
          />
          <label htmlFor="title" className="text-sm">
            Title
          </label>
        </div>
        <textarea
          placeholder="Type to add a note..."
          value={editNote ? editNote.content : newNote.content}
          onChange={handleChange}
          className="w-full min-h-[200px] p-3"
        ></textarea>
        <div className="note-footer mt-4">
          <small>{characterLimit - newNote.content.length} Remaining</small>
          <button className="default-button" onClick={handleSaveClick}>
            {editNote ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
