import React, {
  cloneElement,
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/Contact/ContactContext";
import Spinner from "../Layouts/Spinner";
import ContactItem from "./ContactItem";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
    cloneElement(element, {
      key: value,
    })
  );
}

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }

  // return (
  //   <Fragment>
  //     {contacts !== null && !loading ? (
  //       <TransitionGroup>
  //         {filtered !== null
  //           ? filtered.map((contact) => (
  //               <CSSTransition
  //                 key={contact._id}
  //                 timeout={500}
  //                 classNames='item'
  //               >
  //                 <ContactItem contact={contact} />
  //               </CSSTransition>
  //             ))
  //           : contacts.map((contact) => (
  //               <CSSTransition
  //                 key={contact._id}
  //                 timeout={500}
  //                 classNames='item'
  //               >
  //                 <ContactItem contact={contact} />
  //               </CSSTransition>
  //             ))}
  //       </TransitionGroup>
  //     ) : (
  //       <Spinner />
  //     )}
  //   </Fragment>
  // );

  return contacts !== null && !loading ? (
    filtered !== null ? (
      filtered.map((contact) => <ContactItem contact={contact} />)
    ) : (
      contacts.map((contact) => <ContactItem contact={contact} />)
    )
  ) : (
    <Spinner />
  );
};

export default Contacts;

{
  /* <div className={classes.demo}>
{/* <List dense={dense}> */
}

{
  /* </List> */
}
// </div> */}
