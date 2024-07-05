import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "../../assets/logo.png";

const page = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-1 font-roboto">
      <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto w-auto"
            height={60}
            width={60}
            src={Logo}
            alt="logo"
          />
          <h2 className="mt-3 text-center text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="flex flex-col gap-y-8 mt-6 w-full md:w-96 mx-auto">
          <div>
            <Input placeholder="Enter email" />
          </div>
          <div>
            <Input placeholder="Enter Password" />
          </div>
          <div>
            <Input placeholder="Confirm Password" />
          </div>
          <Button>Sign Up</Button>
          <div>
            <p className="text-center text-sm text-gray-500">
              Already signed up?
              <Link href="#" className="font-semibold">
                {" "}Login Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
