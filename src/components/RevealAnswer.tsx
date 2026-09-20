import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setVisible((previous) => !previous);
                }}
            >
                Reveal Answer
            </Button>
            {visible && <span>42</span>}
        </div>
    );
}
