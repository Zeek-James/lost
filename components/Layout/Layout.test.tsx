import { render } from "@testing-library/react";
import { Layout } from "./";
import "@testing-library/jest-dom";

describe("Layout component", () => {
  it("renders a header, and footer section", () => {
    const title = "Test Title";
    const { getByRole } = render(<Layout title={title}>{}</Layout>);
    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("banner")).toHaveTextContent(title);
    expect(getByRole("footer")).toBeInTheDocument();
  });
  it("renders the children", () => {
    const { getByRole } = render(<Layout title="Test">Test content</Layout>);
    const main = getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent("Test content");
  });
});
