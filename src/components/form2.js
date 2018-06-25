import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
  // Setting the initial values of this.state.description, this.state.test, this.state.comments
  state = {
    description: "",
    test: 'Undetermined',
    comments: "", 

  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.fileInput = React.createRef();

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

//  need sumbit event to send to firebase database. this is just a placeholder
    handleSubmit(event) {
        // highlight-range{4}
        event.preventDefault();
        alert(
        `Selected file - ${
            this.fileInput.current.files[0].name
        }`
        );
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Choose a photo to upload</p>
        <input type="file" ref={this.fileInput} />
        <p>Description: {this.state.description}</p>
        <input
          type="text"
          placeholder="Description"
        />
        <p>Fentanyl Test Results: {this.state.test}</p>
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
            <option value="undetermined">Undetermined</option>
        </select>
        <p>Comments: {this.state.comments}</p>
            <textarea 
            rows ="8" 
            cols="50"
            placeholder="Additional Comments" 
            value={this.state.value} onChange={this.handleChange} />
        <button type="sumbit">Submit</button>
      </form>

    );
  }
};

export default Form;


