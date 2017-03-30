import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 'Type your *markdown* here!'};
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  getMarkup() {
    return {__html: window.marked(this.state.value)};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Markdown Previewer</h1>
            <h3>Input</h3>
            <textarea className="form-control" onChange={this.handleChange} defaultValue={this.state.value} />
            <h3>Output</h3>
            <div className="content" dangerouslySetInnerHTML={this.getMarkup()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
