import { Routes } from "@/config/routes";
import { NavigationContext } from "@/context/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiSettings } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import React from "react";
import MenuItem, { MenuItemfn } from "./MenuItem";

const menuItems = [
  { text: "Notes", IconSrc: GrNotes, href: Routes.notes },
  { text: "Settings", IconSrc: FiSettings, href: Routes.settings },
];

export function SidebarNavigation() {
  const { pathname } = useRouter();
  const { sidebarCollapsed, setSidebarCollapsed } =
    React.useContext(NavigationContext);

  return (
    <nav
      className={`bg-fuchsia-800 py-4 px-2 md:px-4 flex flex-col  h-full  transition-all duration-300 ${
        sidebarCollapsed ? "w-10 md:w-20" : "w-56"
      }`}
    >
      <h1
        className={` text-white text-center  mb-8 ${
          sidebarCollapsed ? "text-3xl" : "text-2xl"
        }  `}
        data-testid="logo"
      >
        <Link href={"/"} passHref>
          K{!sidebarCollapsed && "app"}
        </Link>
      </h1>
      <ul className="p-0 m-0 grow" data-testid="list">
        {menuItems.map((menuItem, idx) => (
          <MenuItem
            key={idx}
            {...menuItem}
            isActive={pathname === menuItem.href}
            isCollapsed={sidebarCollapsed}
          />
        ))}
      </ul>
      <ul className="p-0 m-0">
        <MenuItemfn
          text={"Collapse"}
          onClick={() => setSidebarCollapsed((prev) => !prev)}
          isCollapsed={sidebarCollapsed}
        />
      </ul>
    </nav>
  );
}
