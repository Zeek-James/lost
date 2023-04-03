import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { NoteProps } from "@/types";

interface NotePadProps {
  editingNote: NoteProps | null;
  handleSaveNote: (data: NoteProps, type: string) => Promise<void>;
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
}

const characterLimit = 400;
const titleLimit = 50;

export function NotePad({ editingNote, handleSaveNote }: NotePadProps) {
  const [editNote, setEditNote] = useState<NoteProps | null>(null);
  const [newNote, setNewNote] = useState({
    id: 0,
    title: "",
    content: "",
  });

  useEffect(() => {
    setEditNote(editingNote);
  }, [editingNote]);

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    if (titleLimit - event.target.value.length >= 0) {
      editNote
        ? setEditNote({ ...editNote, title: event.target.value })
        : setNewNote({ ...newNote, title: event.target.value });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (characterLimit - event.target.value.length >= 0) {
      editNote
        ? setEditNote({ ...editNote, content: event.target.value })
        : setNewNote({ ...newNote, content: event.target.value });
    }
  };

  const handleSaveClick = () => {
    if (editNote && editNote.content.trim().length > 0) {
      handleSaveNote(editNote, "edit");
      setEditNote(null);
    } else if (newNote.content.trim().length > 0) {
      handleSaveNote(newNote, "");
      setNewNote({ id: 0, title: "", content: "" });
    } else {
      alert("Add a note please");
    }
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
