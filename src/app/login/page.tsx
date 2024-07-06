'use client'
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema,TloginSchema } from "@/schemas/loginSchema";
import FormErrorMessage from "@/components/FormErrorMessage";


const page = () => {

    const {register,handleSubmit,reset,formState:{errors,isSubmitting}} = useForm<TloginSchema>({resolver:zodResolver(loginSchema)});

    const onSubmit=(data:TloginSchema)=>{
        console.log(data);
        reset();

    }
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
            Login in to your account
          </h2>
        </div>

        <form className="flex flex-col gap-y-8 mt-6 w-full md:w-96 mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input placeholder="Enter email" {...register("email")} className={"mb-2"} />
            {
                errors.email && <FormErrorMessage message={`${errors.email.message}`}/>
            }
          </div>
          <div>
            <Input placeholder="Enter Password" {...register('password')} className={"mb-2"} />
            {
                errors.password && <FormErrorMessage message={`${errors.password.message}`}/>
            }
          </div>

          <Button disabled={isSubmitting}>Log In</Button>
          <div>
            <p className="text-center text-sm text-gray-500">
              Not registered yet, signed up?
              <Link href="/signup" className="font-semibold">
                {" "}Sign Up Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
