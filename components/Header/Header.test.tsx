import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a header element with the correct text", () => {
    const { getByRole } = render(<Header title="My App" />);
    const headerElement = getByRole("heading", { level: 1 });
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent("My App");
  });
});
