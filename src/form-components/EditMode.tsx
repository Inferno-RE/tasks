import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit mode"
                checked={editing}
                onChange={(event) => {
                    setEditing(event.target.checked);
                }}
            />
            {editing ?
                <div>
                    <Form.Group controlId="user-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student"
                        checked={student}
                        onChange={(event) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {student ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
