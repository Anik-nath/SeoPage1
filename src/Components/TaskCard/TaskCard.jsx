import { RiStackFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";

function TaskCard() {
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
            <div>
            <a href="" className=" flex justify-center items-center gap-1">
              <FiLink className="w-4 h-4" />
              <p className="text-xs pb-0 mb-0">25</p>
            </a>
            </div>
            <div className=" flex justify-center items-center gap-1">
              <FaRegCalendarDays  className="w-4 h-4 text-slate-700" />
              <p className="text-xs pb-0 mb-0">25-12-24</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
