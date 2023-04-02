import React, { Dispatch, SetStateAction, useState } from "react";

type NavigationContextProviderProps = {
  children: React.ReactNode;
};

type NavigationContextType = {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: NavigationContextType = {
  sidebarCollapsed: false,
  setSidebarCollapsed: () => null,
};

export const NavigationContext = React.createContext(defaultContext);

export function NavigationProvider({
  children,
}: NavigationContextProviderProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.sidebarCollapsed
  );

  return (
    <NavigationContext.Provider
      value={{ sidebarCollapsed, setSidebarCollapsed }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
