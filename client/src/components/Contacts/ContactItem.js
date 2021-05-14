import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/Contact/ContactContext";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
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

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  // return (
  //   <div className='card bg-light'>
  //     <h3 className='text-primary text-left'>
  //       {name}{" "}
  //       <span
  //         style={{ float: "right" }}
  //         className={
  //           "badge " +
  //           (type === "professional" ? "badge-success" : "badge-primary")
  //         }
  //       >
  //         {type.charAt(0).toUpperCase() + type.slice(1)}
  //       </span>
  //     </h3>
  //     <ul className='list'>
  //       {email && (
  //         <li>
  //           <i className='fas fa-envelope-open'></i> {email}
  //         </li>
  //       )}
  //       {phone && (
  //         <li>
  //           <i className='fas fa-phone'></i> {phone}
  //         </li>
  //       )}
  //     </ul>
  //     <p>
  //       <button
  //         className='btn btn-dark btn-sm'
  //         onClick={() => setCurrent(contact)}
  //       >
  //         Edit
  //       </button>
  //       <button className='btn btn-danger btn-sm' onClick={onDelete}>
  //         Delete
  //       </button>
  //     </p>
  //   </div>
  // );

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
      {/* <ListItemText
        primary={name}
        secondary={
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
      /> */}
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
