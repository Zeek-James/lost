import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { SidebarNavigation } from "./";

// Mock the useRouter hook
// eslint-disable-next-line no-undef
jest.mock("next/router", () => ({
  // eslint-disable-next-line no-undef
  useRouter: jest.fn(),
}));

describe("sidebar navigation", () => {
  it("renders correctly", () => {
    const mockRouter = {
      pathname: "/note-list",
    };
    useRouter.mockReturnValue(mockRouter);

    render(<SidebarNavigation />);
    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
});

describe("Sidebar component", () => {
  it("renders list of links with active link highlighted", () => {
    // Set up mock router object
    const mockRouter = {
      pathname: "/note-list",
    };
    useRouter.mockReturnValue(mockRouter);

    render(<SidebarNavigation />);

    const menuLink = screen.getAllByRole("menu-item");
    // Assert that the "About" link is active
    expect(menuLink[0]).toHaveClass(
      "px-2 py-3 flex items-center mt-1 rounded-md bg-slate-50"
    );

    // Assert that the other links are not active
    expect(menuLink[1]).not.toHaveClass(
      "px-2 py-3 flex items-center mt-1 rounded-md bg-slate-50"
    );
  });
});
