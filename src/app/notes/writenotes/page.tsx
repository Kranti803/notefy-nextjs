"use client";
import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { writeNotesSchema } from "../../../schemas/writeNotesSchema";
import FormErrorMessage from "@/components/FormErrorMessage";
import dynamic from "next/dynamic";
const Editor = dynamic(()=>import('../../../components/Editor'),{ssr:false});

const Page = () => {

  const [content, setContent] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm({ resolver: zodResolver(writeNotesSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    setContent("");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-1 font-roboto rounded-lg">
      <h1 className="py-4 font-semibold">Write Note</h1>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Enter Title" {...register("title")} />
        {errors.title && (
          <FormErrorMessage message={`${errors.title.message}`} />
        )}
        <Editor
        value={content}
        setValue={setValue}
         />
        {errors.content && (
          <FormErrorMessage message={`${errors.content.message}`} />
        )}
        <Button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default Page;
