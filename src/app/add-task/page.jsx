"use client";

import React from "react";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    ListBox,
    Select,
    SelectItem,
    TextArea,
    TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddTask = () => {
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const task = Object.fromEntries(formData.entries());

        const existingTasks = JSON.parse(
            localStorage.getItem("tasks") || "[]"
        );

        const newTask = {
            id: Date.now(),
            ...task,
        };

        const updatedTasks = [...existingTasks, newTask];

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );

        toast.success("Added task successfully!");
        router.push("/tasks");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-blue-700">
                        Create New Task
                    </h1>
                    <p className="mt-2 text-gray-500">
                        Add a new task and keep track of your work.
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
                    <Form
                        className="flex w-full flex-col gap-6"
                        onSubmit={onSubmit}
                    >
                        <TextField
                            isRequired
                            name="title"
                            minLength={3}
                            validate={(value) => {
                                if (!value.trim()) {
                                    return "Title is required";
                                }

                                if (value.trim().length < 3) {
                                    return "Title must be at least 3 characters";
                                }

                                return null;
                            }}
                        >
                            <Label>Title</Label>
                            <Input
                                placeholder="Enter task title"
                                className="w-full"
                            />
                            <Description>
                                Give your task a short and clear title.
                            </Description>
                            <FieldError />
                        </TextField>

                        <TextField name="description">
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe your task..."
                                className="w-full"
                                rows={5}
                            />
                            
                            <FieldError />
                        </TextField>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Select
                                name="priority"
                                isRequired
                               
                            >
                                <Label>Priority</Label>

                                <Select.Trigger>
                                    <Select.Value placeholder="Select priority" />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Low" textValue="Low">
                                            Low
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Medium" textValue="Medium">
                                            Medium
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="High" textValue="High">
                                            High
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            <Select
                                name="status"
                                isRequired
                                
                            >
                                <Label>Status</Label>

                                <Select.Trigger>
                                    <Select.Value placeholder="Select status" />
                                    <Select.Indicator />
                                </Select.Trigger>

                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="To Do" textValue="To Do">
                                            To Do
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="In Progress" textValue="In Progress">
                                            In Progress
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>

                                        <ListBox.Item id="Done" textValue="Done">
                                            Done
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <TextField name="dueDate">
                            <Label>Due Date</Label>
                            <Input
                                type="date"
                                className="w-full"
                            />
                            <Description>
                                Select a deadline if this task has one.
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                            <Button
                                type="reset"
                                variant="secondary"
                                className="w-full sm:w-auto"
                            >
                                Reset
                            </Button>

                            <Button
                                type="submit"

                                className="w-full bg-blue-700 sm:w-auto"
                            >
                                Create Task
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;