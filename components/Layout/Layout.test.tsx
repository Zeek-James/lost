import { render } from "@testing-library/react";
import { Layout } from "./";
import "@testing-library/jest-dom";

describe("Layout component", () => {
  it("renders a header, a main section, and footer section", () => {
    const { getByRole } = render(<Layout title="Page title">{}</Layout>);

    expect(getByRole("layout")).toBeInTheDocument();

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByRole("banner")).toHaveTextContent("Page title");

    expect(getByRole("side-bar")).toBeInTheDocument();
    expect(getByRole("main")).toBeInTheDocument();
    expect(getByRole("footer")).toBeInTheDocument();
  });
});
