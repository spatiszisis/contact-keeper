import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";
import ContactContext from "../../context/Contact/ContactContext";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <a href='#!' onClick={onLogout}>
          <i className='fas fa-sign-out-alt'></i>{" "}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} style={{ marginRight: "10px" }} />
        {title}
      </h1>
      {/* <ul>{isAuthenticated ? authLinks : guestLinks}</ul> */}
      <ul>{authLinks}</ul>
    </div>
  );

  // return (
  //   <AppBar position='static'>
  //     <Toolbar>
  //       <Typography variant='h6'>ContactKeeper</Typography>
  //       {/* <Button color='inherit'>Login</Button> */}
  //     </Toolbar>
  //   </AppBar>
  //   // <nav class='navbar navbar-expand-lg navbar-light bg-light'>
  //   //   <div class='container-fluid'>
  //   //     <a class='navbar-brand' href='/'>
  //   //       Contact Keeper
  //   //     </a>
  //   //     <button
  //   //       class='navbar-toggler'
  //   //       type='button'
  //   //       data-bs-toggle='collapse'
  //   //       data-bs-target='#navbarSupportedContent'
  //   //       aria-controls='navbarSupportedContent'
  //   //       aria-expanded='false'
  //   //       aria-label='Toggle navigation'
  //   //     >
  //   //       <span class='navbar-toggler-icon'></span>
  //   //     </button>
  //   //     <div class='collapse navbar-collapse' id='navbarSupportedContent'>
  //   //       <ul class='navbar-nav me-auto mb-2 mb-lg-0'></ul>
  //   //       <div class='d-flex'>
  //   //         <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
  //   //           <li class='nav-item'>
  //   //             <a class='nav-link active' aria-current='page' href='#'>
  //   //               Home
  //   //             </a>
  //   //           </li>
  //   //         </ul>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </nav>
  // );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
