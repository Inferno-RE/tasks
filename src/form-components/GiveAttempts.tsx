import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    function gainAttempts() {
        const amount = parseInt(requested, 10);
        if (!Number.isNaN(amount)) {
            setAttempts(attempts + amount);
            setRequested("");
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <Form.Group controlId="requested-attempts">
                <Form.Label>Requested attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event) => {
                        setRequested(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                disabled={attempts <= 0}
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
            >
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
        </div>
    );
}
