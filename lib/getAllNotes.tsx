import prisma from "./prisma";

export default async function getAllNotes() {
  const notes = await prisma.note.findMany();

  return notes;
}
