import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice">
                <Form.Label>Choose an answer</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div aria-live="polite">
                {choice === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
