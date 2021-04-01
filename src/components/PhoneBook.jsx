import React, { Component } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import Container from "./Container/Container";
import { connect } from "react-redux";
import { contactsOperations } from "../redux/contacts";

class PhoneBook extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          <ContactsList />
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(contactsOperations.getContacts()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);

// {
//   "contacts": [
//     {
//       "name": "Rosie Simpson",
//       "number": "459-12-56",
//       "id": 1
//     },
//     {
//       "name": "Hermione Kline",
//       "number": "443-89-12",
//       "id": 2
//     },
//     {
//       "name": "Eden Clements",
//       "number": "645-17-79",
//       "id": 3
//     },
//     {
//       "name": "Annie Copeland",
//       "number": "227-91-26",
//       "id": 4
//     }
//   ]
// }
