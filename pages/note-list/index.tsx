import { Layout } from "@/components/Layout";
import { NoteList } from "@/components/NoteList";
import { NotePad } from "@/components/NoteList/NotePad";
import { NoteProps } from "@/types";
// import prisma from "@/lib/prisma";
import React, { useState, useEffect } from "react";

export async function getServerSideProps() {
  // const users = await prisma.note.findMany();
  // return {
  //   props: { initialUsers: users },
  // };
  return { props: { jhon: "" } };
}

export default function NotesPage() {
  // export default async function NotesPage() {
  // const notesData = getAllNotes();
  // // const notess = await notesData;

  // console.log(notesData);

  const [notes, setNotes] = useState<NoteProps[]>([
    {
      id: 1,
      title: "Grocery List",
      content: "Milk, bread, eggs, cheese",
    },
    {
      id: 2,
      title: "Workout Plan",
      content:
        "Monday: Chest and triceps\nTuesday: Back and biceps\nWednesday: Rest\nThursday: Legs\nFriday: Shoulders and abs\nSaturday: Rest\nSunday: Full body",
    },
    {
      id: 3,
      title: "Gift Ideas",
      content:
        "Mom: perfume\nDad: tool set\nSister: books\nBrother: video game\nPartner: jewelry",
    },
    {
      id: 4,
      title: "Gift Ideas",
      content:
        "Mom: perfume\nDad: tool set\nSister: books\nBrother: video game\nPartner: jewelry",
    },

    {
      id: 5,
      title: "Gift Ideas",
      content:
        "Mom: perfume\nDad: tool set\nSister: books\nBrother: video game\nPartner: jewelry",
    },
  ]);
  const [pad, togglePad] = useState(false);

  useEffect(() => {}, []);

  const handleSaveNote = (data: NoteProps, type: string) => {
    console.log(data, "lvl 9");

    if (type === "edit") {
      // If an existing note is being edited, update it
      setNotes(notes.map((note) => (note.id === note.id ? data : note)));
    } else {
      // Otherwise, create a new note with a unique ID
      const newId = notes.length > 0 ? notes[notes.length - 1].id + 1 : 1;
      const newNoteWithId = { ...data, id: newId };
      setNotes([...notes, newNoteWithId]);
    }
    // setNewNote({ id: 0, title: "", content: "" });
    // localStorage.setItem("notes", JSON.stringify(notes));
  };

  // const handleEditNote = (id: number) => {
  //   router.push(`/notes/${id}`);
  // };

  // const handleDeleteNote = (id: number) => {
  //   const updatedNotes = notes.filter((note) => note.id !== id);
  //   setNotes(updatedNotes);
  // };

  return (
    <Layout title="My Notes">
      <div className="padding">
        <div className="flex">
          <h1 className="text-black text-5xl" data-testid="heading">
            Notes
          </h1>

          <button
            className="ml-auto primary-button"
            onClick={() => togglePad((prev) => !prev)}
          >
            {pad && "New Note"}
            {!pad && "Hide Pad"}
          </button>
        </div>

        <div className={!pad ? "grid  lg:grid-cols-7 gap-4" : ""}>
          <div
            className={`col-span-3  ${
              !pad && "border-r"
            } rounded-l-lg shadow-inner mt-6 py-6 px-10 overflow-y-scroll max-h-[600px] bg-slate-50`}
          >
            {notes.length > 0 ? (
              <NoteList notes={notes} pad={pad} />
            ) : (
              <p>No notes yet.</p>
            )}
          </div>
          <div className={`col-span-4 p-6 ${pad && "hidden"}`}>
            <NotePad handleSaveNote={handleSaveNote} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
