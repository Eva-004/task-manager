"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilteredTasks = () => {
  const taskStatuses = [
    { key: "To Do", label: "To Do" },
    { key: "In Progress", label: "In Progress" },
    { key: "Done", label: "Done" },
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedStatus, setSelectedStatus] = useState(
    searchParams.get("status") || ""
  );

  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, []);

  const handleFilter = (key) => {
    const value = String(key);

    setSelectedStatus(value);

    if (key === "all") {
      router.push("/");
    } else {
      router.push(`/?status=${value}`);
    }
  };

  return (
    <div >
      <div className="dropdown dropdown-start">
        <div
          tabIndex={0}
          role="button"
          className="btn font-bold m-1"
        >
          Filter by Status
        </div>

        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-40  p-2 shadow-sm"
        >
       
          <li
            onClick={() => handleFilter("all")}
            className={
              selectedStatus === ""
                ? "active bg-blue-700 text-white"
                : ""
            }
          >
            <a>All Tasks</a>
          </li>

          
          {taskStatuses.map((status) => (
            <li
              key={status.key}
              onClick={() => handleFilter(status.key)}
              className={
                selectedStatus === status.key
                  ? "active bg-blue-700 text-white"
                  : ""
              }
            >
              <a>{status.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilteredTasks;