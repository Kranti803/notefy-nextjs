'use client'
import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import type { FieldValues, UseFormSetValue } from "react-hook-form";

const Editor = ({value,setValue}:{value:string,setValue:UseFormSetValue<FieldValues>}) => {
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
