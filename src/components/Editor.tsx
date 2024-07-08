'use client'
import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import type { UseFormSetValue } from "react-hook-form";
import { TwriteNotesSchema } from "@/schemas/writeNotesSchema";

const Editor = ({value,setValue}:{value:string,setValue:UseFormSetValue<TwriteNotesSchema>}) => {
  const editor = useRef(null);


  return (
    <>
      <JoditEditor
        ref={editor}
        value={value}
        onChange={(htmlString) => setValue("content", htmlString)}
      />
    </>
  );
};

export default Editor;
