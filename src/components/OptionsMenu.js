import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu } from '@mui/material';
import React, { useRef, useState } from 'react';

const OptionsMenu = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const anchorRef = useRef(null);

  return (
    <>
      <IconButton onClick={() => setShowMenu(true)} ref={anchorRef}>
        <MoreVertIcon />
      </IconButton>

      <Menu open={showMenu} onClose={() => setShowMenu(false)} anchorEl={anchorRef?.current}>
        {children}
      </Menu>
    </>
  );
};

export default OptionsMenu;
