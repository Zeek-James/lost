import React from "react";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Kapp | {title && title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        role="layout"
        className="bg-white text-black min-h-screen flex flex-col"
      >
        <header role="banner">
          <h1>{title}</h1>
        </header>
        <div className="flex grow w-full bg-slate-100">
          <section role="side-bar">
            <SidebarNavigation />
          </section>
          <section role="main" className="w-full">
            {children}
          </section>
        </div>
        <footer
          className="flex h-10 justify-center items-center shadow-inner"
          role="footer"
        >
          <p>Copyright © 2023 Kapp</p>
        </footer>
      </main>
    </>
  );
};
