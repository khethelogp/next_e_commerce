import React from "react";
import { Navbar } from "../../components";
import ClientOnly from "../ClientOnly";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ClientOnly>
        <Navbar />
        {children}
      </ClientOnly>
    </>
  );
};

export default Layout;
