import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Fade,
} from "@mui/material";

import { statusFilters } from "../../refs/constants";

export default function Filter  ({ value = "Show all", onChange })  {
  const [anchorEl, setAnchorEl] = useState("");
  const [selectedItem, setSelectedItem] = useState(value);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Filter" placement="left" arrow>
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
      
        >
          <Typography >{value}</Typography>
          
        </Button>
      </Tooltip>

      <Menu
        id="fade-menu"
        MenuListProps={{ "aria-labelledby": "fade-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {statusFilters.map((item) => {
          return (
            <MenuItem
              key={item}
              disabled={item === selectedItem}
              selected={item === selectedItem}
              onClick={() => {
                onChange(item, setAnchorEl, setSelectedItem);
              }}
              
            >
              {item}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
