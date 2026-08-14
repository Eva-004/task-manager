import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const DeleteTask = ({task,handleDelete}) => {
    return (
        <div>
            <AlertDialog>
                <Button
                    className="btn btn-sm btn-outline btn-error flex-1"

                >
                    <FiTrash2 size={16} />
                    Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete task permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{task.title}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={() => handleDelete(task.id)} slot="close" variant="danger">
                                    Delete Task
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteTask;