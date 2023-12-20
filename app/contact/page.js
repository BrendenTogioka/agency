"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Contact() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="py-12 px-8 mb-20 max-w-[1260px]">
      <div className="flex flex-col sm:flex-row gap-8 sm:mt-10">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text mb-4">
            Get in Touch
          </h1>
          <p className="text-lg leading-normal">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and we will get back to you in the next 48
            hours.
          </p>
          <div className="mt-4 flex flex-col md:flex-row items-center sm:items-start gap-4  md:gap-8">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 stroke-indigo-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <h3 className="text-lg font-semibold">contact@imact.com</h3>
            </div>
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                dataSlot="icon"
                className="w-6 h-6 stroke-pink-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <h3 className="text-lg font-semibold">(562) 555-3030</h3>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2">
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="firstName" className="flex flex-col gap-1">
              First Name
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="py-2 px-3 rounded-md"
              />
            </label>
            <label htmlFor="lastName" className="flex flex-col gap-1">
              Last Name
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="py-2 px-3 rounded-md"
              />
            </label>
            <label htmlFor="email" className="flex flex-col gap-1">
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="py-2 px-3 rounded-md"
              />
            </label>
            <label htmlFor="budget" className="flex flex-col gap-1">
              Budget
              <input
                type="text"
                name="budget"
                id="budget"
                className="py-2 px-3 rounded-md"
              />
            </label>
            <label htmlFor="message" className="flex flex-col gap-1">
              Tell us more about what you are looking for.
              <textarea
                name="message"
                id="message"
                rows="5"
                className="py-2 px-3 rounded-md"
              />
            </label>
            <button
              type="button"
              className="font-semibold py-2 px-3  mr-2 rounded-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row  gap-10 mt-[200px]">
        <div className="w-full sm:w-1/2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg">Answers to common burning questions.</p>
        </div>
        <div className="w-full sm:w-1/2">
          <Accordion open={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="underline underline-offset-4"
            >
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We are not always in the position that we want to be at. We are
              constantly growing. We are constantly making mistakes. We are
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="underline underline-offset-4"
            >
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We are not always in the position that we want to be at. We are
              constantly growing. We are constantly making mistakes. We are
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="underline underline-offset-4"
            >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We are not always in the position that we want to be at. We are
              constantly growing. We are constantly making mistakes. We are
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
