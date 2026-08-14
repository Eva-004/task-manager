"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

  const handleFilter = (key) => {
    if (key === "all") {
      setSelectedStatus("");
      router.push("/tasks");
      return;
    }

    setSelectedStatus(key);

    const params = new URLSearchParams(searchParams.toString());
    params.set("status", key);

    router.push(`/tasks?${params.toString()}`);
  };

  return (
    <div>
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
          className="dropdown-content menu bg-base-100 rounded-box z-40 p-2 shadow-sm"
        >
          <li
            onClick={() => handleFilter("all")}
            className={
              selectedStatus === ""
                ? "active bg-blue-700 text-white"
                : ""
            }
          >
            <span>All Tasks</span>
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
              <span>{status.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilteredTasks;