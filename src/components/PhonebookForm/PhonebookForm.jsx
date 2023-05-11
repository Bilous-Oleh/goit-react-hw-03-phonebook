import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm } from './PhonebookForm.styled';

export default class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  telId = nanoid();

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      id: nanoid(),
      name: this.state.name,
      number: Number(this.state.number),
    };

    this.props.onSubmit(contactData);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h2 className="form-title">Phonebook</h2>
        <label className="form-label" htmlFor="this.nameId">
          <span className="form-label_name">Name:</span>
          <input
            className="input-form"
            type="text"
            name="name"
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Add name to phonebook"
            required
          />
        </label>
        <label className="form-label" htmlFor="this.telId">
          <span className="form-label_name">Number</span>
          <input
            className="input-form"
            type="tel"
            name="number"
            id={this.telId}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Add a phone number"
            required
          />
        </label>
        <button type="submit" className="form-btn">
          Add contact
        </button>
      </StyledForm>
    );
  }
}
