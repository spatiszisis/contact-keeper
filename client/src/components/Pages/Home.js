import React, { useContext, useEffect } from "react";
import ContactFilter from "../Contacts/ContactFilter";
import ContactForm from "../Contacts/ContactForm";
import Contacts from "../Contacts/Contacts";

import AuthContext from "../../context/Auth/AuthContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
