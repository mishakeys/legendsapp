import React,{ useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function SearchBox() {
    const [searchText, setSearchText] = useState("");
    console.log(searchText);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                    <OutlinedInput 
                    style={{ width: "100%" }} 
                    value={searchText} 
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                </div>
                <div style={{ display: "flex", alignItems: "center", padding: "8px 20px" }}>
                    <Button variant="contained" color="primary" onClick={() => {
                        //Search
                    }}>
                        Search
                    </Button>
                </div>
            </div>
            <div>
                <nav aria-label="main mailbox folders">
                    {
                        [1, 2, 3, 4, 5].map((item) => {
                            return (
                                <div key={item}>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <img src="/star.png" alt="Placeholder" style={{ width: 38, height: 38 }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Inbox" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </div>
                            );
                        })
                    }

                </nav>
            </div>
        </div>
    )
}