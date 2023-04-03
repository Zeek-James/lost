import { NextApiRequest, NextApiResponse } from "next";
import { createNote } from "@/lib/note";
import { Note } from "@prisma/client";
import { ErrorResponse } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Note | ErrorResponse>
) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    const note = await createNote(title, content);
    res.status(201).json(note);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
