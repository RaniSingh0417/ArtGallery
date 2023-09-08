import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import img1 from "./carasoul4.avif";
import img2 from "./carasoul2.jpg";
import img3 from "./carasoul3.jpg";

const Home = () => {
  const [details, setdetails] = useState([]);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  // const [city, setcity] = useState("");
  // const [state, setstate] = useState("Uttar Pradesh");
  const [artwork, setartwork] = useState("");
  const [arttheme, setarttheme] = useState("");
  const [arttitle, setarttitle] = useState("");
  const [artdescription, setartdescription] = useState("");
  // console.log(artwork, 12);

  const handleCreatedata = async () => {
    if (firstname.trim() === "") {
      toast.warning("Plaese Enter Firstname");
    } else if (email.trim() === "") {
      toast.warning("Please enter email");
    } else if (arttheme.trim() === "") {
      toast.warning("Please enter theme of art ");
    } else if (!artwork) {
      toast.warning("Please Upload an artwork");
    }

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);

    formData.append("artwork", artwork);
    formData.append("arttheme", arttheme);
    formData.append("arttitle", arttitle);
    formData.append("artdescription", artdescription);

    const response = await axios.post("/api/createartistdata", formData);
    if (response.data.success) {
      console.log(response);

      toast.success("Data Saved Succesfully");
    } else {
      toast.error("Something went wrong");
    }

    setfirstname("");
    setlastname("");
    setemail("");
    setartwork("");
    setarttheme("");
    setarttitle("");
    setartdescription("");
  };
  return (
    <div>
      <ToastContainer />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img2}
              style={{ height: 450 }}
              className="d-block height-auto img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              style={{ height: 450 }}
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              style={{ height: 450 }}
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className=" text-3xl font-bold italic my-5 text-center">
        " Creativity takes courage"
      </div>
      <div className=" text-xl text-center font-serif">
        Display your artworks to the world.
      </div>

      {/* form for uploading artworks */}

      <div className=" flex justify-center  mt-4 py-4">
        <div>
          <form className="w-full max-w-lg" encType="multipart/form-data">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  autoCorrect="on"
                  value={firstname}
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                  autoComplete="off"
                  required
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Rani"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  autoComplete="off"
                  value={lastname}
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Singh"
                />
              </div>
              <div className="w-full md:w-full px-3 mt-3 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  E-mail
                </label>
                <input
                  autoComplete="off"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email}
                  required
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="email"
                  placeholder="rssingh@gmail.com"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full  m-3 md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Upload Artwork
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setartwork(e.target.files[0]);
                    }}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="file"
                    name="artwork"
                  />
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full mx-3 md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Art Theme
                  </label>
                  <input
                    autoComplete="off"
                    autoCorrect="on"
                    onChange={(e) => {
                      setarttheme(e.target.value);
                    }}
                    value={arttheme}
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-theme-name"
                    type="text"
                    placeholder="Conflict and Adversity"
                  />
                </div>
                <div className="w-full mx-3 md:w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-art-title"
                  >
                    Title Of Artwork
                  </label>
                  <input
                    autoComplete="off"
                    autoCorrect="on"
                    onChange={(e) => {
                      setarttitle(e.target.value);
                    }}
                    value={arttitle}
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-theme-name"
                    type="text"
                    placeholder="Pinocchio"
                  />
                </div>
                <div className="w-full mx-3 md:w-full px-3 mb-6 md:mb-0">
                  <label
                    className="  ml-1 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
                    for="grid-first-name"
                  >
                    Art Description
                  </label>
                  <textarea
                    autoComplete="off"
                    autoCorrect="on"
                    onChange={(e) => {
                      setartdescription(e.target.value);
                    }}
                    value={artdescription}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-theme-name"
                    type="text"
                    placeholder="Describe your artwork (max-100 words)"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* </div> */}
            <button
              type="button"
              onClick={() => {
                handleCreatedata();
              }}
              className="flex justify-center bg-rose-400 text-red-50 rounded px-4 py-2 animate-[wiggle_1s_ease-in-out_infinite] ml-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
