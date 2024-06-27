import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";

const AddNoteBook = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-black text-white w-full flex gap-2 justify-start"
        >
          Add NoteBook
          <IoMdAdd  />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new notebook</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="grid  items-center gap-4">
            <Input
              id="name"
              className="col-span-3"
              placeholder="Add new notebook"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNoteBook;
