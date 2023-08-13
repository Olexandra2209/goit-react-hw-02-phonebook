import React, { Component } from 'react';
import { FormContainer, Input, Button } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
          required
        />
        <Input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Phone number"
          required
        />
        <Button type="submit">Add Contact</Button>
      </FormContainer>
    );
  }
}
