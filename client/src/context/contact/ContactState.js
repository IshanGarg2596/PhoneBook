import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const contactState = (props) => {
  const initialState = {
    contacts: [
      {
        type: "personal",
        id: "612be72364cf69ff257642fd",
        name: "ted johnson",
        email: "TedJ@gmail.com",
        phone: "114-161-1711",
      },
      {
        type: "professional",
        id: "612be6f164cf69ff257642fb",
        name: "sarah smith",
        email: "ssmith@gmail.com",
        phone: "111-111-1111",
      },
      {
        type: "personal",
        id: "612be88764cf69ff25764305",
        name: "melisa williams",
        email: "Missy@gmail.com",
        phone: "787-763-8738",
      },
    ],
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };
  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default contactState;
