'use client'
import TaskCard from '@/components/cards/TaskCard';
import FilteredTasks from '@/components/pageComponents/FilteredTasks';
import SearchBar from '@/components/pageComponents/SearchBar';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllTask = () => {
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
            <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    filteredTasks.map(task => <TaskCard key={task.id} task={task} handleUpdate={handleUpdate} handleDelete={handleDelete}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default AllTask;