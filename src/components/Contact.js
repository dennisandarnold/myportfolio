import React from "react";
import { PhoneIcon, FolderIcon } from "@heroicons/react/solid";

export default function Contact() {
    return(
        <section id="contact" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <PhoneIcon className="mx-auto inline-block w-10 mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Contact Information
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Below is my Contact Information. Feel free to reach out
                </p>

                <div className="p-12 md:w-1/ w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <div className="inline-flex items-center">
                   <img
                    alt="testimonial"
                    src="./arnold.jpeg"
                    className="w-30 rounded-full flex-shrink-0 object-cover object-center"
                  /> 
                </div>
                
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      Arnold P. Okello
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                    < PhoneIcon className="w-5 inline-block" /> +254798969098
                    </span>
                    
                    <span className="text-gray-500 text-sm uppercase">
                    <FolderIcon className="w-5 inline-block" />  arnoldpollycarp@gmail.com
                    </span> 
                  </span>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                    <p>"Looking to continue in the growth and leveraging of my knowledge to a level I can be making proficient decisions and guiding others"</p>
                </blockquote>

                <p className="leading-relaxed"></p>
                <p className="leading-relaxed mb-6"> </p>
                
              </div>
            </div>
                </div>
            </div>
        </section>
    );
}