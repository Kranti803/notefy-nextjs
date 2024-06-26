import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Search = () => {
  return (
    <div className="flex gap-4 font-roboto mt-4 md:mt-0">
      <div className="flex-1">
        <Input className="" placeholder="Search Notes here..." />
      </div>
      <div className="">
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Search;
