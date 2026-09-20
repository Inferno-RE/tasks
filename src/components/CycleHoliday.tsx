import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Independence Day"
    | "New Year"
    | "Valentine's Day";

const EMOJI: Record<Holiday, string> = {
    Christmas: "\u{1F384}",
    Halloween: "\u{1F383}",
    "Independence Day": "\u{1F386}",
    "New Year": "\u{1F389}",
    "Valentine's Day": "\u{1F49D}",
};
const ALPHABET: Record<Holiday, Holiday> = {
    Christmas: "Halloween",
    Halloween: "Independence Day",
    "Independence Day": "New Year",
    "New Year": "Valentine's Day",
    "Valentine's Day": "Christmas",
};
const YEAR: Record<Holiday, Holiday> = {
    "New Year": "Valentine's Day",
    "Valentine's Day": "Independence Day",
    "Independence Day": "Halloween",
    Halloween: "Christmas",
    Christmas: "New Year",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Year");
    return (
        <div>
            <p aria-label={holiday}>Holiday: {EMOJI[holiday]}</p>
            <Button
                onClick={() => {
                    setHoliday((previous) => ALPHABET[previous]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday((previous) => YEAR[previous]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
