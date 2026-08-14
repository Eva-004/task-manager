import TaskCard from '@/components/cards/TaskCard';
import FilteredTasks from '@/components/pageComponents/FilteredTasks';
import SearchBar from '@/components/pageComponents/SearchBar';
import React from 'react';

const AllTask = async ({ searchParams }) => {
     const params = await searchParams;
    const search = params?.search || "";
    const status = params?.status || "";

    const res = await fetch("http://localhost:3000/data.json");
    const data = await res.json();
    const filteredTasks = data.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus = status
      ? task.status === status
      : true;

    return matchesSearch && matchesStatus;
  });
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
                    filteredTasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default AllTask;