import { Layout } from "@/components/Layout";
import { NoteList } from "@/components/NoteList";
import { NotePad } from "@/components/NoteList/NotePad";
import prisma from "@/lib/prisma";
import { NoteProps } from "@/types";
import axios from "axios";
import React, { useState } from "react";

interface NotesPageProps {
  initialState: NoteProps[];
}

export const getServerSideProps = async () => {
  const notesData: NoteProps[] = await prisma.note.findMany();
  return {
    props: { initialState: notesData },
  };
};

export default function NotesPage({ initialState }: NotesPageProps) {
  const [notes, setNotes] = useState<NoteProps[]>(initialState);
  const [pad, togglePad] = useState(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [editingNote, setEditingNote] = useState<NoteProps | null>(null);

  const handleEdit = (id: number) => {
    const note = notes.find((note) => note.id === id);
    setEditing(true);
    if (note) setEditingNote(note);
  };

  const handleSaveNote = async (data: NoteProps, type: string) => {
    if (type === "edit") {
      // If an existing note is being edited, update it
      const { id, title, content } = data;
      const { data: updatedData } = await axios.patch("/api/notes/update", {
        id,
        title,
        content,
      });
      setNotes(updatedData);
    } else {
      // Otherwise, create a new note with a unique ID
      const res = await axios.post("/api/notes/create", data);
      return setNotes([...notes, res.data]);
    }
  };

  const handleDeleteNote = async (id: number) => {
    const { data } = await axios.post("/api/notes/delete", { id });
    setNotes(data);
  };

  return (
    <Layout title="My Notes">
      <div className="padding">
        <div className="flex">
          <h1 className="text-black text-2xl md:text-5xl" data-testid="heading">
            Notes
          </h1>

          <button
            className="ml-auto primary-button"
            onClick={() => togglePad((prev) => !prev)}
          >
            {pad ? "New Note" : "Hide Pad"}
          </button>
        </div>

        <div className={!pad ? "grid  lg:grid-cols-8 gap-4" : ""}>
          <div
            className={`col-span-4 lg:col-span-3 ${
              !pad && "border-r"
            } rounded-l-lg shadow-inner mt-6 md:py-6 px-5 md:px-10 overflow-y-scroll max-h-[600px] bg-slate-50`}
          >
            {notes.length > 0 ? (
              <NoteList
                notes={notes}
                pad={pad}
                onDelete={handleDeleteNote}
                onEdit={handleEdit}
              />
            ) : (
              <p>No notes yet.</p>
            )}
          </div>
          <div className={`col-span-4 lg:col-span-5 ${pad && "hidden"}`}>
            <NotePad
              handleSaveNote={handleSaveNote}
              editing={editing}
              setEditing={setEditing}
              editingNote={editingNote}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
