import { NextApiRequest, NextApiResponse } from "next";
import { deleteNoteById, getAllNotes, updateNote } from "@/lib/note";
import { Note } from "@prisma/client";
import { ErrorResponse } from "@/types";
import { data } from "cypress/types/jquery";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note[] | ErrorResponse>
) {
  if (req.method === "PATCH") {
    const { id, title, content } = req.body;
    await updateNote(id, title, content);
    const updatedNotes = await getAllNotes();
    res.status(200).json(updatedNotes);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
