import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { NoteList } from "./";
import { NoteProps } from "@/types";

describe("NoteList", () => {
  const notes: NoteProps[] = [
    { id: 1, title: "Note 1", content: "This is the first note." },
    { id: 2, title: "Note 2", content: "This is the second note." },
    { id: 3, title: "Note 3", content: "This is the third note." },
  ];

  it("displays a list of notes", () => {
    const { getAllByRole } = render(
      <NoteList
        notes={notes}
        pad
        onDelete={() => Promise.resolve()}
        onEdit={() => Promise.resolve()}
      />
    );
    const noteElements = getAllByRole("listitem");
    expect(noteElements.length).toBe(notes.length);
    expect(noteElements[0]).toHaveTextContent("Note 1");
    expect(noteElements[1]).toHaveTextContent("Note 2");
    expect(noteElements[2]).toHaveTextContent("Note 3");
  });
});
