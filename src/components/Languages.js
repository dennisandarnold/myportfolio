import React from "react";
import { BriefcaseIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { skills } from "../data";

export default function languages() {
    return(
        <section id="languages" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills and Technology
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below is a list of Skills and Technolgies I have learnt and worked with over the years.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}