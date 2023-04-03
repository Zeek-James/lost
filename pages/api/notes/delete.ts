import { NextApiRequest, NextApiResponse } from "next";
import { deleteNoteById, getAllNotes } from "@/lib/note";
import { Note } from "@prisma/client";
import { ErrorResponse } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note[] | ErrorResponse>
) {
  if (req.method === "POST") {
    const { id } = req.body;
    await deleteNoteById(id);
    const updatedNotes = await getAllNotes();
    res.status(200).json(updatedNotes);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
