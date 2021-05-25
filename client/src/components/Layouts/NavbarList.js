import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import ContactContext from "../../context/Contact/ContactContext";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const NavbarList = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { logout } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  return (
    <>
      <List>
        <ListItem button>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary='Account' />
        </ListItem>
        <ListItem button onClick={onLogout}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary='Log Out' />
        </ListItem>
      </List>
    </>
  );
};

export default NavbarList;
