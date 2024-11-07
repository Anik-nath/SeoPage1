import { useEffect, useState } from "react";
import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

function TaskCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attachmentCount, setAttachmentCount] = useState("00");

  const handleAttachmentClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(
        "https://sent-attachment.vercel.app/attachment",
        data
      );
      console.log("Attachment Send Successfully!", result.data);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Attachment sent successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsModalOpen(false);
      reset();
      fetch("https://sent-attachment.vercel.app/attachment")
        .then((res) => res.json())
        .then((data) => {
          setAttachmentCount(data.length);
        })
        .catch((error) => {
          console.error("Error fetching attachment data:", error);
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    fetch("https://sent-attachment.vercel.app/attachment")
      .then((res) => res.json())
      .then((data) => {
        setAttachmentCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching attachment data:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-white rounded p-2 py-3 mb-4">
        {/*---------- card header---------------- */}
        <div className="flex flex-row justify-between items-center">
          {/* client */}
          <div className="flex flex-row items-center gap-1">
            {/* client image */}
            <div className="w-6 h-6 rounded-full relative">
              <img
                className="rounded-full"
                src="https://i.ibb.co.com/yBZFNqG/IMG-9280-removebg-preview-1.jpg"
                alt="client image"
              />
            </div>
            {/* client name */}
            <h6 className="text-xs font-semibold">Client Name</h6>
          </div>
          {/* client 2*/}
          <div className="flex flex-row items-center gap-1">
            {/* client image */}
            <div className="w-6 h-6 rounded-full relative">
              <img
                className="rounded-full"
                src="https://i.ibb.co.com/LZrF306/sad.jpg"
                alt="client image"
              />
            </div>
            {/* client name */}
            <h6 className="text-xs font-semibold">Sadik Istiak</h6>
          </div>
        </div>
        {/*---------- card body---------------- */}
        <div className="flex flex-row justify-between items-center text-xs py-4">
          <div className="flex flex-row gap-1 justify-between items-center">
            <RiStackFill className="w-4 h-4" />
            <p className="truncate w-40 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
              quibusdam.
            </p>
          </div>
          <div className="bg-slate-100 px-2 font-semibold flex gap-1 flex-row justify-between items-center">
            <FaClipboardList className="w-3 h-3" />
            <span>1/2</span>
          </div>
        </div>
        {/*---------- card footer---------------- */}
        <div>
          <div className="flex flex-row items-center gap-3">
            <div className="w-6 h-6 rounded-full">
              <img
                className="rounded-full"
                src="https://i.ibb.co.com/7QZGscT/avatar-icon-images-4.png"
                alt="client image"
              />
            </div>
            <div className="w-6 h-6 rounded-full">
              <img
                className="rounded-full"
                src="https://i.ibb.co.com/16vVNXr/926460.png"
                alt="client image"
              />
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-200 flex justify-center items-center">
              <p className="text-xs pb-0 mb-0">12+</p>
            </div>
            <div className=" flex justify-center items-center gap-1">
              <IoChatbubblesOutline className="w-4 h-4" />
              <p className="text-xs pb-0 mb-0">15</p>
            </div>
            <div id="attachment">
              <a
                href="#"
                onClick={handleAttachmentClick} // Trigger modal
                className="attachment flex justify-center items-center gap-1"
              >
                <FiLink className="w-4 h-4" />
                <p className="text-xs pb-0 mb-0">{attachmentCount}</p>
              </a>
            </div>
            <div className=" flex justify-center items-center gap-1">
              <FaRegCalendarDays className="w-4 h-4 text-slate-700" />
              <p className="text-xs pb-0 mb-0">23-12-24</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for attachments */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-1/2 mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-2 bg-white rounded-lg"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Your Attachment
                </h2>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-purple-500 text-white rounded"
                >
                  X
                </button>
              </div>

              {/* Attachment Name */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Attachment Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter attachment name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Attachment Type */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="type"
                >
                  Attachment Type
                </label>
                <input
                  type="text"
                  {...register("type", { required: true })}
                  placeholder="Enter attachment type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Attachment URL */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="url"
                >
                  Attachment URL
                </label>
                <input
                  type="text"
                  {...register("url", { required: true })}
                  placeholder="Enter attachment URL"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-semibold p-4 rounded-lg hover:bg-purple-800 transition duration-200"
              >
                Send Attachment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskCard;
