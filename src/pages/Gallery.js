import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = () => {
  useEffect(() => {
    getData();
  }, []);
  const [artistdetails, setasrtistdetails] = useState([]);

  const getData = async () => {
    const response = await axios.get("/getartistdata");
    if (response.data.success) {
      console.log(response.data.data, 12);
      setasrtistdetails(response.data.data);
      toast.success("All artworks are on display");
    } else {
      toast.success("something went wrong");
    }
  };

  return (
    <div>
      <ToastContainer />
      {artistdetails.map((v, i) => {
        return (
          <div
            className="relative float-left m-2 cursor-pointer  "
            title="click me"
          >
            <Link to={`/singleart/${v._id}`}>
              {" "}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={`http://localhost:5000/${v.artwork}`}
                  alt="artwork"
                />

                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{v.arttitle}</div>
                  {/* <p class="text-gray-700 text-base overflow-x-hidden overflow-y-hidden">
                  {v.artdescription}
                </p> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
