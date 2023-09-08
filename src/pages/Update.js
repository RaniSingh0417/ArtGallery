import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
  const { id } = useParams();
  const [singleart, setsingleart] = useState({});
  const [firstname, setfirstname] = useState("");
  const [artTheme, setartTheme] = useState("");
  const [artTitle, setartTitle] = useState("");
  const [artdescription, setartdescription] = useState("");
  useEffect(() => {
    getIdData();
  }, []);
  const getIdData = async () => {
    const response = await axios.get(`/singleart/${id}`);
    if (response.data.success) {
      setsingleart(response.data.data);

      setfirstname(response.data.data.firstname);
      setartTheme(response.data.data.arttheme);
      setartTitle(response.data.data.arttitle);
      setartdescription(response.data.data.artdescription);
      toast.success("You can update artworks detail only");
    } else {
      toast.error("something went wrong");
    }
  };
  const handleUpdate = async () => {
    if (artTheme.trim() === "") {
      toast.success("Please enter arttheme");
    } else if (artTitle.trim() === "") {
      toast.success("Please enter arttitle");
    } else if (artdescription.trim() === "") {
      toast.success("Please enter artdescription");
    }
    const response = await axios.put(
      `/updateart/${id}/${artTheme}/${artTitle}/${artdescription}`
    );
    if (response.data.success) {
      toast.success("Task Updated Succesfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  console.log(singleart);
  return (
    <div className="flex justify-center my-5">
      <ToastContainer />
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Firstname
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-200"
              id="inline-full-name"
              type="text"
              value={firstname}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Art Theme
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-200"
              type="text"
              value={artTheme}
              onChange={(e) => {
                setartTheme(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Art Title
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              value={artTitle}
              onChange={(e) => setartTitle(e.target.value)}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-200"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Art Description
            </label>
          </div>
          <div class="md:w-2/3">
            <textarea
              value={artdescription}
              onChange={(e) => {
                setartdescription(e.target.value);
              }}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-200"
              type="text"
            ></textarea>
          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-2/3">
            <Link to={`/singleart/${id}`}>
              <button
                onClick={() => {
                  handleUpdate();
                }}
                class="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
