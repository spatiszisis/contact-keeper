import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/Contact/ContactContext";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactForm = ({ open, handleCloseDialog }) => {
  const contactContext = useContext(ContactContext);
  const classes = useStyles();

  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  // return (
  // <form onSubmit={onSubmit}>
  //   <div className='page-header'>
  //     <h1>{current ? "Edit Contact" : "Add Contact"}</h1>
  //   </div>
  //   <input
  //     type='text'
  //     placeholder='Name'
  //     name='name'
  //     value={name}
  //     onChange={onChange}
  //   />
  //   <input
  //     type='email'
  //     placeholder='Email'
  //     name='email'
  //     value={email}
  //     onChange={onChange}
  //   />
  //   <input
  //     type='text'
  //     placeholder='Phone'
  //     name='phone'
  //     value={phone}
  //     onChange={onChange}
  //   />
  // <h5>Contact Type</h5>
  // <input
  //   type='radio'
  //   name='type'
  //   value='personal'
  //   checked={type === "personal"}
  //   onChange={onChange}
  // />
  // Personal{" "}
  // <input
  //   type='radio'
  //   name='type'
  //   value='professional'
  //   checked={type === "professional"}
  //   onChange={onChange}
  // />
  //   Professional{" "}
  //   <div>
  //     <input
  //       type='submit'
  //       value={current ? "Update Contact" : "Add Contact"}
  //       className='btn btn-primary btn-block'
  //     />
  //   </div>
  //   {current && (
  //     <div>
  //       <button className='btn btn-light btn-block' onClick={clearAll}>
  //         Clear
  //       </button>
  //     </div>
  //   )}
  // </form>
  // );

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>
        {current ? "Edit Contact" : "Add Contact"}
      </DialogTitle>
      <form className={classes.form} onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            variant='outlined'
            margin='normal'
            type='text'
            required
            fullWidth
            label='Name'
            value={name}
            onChange={onChange}
            name='name'
          />
          <TextField
            variant='outlined'
            margin='normal'
            type='email'
            required
            fullWidth
            label='Email'
            value={email}
            onChange={onChange}
            name='email'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={phone}
            label='Phone'
            type='text'
            onChange={onChange}
            name='phone'
          />
          <br />
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Contact Type</FormLabel>
            <RadioGroup aria-label='gender' name='type' onChange={onChange}>
              <FormControlLabel
                value='personal'
                control={<Radio />}
                label='Personal'
              />
              <FormControlLabel
                value='professional'
                control={<Radio />}
                label='Professional'
              />
            </RadioGroup>
          </FormControl>
          {/* <h5>Contact Type</h5>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === "personal"}
            onChange={onChange}
          />
          Personal{" "}
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === "professional"}
            onChange={onChange}
          />
          Professional{" "} */}
          {/* <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Add Contact
          </Button> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            {current ? "Update Contact" : "Add Contact"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ContactForm;
