import React from "react";

const Contacts = () => {
  return (
    <div className="">
      <div className="flex justify-center  my-3 font-bold text-2xl text-blue-700">
        Feel free to Contact Us
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57712.35929030664!2d82.9784064!3d25.3034496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1691255826756!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          alt="Google map"
          className="w-full"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex justify-center">
          <div class="w-full max-w-md ">
            <form
              action="https://formspree.io/f/myyqkqol"
              method="POST"
              className="bg-white items-center rounded px-8 pt-6 pb-8 mb-4"
            >
              <div class="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="Username"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for=""
                >
                  Email-id
                </label>
                <input
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="Email"
                  required
                  autoComplete="off"
                  placeholder="rs170504singh@gmail.com"
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for=""
                >
                  Comments
                </label>
                <textarea
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id=""
                  type="text"
                  placeholder="Your Suggestions"
                  autoComplete="off"
                  name="Comments"
                ></textarea>
              </div>

              <div class="flex items-center justify-between">
                <input
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
