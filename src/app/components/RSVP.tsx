"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { CgSpinner } from "react-icons/cg";

const RSVP = () => {
  const form = useRef<HTMLFormElement>(null!);
  const [formState, setFormState] = useState("newSubmission");

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setFormState("processing");

    emailjs
      .sendForm("service_3659z7o", "template_1h2plqr", form.current, {
        publicKey: "AcBW8zD6h1t_bveJH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          setFormState("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormState("error");
        }
      );
  };

  return (
    <div className="w-full text-left">
      <div className="m-auto mb-4 w-full max-w-[1240px] px-2">
        <div className="gap-8 grid lg:grid-cols-5">
          {/* left */}
          <div className="col-span-3 order-last md:order-first h-full w-full lg:col-span-2 lg:px-0">
            <div className="h-full">
              <div className="text-center md:text-left">
                <Image
                  className="rounded-xl mx-auto md:mb-8 md:my-2"
                  src="/watercolor.jpg"
                  alt="Watercolor depiction of Penelope and Sofia SCUBA Diving in Hawaii"
                  width={375}
                  height={525}
                  priority
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 order-first md:order-last h-auto w-full">
            <div className="">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
                autoComplete="on"
              >
                <div className="grid w-full gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="name">
                      Party Name <span className="text-red"> *</span>
                    </label>
                    <input
                      type="text"
                      className="rounded-md border border-gray-500 p-3 dark:bg-transparent"
                      name="name"
                      id="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="email">
                      Email <span className="text-red"> *</span>
                    </label>
                    <input
                      type="email"
                      className="rounded-md border border-gray-500 p-3 dark:bg-transparent"
                      name="email"
                      id="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="grid w-full gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <fieldset>
                      <legend className="py-2 text-sm">
                        Attending <span className="text-red"> *</span>
                      </legend>
                      <div className="flex items-center h-[50px] border border-blue-600 rounded-md overflow-hidden focus-within:outline">
                        <label htmlFor="yes" className="cursor-pointer w-full">
                          <input
                            type="radio"
                            className="sr-only peer"
                            name="attendance"
                            id="yes"
                            value="yasssss"
                            defaultChecked
                          />
                          <span className="p-4 flex justify-center peer-checked:bg-blue-600 peer-checked:text-white">
                            Yes
                          </span>
                        </label>
                        <label htmlFor="no" className="cursor-pointer w-full">
                          <input
                            type="radio"
                            name="attendance"
                            id="no"
                            value="nooo :("
                            className="sr-only peer"
                          />
                          <span className="p-4 flex justify-center peer-checked:bg-blue-600 peer-checked:text-white">
                            No
                          </span>
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="kids">
                      Kids?
                    </label>
                    <input
                      type="text"
                      className="rounded-md border border-gray-500 p-3 dark:bg-transparent"
                      name="kids"
                      id="kids"
                      autoComplete="Full name"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    className="py-2 text-sm"
                    htmlFor="dietary_restrictions"
                  >
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-500 p-3 dark:bg-transparent"
                    name="dietary_restrictions"
                    id="dietary_restrictions"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-md border border-gray-500 p-3 dark:bg-transparent focus:outline-solid"
                    name="message"
                    id="message"
                  />
                </div>
                <input type="hidden" name="_gotcha" className="hidden"></input>
                <div className="flex flex-col">
                  {formState === "newSubmission" && (
                    <input
                      type="submit"
                      value="Send"
                      className="bg-blue-600 rounded-md mt-2 py-2 px-16 md:w-fit mx-auto cursor-pointer text-white hover:shadow-sm hover:bg-blue-500 hover:scale-95"
                    />
                  )}
                  {formState === "processing" && (
                    <button
                      className="text-center mt-2 mx-auto py-2 px-16 bg-blue-600 text-white md:w-fit rounded-md"
                      disabled
                    >
                      <CgSpinner className="inline mr-2 size-5 animate-spin" />
                      Processing...
                    </button>
                  )}
                  {formState === "success" && (
                    <span className="text-center mx-auto mt-2 py-2">
                      Thank you for your RSVP!
                    </span>
                  )}
                  {formState === "error" && (
                    <span className="text-center mt-2 py-2">
                      We&apos;re sorry, there&apos;s been an error submitting
                      your RSVP. Please check your internet connection and try
                      again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
