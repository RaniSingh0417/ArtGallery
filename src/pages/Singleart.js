import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Singleart = () => {
  const { id } = useParams();

  const [singleart, setsingleart] = useState([]);

  console.log(id);

  const getSingledata = async () => {
    const response = await axios.get(`/singleart/${id}`);
    if (response.data.success) {
      console.log(response.data.data);
      setsingleart(response.data.data);

      toast.success(`Visited to singleart Page`);
    } else {
      toast.error("bad request");
    }
  };
  const handledelete = async () => {
    const response = await axios.delete(`/deleteart/${id}`);
    if (response.data.success) {
      toast.success("You deleted an art from gallery");
    } else {
      toast.success("Something went wrong");
    }
  };

  const handleUpdate = async () => {};
  // const data = [...singleart];
  // console.log(data);

  useEffect(() => {
    getSingledata();
  }, []);

  return (
    <>
      <ToastContainer />
      {/* <div class="max-w-sm items-center m-5 w-full lg:max-w-full lg:flex">
        <div
          class="h-48  lg: h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="artwork"
        >
          <img
            src={`http://localhost:5000/${singleart.artwork}`}
            alt="artwork"
          />
        </div>
        <div class="border-r   border-b border-l  lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              {singleart.arttitle}
            </div>
            <p class="text-gray-700 text-base">{singleart.artdescription}</p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative flex m-1  justify-center overflow ">
        {" "}
        <div class="max-w-sm rounded my-2 overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={`http://localhost:5000/${singleart.artwork}`}
            alt="artwork"
          />

          <div class="px-6 py-4">
            <div class="font-bold  items-center text-xl mb-2">
              {singleart.arttitle}
            </div>
            <div class=" text-base mb-2">Art Id : {singleart._id}</div>
            <p class="text-gray-700 mb-2 text-base overflow-x-hidden overflow-y-hidden">
              Description: {singleart.artdescription}
            </p>
            <div class=" text-base mb-2">Theme : {singleart.arttheme}</div>
            <div class=" text-base mb-2">Email-Id : {singleart.email}</div>

            <div class=" text-base mb-2">
              Artist : {singleart.firstname} {singleart.lastname}
            </div>
            <div class=" text-base mb-2"> {singleart.createdAt}</div>
          </div>
          <div className="text-base mb-2 flex">
            <div className=" mx-3 ">
              <Link to={"/gallery"}>
                <button className=" text-center" onClick={() => handledelete()}>
                  <DeleteIcon fontSize="large" style={{ color: "#f77565" }} />
                </button>
              </Link>
            </div>
            <div className=" mx-3 ">
              <Link to={`/update/${id}`}>
                <button className=" text-center" onClick={() => handleUpdate()}>
                  <EditIcon fontSize="large" style={{ color: "#f77565" }} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div>Firstname:{singleart.firstname}</div> */}
      {/* {Object.entries(singleart).map((v, i) => {
        return (
          <div key={i}>
            <ul>
              <li>
                {v[0]}:{v[1]}
              </li>
            </ul>
          </div>
        );
      })} */}
    </>
  );
};

export default Singleart;
