import { Button, Input, Label, ListBox, Select, Modal, Surface, TextArea, TextField } from '@heroui/react';
import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

const EditTask = ({ task, handleUpdate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const updatedTask = {
            id: task.id,
            ...data
        };

        handleUpdate(updatedTask);
        setIsOpen(false);
    };
    return (
        <div>
            <Modal>
                <Button onPress={() => setIsOpen(true)}
                    className="btn btn-sm btn-outline btn-primary flex-1"

                >
                    <FiEdit2 size={16} />
                    Edit
                </Button>

                <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-lg">
                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Heading>Edit Task</Modal.Heading>

                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Update your task information and save the changes.
                                </p>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form

                                        onSubmit={handleSubmit}
                                        className="flex flex-col gap-5"
                                    >
                                        <TextField
                                            className="w-full"
                                            name="title"
                                            defaultValue={task.title}
                                            isRequired
                                            minLength={3}
                                        >
                                            <Label>Title</Label>
                                            <Input placeholder="Enter task title" />
                                        </TextField>

                                        <TextField
                                            className="w-full"
                                            name="description"
                                            defaultValue={task.description || ""}
                                        >
                                            <Label>Description</Label>
                                            <TextArea
                                                placeholder="Enter task description"
                                                rows={4}
                                            />
                                        </TextField>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Select
                                                name="priority"
                                                defaultSelectedKey={task.priority}
                                                className="w-full"
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
                                                defaultSelectedKey={task.status}
                                                className="w-full"
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

                                                        <ListBox.Item
                                                            id="In Progress"
                                                            textValue="In Progress"
                                                        >
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

                                        <TextField
                                            className="w-full"
                                            name="dueDate"
                                            defaultValue={task.dueDate || ""}
                                        >
                                            <Label>Due Date</Label>
                                            <Input type="date" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>

                                            <Button
                                                type="submit"
                                                
                                                className={'bg-blue-700'}
                                            >
                                                Update Task
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>


                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditTask;