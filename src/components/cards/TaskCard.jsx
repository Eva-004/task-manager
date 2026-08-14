import { Card } from "@heroui/react";
import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import EditTask from "../pageComponents/EditTask";
import DeleteTask from "../pageComponents/DeleteTask";

const TaskCard = ({ task ,handleUpdate,handleDelete}) => {
  const getStatusBadge = (status) => {
    if (status === "To Do") {
      return "badge badge-info";
    }

    if (status === "In Progress") {
      return "badge badge-warning";
    }

    if (status === "Done") {
      return "badge badge-success";
    }

    return "badge";
  };

  return (
    <Card className="h-full p-5 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex h-full flex-col">

       
        <h2 className="text-xl font-bold line-clamp-2">
          {task.title}
        </h2>

        
        {task.description && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {task.description}
          </p>
        )}

        
        <div className="mt-5 flex flex-col gap-3">

          
          <div className="flex items-center justify-between">
            <span className="font-medium">Status</span>

            <span className={getStatusBadge(task.status)}>
              {task.status}
            </span>
          </div>

          
          <div className="flex items-center justify-between">
            <span className="font-medium">Priority</span>

            <span className="text-sm font-semibold">
              {task.priority}
            </span>
          </div>

          
          <div className="flex items-center justify-between">
            <span className="font-medium">Due Date</span>

            <span className="text-sm text-gray-500">
              {task.dueDate || "No deadline"}
            </span>
          </div>

        </div>
        <div className="mt-auto pt-5 flex justify-between gap-3">
          <EditTask task={task} handleUpdate={handleUpdate} />

          <DeleteTask task={task} handleDelete={handleDelete}/>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;