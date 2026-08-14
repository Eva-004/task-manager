import TaskContent from "@/components/pageComponents/TaskContent";
import { Suspense } from "react";

const AllTask = () => {
    return (
        <Suspense fallback={<div className="py-10 text-center">Loading tasks...</div>}>
            <TaskContent />
        </Suspense>
    );
};

export default AllTask;