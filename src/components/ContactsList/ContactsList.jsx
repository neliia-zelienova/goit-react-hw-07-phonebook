import React from "react";
import { connect } from "react-redux";
import styles from "./ContactsList.module.css";
import {
  deleteContact
} from "../../redux/contacts/contacts-operations";
import Notification from "../Notification";

const ContactsList = ({ contacts, isLoading, onDelete }) => {
  const showNotification = contacts.length === 0 && !isLoading;
  return (
    <>
      {showNotification && <Notification message="No contacts here yet..." />}
      {isLoading && <p>Loading...</p>}
      <ul className={styles.contacts__list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={styles.contacts__item}>
            <span className={styles.contacts__name}>{`${contact.name}:`}</span>
            <span className={styles.contacts__number}>{contact.number}</span>
            <button
              type="button"
              className={styles.contacts__delete__btn}
              onClick={() => onDelete(contact.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

const getContactsForRender = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return filter.length > 0
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : contacts;
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.contacts;
  const contactsForRender = getContactsForRender(contacts, filter);
  return {
    contacts: contactsForRender,
    isLoading: state.contacts.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
