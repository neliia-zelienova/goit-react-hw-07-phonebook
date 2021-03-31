import react, { Component } from "react";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import Container from "./Container/Container";
import { connect } from "react-redux";
import { getContacts } from "../redux/contacts/contacts-operations";

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
  getContacts: () => dispatch(getContacts()),
});

export default connect(null, mapDispatchToProps)(PhoneBook);
