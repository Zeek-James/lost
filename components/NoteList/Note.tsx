import moment from "moment";
import { MdEditNote } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";
import { NoteActionsProps, NoteProps } from "@/types";

interface Props extends NoteActionsProps {
  note: NoteProps;
}

export default function Note({ note, onDelete, onEdit }: Props) {
  return (
    <li className="card ">
      <div className="p-3 bg-fuchsia-200">
        <h3 className="font-semibold text-xl">{note?.title}</h3>
      </div>
      <div className="px-3">
        <p className="note-context">{note?.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MdEditNote
              className="mx-2 hover:text-green-500 active:text-green-700"
              onClick={() => onEdit(note.id)}
            />
            <button onClick={() => onDelete(note.id)}>
              <BsTrash3Fill className="hover:text-red-500 active:text-red-700" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
