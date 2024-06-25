import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import User from "./User";
import AddCategory from "./AddCategory";
const Sidebar = () => {
  return (
    <section className="rounded-lg bg-white px-4 py-2">
      <div className="flex justify-evenly items-center border-b-2 border-gray-300 pb-2">
        <Image src={Logo} height={40} width={40} alt="logo" />
        <span className="font- font-semibold text-2xl">Notefy</span>
      </div>
      <User />
      <AddCategory />
    </section>
  );
};

export default Sidebar;
