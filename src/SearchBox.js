import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';

export default function SearchBox() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display:"flex" }}>
                <div style={{ flex: 1 }}>
                    <OutlinedInput style={{ width: "100%" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", padding: "8px 20px" }}>
                    <Button variant="contained" color="primary">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}