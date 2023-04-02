import { NoteProps } from "@/types";
import React from "react";
import Note from "./Note";

type Props = {
  notes: NoteProps[];
  pad: boolean;
};

export const NoteList: React.FC<Props> = ({ notes, pad }) => {
  return (
    <ul
      className={`grid grid-cols-1 gap-4   grid-flow-row  ${
        pad && " sm:grid-cols-2 xl:grid-cols-4 "
      } `}
    >
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </ul>
  );
};
