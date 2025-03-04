"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const RSVP = () => {
  const formRef = useRef(null);
  const [done, resetButton] = useState(false);
  const handleButton = () => {
    resetButton(!done);
    console.log(done);
  };

  return (
    <div className="w-full text-left">
      <div className="m-auto mb-4 w-full max-w-[1240px] px-2">
        <div className="gap-8 md:grid lg:grid-cols-5">
          {/* left */}
          <div className="co-span-3 h-full w-full lg:col-span-2 lg:px-0">
            <div className="h-full">
              <div className="text-center md:text-left">
                <Image
                  className="rounded-xl mx-auto my-2"
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
          <div className="col-span-3 h-auto w-full">
            <div className="">
              <form
                action="https://getform.io/f/cec7a2a2-5959-47a2-adea-d1dcc55300f9"
                method="POST"
                ref={formRef}
                autoComplete="on"
              >
                <div className="grid w-full gap-4 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="name">
                      Party Name <span className="text-red"> *</span>
                    </label>
                    <input
                      type="text"
                      className="rounded-md border border-gray-500 p-3"
                      name="name"
                      id="name"
                      required
                      aria-required="true"
                      autoComplete="Full name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm" htmlFor="email">
                      Email <span className="text-red"> *</span>
                    </label>
                    <input
                      type="email"
                      className="rounded-md border border-gray-500 p-3"
                      name="email"
                      id="email"
                      required
                      aria-required="true"
                      autoComplete="Email address"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <fieldset>
                    <legend className="py-2 text-sm">
                      Attending <span className="text-red"> *</span>
                    </legend>
                    <div className="flex items-center gap-1">
                      <input
                        type="radio"
                        className="rounded-md border border-gray-500 p-3"
                        name="attendance"
                        id="yes"
                        defaultChecked
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input type="radio" name="attendance" id="no" />
                      <label htmlFor="no">No</label>
                    </div>
                  </fieldset>
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="subject">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    className="rounded-md border border-gray-500 p-3"
                    name="subject"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 text-sm" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="rounded-md border border-gray-500 p-3"
                    name="message"
                    id="message"
                  />
                </div>
                <input type="hidden" name="_gotcha" className="hidden"></input>
                <div className="flex flex-col">
                  <button
                    onClick={handleButton}
                    className="mx-auto mt-8 p-4 transition duration-300 ease-in-out hover:shadow-xl"
                  >
                    Send Message
                  </button>
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
