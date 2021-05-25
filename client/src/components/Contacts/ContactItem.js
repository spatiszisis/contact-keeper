import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/Contact/ContactContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  item: {
    minWidth: "350px",
    margin: "1em",
    boxSizing: "border-box",
  },
}));

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const classes = useStyles();

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  // const onDelete = () => {
  //   deleteContact(_id);
  //   clearCurrent();
  // };

  return (
    <Card className={classes.item}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        }
        title={
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                paddingRight: "40px",
              }}
            >
              <h3>{name}</h3>
              <p>{type}</p>
            </div>
          </>
        }
        subheader={
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                paddingRight: "40px",
              }}
            >
              <EmailIcon />
              <span>{email}</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                paddingRight: "40px",
              }}
            >
              <PhoneIcon />
              <span>{phone}</span>
            </div>
          </>
        }
      />

      {/* <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='delete' onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton
          edge='end'
          aria-label='delete'
          onClick={() => setCurrent(contact)}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction> */}
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
