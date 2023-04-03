import { NoteProps } from "@/types";
import prisma from "./prisma";

// CREATE a new note
export async function createNote(
  title: string,
  content: string
): Promise<NoteProps> {
  return prisma.note.create({ data: { title, content } });
}

// READ a single note by id
export async function getNoteById(id: number): Promise<NoteProps | null> {
  return prisma.note.findUnique({ where: { id } });
}

// READ all notes
export async function getAllNotes(): Promise<NoteProps[]> {
  return prisma.note.findMany();
}

// UPDATE a note by id
export async function updateNote(
  id: number,
  title: string,
  content: string
): Promise<NoteProps> {
  return prisma.note.update({ where: { id }, data: { title, content } });
}

// DELETE a note by id
export async function deleteNoteById(id: number): Promise<NoteProps> {
  return prisma.note.delete({ where: { id } });
}
