import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IoMdAdd } from "react-icons/io";

const AddCategory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="bg-black text-white w-full flex gap-2 mt-4"
        >
          Add Category
          <IoMdAdd size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new category</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="grid  items-center gap-4">
            <Input
              id="name"
              className="col-span-3"
              placeholder="Enter category"
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

export default AddCategory;
