import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "./ui/button";

const NotesCard = () => {
  return (
    <Link href={"/"}>
      <Card className="hover:bg-purple-500 hover:text-white group shadow-md border-none">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg flex-1 line-clamp-1">Lecture Notes</CardTitle>
          <Button className="w-fit bg-inherit text-black hover:bg-inherit group-hover:text-white"><BsThreeDots /></Button>
        </CardHeader>
        <CardContent>
          <p className="text-sm line-clamp-4 text-gray-500 group-hover:text-white ">
            Virtual Digital Marketing Course every week on Monday, Wednesday and
            Saturday.Virtual Digital Marketing Course every week on Monday
          </p>
        </CardContent>
        <CardFooter className="text-xs p-4 font-semibold">
          <p className="flex items-center gap-x-2">
            <SlCalender />
            12 Jan 2021
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NotesCard;
