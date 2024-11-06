import TaskCard from "../TaskCard/TaskCard";

function Taskboard() {
  const columns = [
    { id: 1, title: "Incomplete" },
    { id: 2, title: "To Do" },
    { id: 3, title: "Doing" },
    { id: 4, title: "Under Review" },
    { id: 5, title: "Completed" },
    { id: 6, title: "Overdue" },
  ];
  const titleColors = ["bg-red-500", "bg-cyan-400", "bg-yellow-400"];

  return (
    <>
      <div className="container-fluid p-5 ">
        <div className="w-full min-h-screen overflow-x-auto custom-scrollbar pb-5">
          <div className="flex space-x-4 w-max min-w-full overflow-y-scroll max-h-screen">
            {columns.map((column, index) => (
              <div
                key={column.id}
                className="flex flex-col w-7/12 min-w-[18rem] min-h-screen bg-gray-100"
              >
                <h2 className="flex justify-between text-sm font-semibold text-center p-2 text-dark mb-2">
                  <div className="relative flex flex-row items-center gap-1">
                    {index < 3 && (
                      <span
                        className={`${titleColors[index]} w-5 h-5 inline-block title-icon`}
                      ></span>
                    )}
                    <span>{column.title}</span>
                  </div>
                  <span className="bg-slate-200 w-6 h-6 rounded flex justify-center items-center">
                    0
                  </span>
                </h2>
                <div className="flex-1 overflow-y-auto h-96 p-2 custom-scrollbar">
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                  <TaskCard />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskboard;
