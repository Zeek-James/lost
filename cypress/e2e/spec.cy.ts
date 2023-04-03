export {};

describe("Note Taking App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("displays a layout with header, footer, and main components", () => {
    cy.get("header") // Find the header element
      .should("be.visible") // Ensure it's visible
      .contains("My Note Taking App"); // Ensure it contains the app name

    cy.get("footer") // Find the footer element
      .should("be.visible") // Ensure it's visible
      .contains("Copyright © 2023"); // Ensure it contains the year

    cy.get("main") // Find the main element
      .should("be.visible") // Ensure it's visible
      .contains("Add a new note"); // Ensure it contains a message about adding a new note
  });
});

describe("NotesListsPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/note-list");
  });

  it("displays the page title", () => {
    cy.get("h1[data-testid='heading']").should("contain", "Notes");
  });
});

export {};
