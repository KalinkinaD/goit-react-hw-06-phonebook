import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactListElem from "./ContactListElem/ContactListElem";
import styles from "./ContactList.module.css";

import { connect } from "react-redux";

const itemMove = {
  enter: styles.enter,
  enterActive: styles.enterActive,
  exit: styles.exit,
  exitActive: styles.exitActive,
};

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={itemMove}>
          <ContactListElem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  ),
});

export default connect(mapStateToProps)(ContactList);
