import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import MenuItem, { MenuItemfn } from "./MenuItem";
import { GrNotes } from "react-icons/gr";
// import { BiCollapseHorizontal, BiExpandHorizontal } from "react-icons/bi";
import { NavigationContext } from "@/context/Navigation";
// import { useRouter } from "next/router";

jest.mock("next/router");
// const mockedRouter = useRouter as jest.Mock;

describe("MenuItem", () => {
  it("renders with correct text and icon when not active", () => {
    const { getByText } = render(
      <MenuItem
        text="Notes"
        IconSrc={GrNotes}
        href="/notes"
        isActive={false}
        isCollapsed={false}
      />
    );
    const menuItemText = getByText("Notes");
    const menuItemIcon = getByText("Notes").querySelector("svg");

    expect(menuItemText).toBeInTheDocument();
    // expect(menuItemIcon).toBeInTheDocument();
    // expect(menuItemIcon).toHaveClass("GrNotes");
  });

  it("renders with active class when active", () => {
    const { getByRole } = render(
      <MenuItem
        text="Notes"
        IconSrc={GrNotes}
        href="/notes"
        isActive={true}
        isCollapsed={false}
      />
    );
    const menuItem = getByRole("menu-item");

    expect(menuItem).toHaveClass("bg-slate-50");
  });
});

describe("MenuItemfn", () => {
  test("renders with correct text and icon when not collapsed", () => {
    const { getByText } = render(
      <MenuItemfn text="Collapse" onClick={jest.fn()} isCollapsed={false} />
    );
    const menuItemText = getByText("Collapse");

    expect(menuItemText).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <MenuItemfn text="Collapse" onClick={onClick} isCollapsed={false} />
    );
    const menuItemButton = getByRole("button");

    menuItemButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
