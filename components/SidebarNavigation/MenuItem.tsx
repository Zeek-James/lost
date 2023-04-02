import Link from "next/link";
import React from "react";

type MenuItemProps = {
  iconSrc: string;
  text: string;
  isCollapsed: boolean;
};

interface MenuLinkProps extends MenuItemProps {
  href: string;
  isActive: boolean;
}

interface MenuButtonProps extends MenuItemProps {
  onClick: () => void;
}

export default function MenuItem({
  text,
  iconSrc,
  href,
  isActive,
  isCollapsed,
}: MenuLinkProps) {
  return (
    <li
      className={`px-2 py-3 flex items-center mt-1  rounded-md ${
        isActive ? "bg-slate-50" : "bg-transparent"
      } ${isCollapsed && "justify-center"} `}
      role="menu-item"
    >
      <Link href={href} passHref style={{ textDecoration: "none" }}>
        <div className="flex items-center  text-slate-300">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className=" h-5 w-5 bg-slate-300 rounded-full "
            src={iconSrc}
            alt={`${text} icon`}
          />
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

export function MenuItemfn({
  text,
  iconSrc,
  onClick,
  isCollapsed,
}: MenuButtonProps) {
  return (
    <li className="px-2 py-3">
      <button
        onClick={onClick}
        className="flex items-center text-slate-300 cursor-pointer border-none m-0 p-0 bg-transparent leading-normal"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="mr-3 h-5 w-5 bg-slate-300 rounded-full"
          src={iconSrc}
          alt={`${text} icon`}
        />
        {!isCollapsed && text}
      </button>
    </li>
  );
}
