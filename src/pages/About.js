import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div class=" max-w-xl p-6  bg-white  border-orange-200 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className=" font-semibold m-4 text-lg">
            "Canvas Corner is an online artwork gallery which focusses to envoke
            the artist inside every being and provide a platform to show their
            artwork."{" "}
          </div>
        </div>
      </div>
      <div className=" m-4 uppercase text-2xl font-bold">Mission</div>
      <div>
        {" "}
        <div class="block w-full p-6 bg-white  border-orange-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-xxl font-bold tracking-tight text-gray-900 dark:text-white">
            Art Promotion of every single artist
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            The gallery's mission is to promote the work of talented artists,
            both established and emerging, by providing them with a platform to
            showcase their creations to a global audience.
          </p>
        </div>
      </div>
      <div className=" m-4 uppercase text-2xl font-bold">Features</div>
      <div class="grid mb-8 border border-orange-400 rounded-lg shadow-sm dark:border-orange-500 md:mb-12 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center p-8 text-center bg-white border-b  border-orange-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <div class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              High-Quality Images
            </h3>
            <p class="my-4">
              High-resolution images of the artworks are provided to allow users
              to examine the details of the artwork closely.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-orange-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <div class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Contact and Support
            </h3>
            <p class="my-4">
              We provide a clear contact section and support for users to get in
              touch with any queries or concerns.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-orange-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <div class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Artwork Details
            </h3>
            <p class="my-4">
              Comprehensive information about each artwork, including the title,
              artist and many more.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <div class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Virtual Tours
            </h3>
            <p class="my-4">
              Canvas Corner provides virtual tours of the gallery space or
              curated collections to give users an immersive experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
