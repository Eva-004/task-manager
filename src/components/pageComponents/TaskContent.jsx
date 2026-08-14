'use client'
import TaskCard from '@/components/cards/TaskCard';
import FilteredTasks from '@/components/pageComponents/FilteredTasks';
import SearchBar from '@/components/pageComponents/SearchBar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FiInbox, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

const TaskContent = () => {
    const searchParams = useSearchParams();

    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const storedTasks = localStorage.getItem("tasks");

            if (storedTasks) {
                setTasks(JSON.parse(storedTasks));
                return;
            }

            const res = await fetch("/data.json");
            const data = await res.json();

            localStorage.setItem("tasks", JSON.stringify(data));
            setTasks(data);
        };

        loadTasks();
    }, []);

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch = task.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus = status
            ? task.status === status
            : true;

        return matchesSearch && matchesStatus;
    });
    const handleUpdate = (updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
        );

        setTasks(updatedTasks);

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );
    };
    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(
            (task) => task.id !== id
        );

        setTasks(updatedTasks);

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );
        toast.warning("Delete Task successfully!");
    };
    return (
        <div className='py-10   w-11/12 mx-auto'>
            <div className='text-center space-y-2'>
                <h2 className='text-4xl font-bold '>Explore All Task</h2>
                <p className='text-gray-700'>Plan your work, set priorities, and stay on top of every task.</p>
            </div>
            <div className=' flex flex-col md:flex-row justify-between items-center sm:gap-0 gap-4 mt-4'>
                <SearchBar ></SearchBar>

                <FilteredTasks></FilteredTasks>

            </div>
            {
                filteredTasks.length===0 ? <div className="min-h-[400px] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
        <FiInbox size={40} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-800">
        No Tasks Found
      </h2>

      <p className="mt-2 max-w-md text-slate-500">
        You don't have any tasks yet. Create a new task and start
        organizing your work.
      </p>

      <Link href="/add-task">
        <button className="mt-6 flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">
          <FiPlus size={18} />
          Create New Task
        </button>
      </Link>
    </div>
            :
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    filteredTasks.map(task => <TaskCard key={task.id} task={task} handleUpdate={handleUpdate} handleDelete={handleDelete}></TaskCard>)
                }
            </div>
}
        </div>
    );
};

export default TaskContent;