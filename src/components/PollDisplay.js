import React, { Component } from 'react';

export class PollDisplay extends Component {
     choices=[
        { "id": 1, "label": "JavaScript", "votes": 0 },
        { "id": 2, "label": "Python", "votes": 0 },
        { "id": 3, "label": "Java", "votes": 0 },
        { "id": 4, "label": "C#", "votes": 0 }
      ]
  constructor(props) {
    super(props);
    this.state = {
      language: 'react'
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submit = (event) => {
    event.preventDefault();
    alert('your vote: ' + this.state.language);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
       
        <div>
          <select name='skill' value={this.state.language} onChange={this.handleChange}>
            <option value='JavaScript'>React</option>
            <option value='Python'>Vue</option>
            <option value='java'>Next.js</option>
            <option value='c#'>Next.js</option>
          </select>
        </div>
        <button type='submit'>Vote</button>
      </form>
    );
  }
}

export default PollDisplay;
