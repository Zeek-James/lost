import React from "react";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-pink-200" data-testid="head">
        {title}
      </h1>
      Side bar
    </div>
  );
};
