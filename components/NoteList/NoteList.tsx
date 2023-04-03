import { NoteActionsProps, NoteProps } from "@/types";
import React from "react";
import Note from "./Note";

interface Props extends NoteActionsProps {
  notes: NoteProps[];
  pad: boolean;
}

export const NoteList: React.FC<Props> = ({ notes, pad, onDelete, onEdit }) => {
  return (
    <ul
      className={`grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2  lg:grid-cols-1  2xl:grid-cols-2 grid-flow-row pt-5  ${
        pad && " sm:grid-cols-2 xl:grid-cols-4 "
      } `}
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};
