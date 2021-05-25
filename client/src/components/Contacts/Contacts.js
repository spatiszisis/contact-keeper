import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../../context/Contact/ContactContext";
import Spinner from "../Layouts/Spinner";
import ContactItem from "./ContactItem";

import { makeStyles } from "@material-ui/core/styles";

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
