import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Contact from "./Contact";
import data from "./data";


class Layout extends Component {
    componentWillMount() {
      this.setState({
        contacts: data,
        email: "",
        name: "",
        comments: "",
        file: ""
      });
    }

    handleChange = (e) => {
      var name = e.target.name
      var value = e.target.value
      this.setState({[name]: value})
    }

    componentWillUpdate = (nextprops, nextstate) => {
      console.log(nextstate);
    }

    
  addContact = (e) => {
    e.preventDefault();

      const contacts = this.state.contacts;
      const newId = contacts[contacts.length - 1].id + 1;

      this.setState({
        contacts: contacts.concat({ 
          id: newId, 
          name: this.state.email, 
          email: this.state.name,
          comments: this.state.comments  
        }),
        email: "",
        name: "",
        comments: "",
        file: ""
      });

  };

  newContact = () =>
    <div className="form">
      <Form inline onSubmit={this.addContact}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input ref='email' type="text" name="email" id="exText" placeholder="Input Text Here" value={this.state.email} onChange={this.handleChange} />
            <Input ref='name' type="Name" name="name" id="exName" placeholder="Name" value={this.state.name} onChange={this.handleChange}  />
            <Input ref='comments' type="Comments" name="comments" id="excomm" placeholder="Additional Comments" value={this.state.comments} onChange={this.handleChange}  />
            <Input type="file" name="file" id="userFile" value={this.state.file} onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit">Add</Button>
      </Form>
    </div>;

  render() {
    return (
      <Container>
        <div id="Layout">
        {this.newContact()}
              <Row>
                {this.state.contacts.map(info =>
                  <Contact key={info.id} {...info} />
                )}
              </Row>
              </div>
      </Container>
    );
  }
}

export default Layout;