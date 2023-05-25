import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import useLocales from '../hooks/useLocales';

let options = localStorage.getItem('workspaces') || null;
const tenantIndex = localStorage.getItem('tenant_index') || 0;
options = options !== null ? JSON.parse(options) : null;

export default function WorkspaceSwitcher() {
  const { translate, currentLang } = useLocales();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(tenantIndex);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    localStorage.setItem('tenant_id', options[index].id);
    localStorage.setItem('tenant_index', index);
    localStorage.setItem('tenant_url', options[index].domain);
    localStorage.setItem('tenant_role', options[index].company_role.role_id);
    localStorage.setItem('tenant_active', options[index].active);
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    (options && (
      <div>
        <List
          component="nav"
          aria-label="Device settings"
          style={{
            borderStyle: 'dashed',
            borderColor: 'rgba(145, 158, 171, 0.17)',
            borderRadius: 12,
            minWidth: 150,
            maxHeight: 56,
            paddingTop: '0px',
          }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            style={{
              borderRadius: 12,
              backgroundColor: 'rgba(247, 247, 247,0.1)',
            }}
          >
            <ListItemText
              secondaryTypographyProps={{ fontSize: '14px' }}
              primaryTypographyProps={{ fontSize: '10px' }}
              secondary={currentLang.value === 'en' ? options[selectedIndex].name_en : options[selectedIndex].name_ar}
              primary={translate('Workspaces')}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options?.map((option, index) => (
            <MenuItem
              key={index}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              <div>
                <div>{currentLang.value === 'en' ? option?.name_en : option?.name_ar}</div>
                {/* <div>{option?.domain}</div> */}
              </div>
            </MenuItem>
          ))}
        </Menu>
      </div>
    )) || <></>
  );
}
