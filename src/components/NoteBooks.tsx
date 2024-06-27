import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { PiBooks } from "react-icons/pi";

const NoteBooks = () => {
  return (
    <Accordion type='single' collapsible >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-roboto hover:no-underline text-sm font-semibold px-4">
          <span className="flex items-center gap-x-2">NoteBooks <PiBooks /></span>
        </AccordionTrigger>
        <AccordionContent>
          {/* Yes. It adheres to the WAI-ARIA design pattern. */}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NoteBooks;
