import { useState } from "react";
// import { Menu, MenuItem, Tooltip, Fade } from "@mui/material";
import { statusFilters } from "../../refs/constants";
// import { FilterAlt } from "@mui/icons-material/";
// import {
//   buttonFilterStyle,
//   textStyle,
//   iconFilterStyle,
//   menuItemsStyle,
// } from "./filterStyles";

export default function Filter({ value = "Show all", onChange }) {
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
      <div title="Filter" placement="left" arrow>
        <button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <span>{value}</span>
        </button>
      </div>

      <ul
        
        onClose={handleClose}
        
      >
        {statusFilters.map((item) => {
          return (
            <li
              key={item}
              disabled={item === selectedItem}
              selected={item === selectedItem}
              onClick={() => {
                onChange(item, setAnchorEl, setSelectedItem);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
