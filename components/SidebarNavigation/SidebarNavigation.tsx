import { Routes } from "@/config/routes";
import { NavigationContext } from "@/context/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import React from "react";
import MenuItem, { MenuItemfn } from "./MenuItem";

const menuItems = [
  { text: "Notes", iconSrc: "/thirteen.svg", href: Routes.notes },
  { text: "Settings", iconSrc: "/thirteen.svg", href: Routes.settings },
];

export function SidebarNavigation() {
  const { pathname } = useRouter();

  const { sidebarCollapsed, setSidebarCollapsed } =
    React.useContext(NavigationContext);

  return (
    <nav
      className={`bg-fuchsia-800 py-4 px-4 flex flex-col  h-full  transition-all duration-300 ${
        sidebarCollapsed ? "w-20" : "w-56"
      }`}
    >
      <h1
        className={` text-white ml-3 mb-8 ${
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
          iconSrc={"/thirteen.svg"}
          isCollapsed={sidebarCollapsed}
        />
      </ul>
    </nav>
  );
}
