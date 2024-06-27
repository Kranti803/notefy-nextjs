"use client";
import React, { useState } from "react";
import SideMenu from "./SideMenu";
import Header from './Header';

const Sidebar = () => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <section className="rounded-lg bg-white px-4 py-2">
      <div className="block md:hidden">
        <Header nav={nav} setNav={setNav} />
      </div>
      <div className="hidden md:block">
        <SideMenu setNav={setNav} />
      </div>
    </section>
  );
};

export default Sidebar;
