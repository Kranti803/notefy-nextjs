import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import user1 from "../assets/user1.png";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import { CiUser } from "react-icons/ci";

const User = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center outline-none">
        <div className="flex items-center justify-center gap-x-4">
          <Image alt="user_profile" src={user1} height={35} width={35} />
          <span className="text-sm font-montserrat font-semibold">
            Kranti Kumar
          </span>
          <span>
            <MdKeyboardArrowDown size={20} />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-roboto">
        <DropdownMenuItem className="text-sm flex gap-x-2">
          <CiUser />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-sm flex gap-x-2">
          <LiaUserEditSolid />
          Edit Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-sm flex gap-x-2">
          <IoMdLogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
