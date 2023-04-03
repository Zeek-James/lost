import Link from "next/link";
import React from "react";
import { BiCollapseHorizontal, BiExpandHorizontal } from "react-icons/bi";
import { IconType } from "react-icons";

type MenuItemProps = {
  // IconSrc: string;
  text: string;
  isCollapsed: boolean;
};

interface MenuLinkProps extends MenuItemProps {
  href: string;
  IconSrc: IconType;
  isActive: boolean;
}

interface MenuButtonProps extends MenuItemProps {
  onClick: () => void;
}

export default function MenuItem({
  text,
  IconSrc,
  href,
  isActive,
  isCollapsed,
}: MenuLinkProps) {
  return (
    <li
      className={`md:px-2 p-1 md:py-3 flex items-center mt-1  rounded-md ${
        isActive ? "bg-slate-50" : "bg-transparent"
      } ${isCollapsed && "justify-center"} `}
      role="menu-item"
    >
      <Link href={href} passHref style={{ textDecoration: "none" }}>
        <div className="flex items-center  text-slate-300">
          <IconSrc />
          <span
            className={` 
            ${isActive ? "text-gray-600" : "text-inherit"}
            ${!isCollapsed && "ml-3"}
            `}
          >
            {!isCollapsed && text}
          </span>
        </div>
      </Link>
    </li>
  );
}

export function MenuItemfn({ text, onClick, isCollapsed }: MenuButtonProps) {
  return (
    <li className="md:px-2 p-1 md:py-3 ">
      <button
        onClick={onClick}
        className="flex items-center justify-center text-slate-300 cursor-pointer border-none m-0 p-0 bg-transparent leading-normal"
      >
        {!isCollapsed ? <BiCollapseHorizontal /> : <BiExpandHorizontal />}
        <span className={!isCollapsed ? "ml-3" : ""}>
          {!isCollapsed && text}
        </span>
      </button>
    </li>
  );
}
