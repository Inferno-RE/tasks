import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((option) => (
                <Form.Check
                    inline
                    type="radio"
                    key={option}
                    id={`color-${option}`}
                    name="color"
                    label={option}
                    value={option}
                    checked={color === option}
                    onChange={(event) => {
                        setColor(event.target.value);
                    }}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
