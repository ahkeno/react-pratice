import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =({
      randomQuote: {
        quote: "Hello",
        author: "foo"
      }
    })
    this.onClickRandomQuote = this.onClickRandomQuote.bind(this);

  }

  onClickRandomQuote(){
    const API = "https://talaikis.com/api/quotes/random/";
    fetch(API)
      .then(response => 
         response.json()).then((repos) => {
          this.setState({
            randomQuote: repos
          });
      });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.randomQuote.quote}
        </div>
        <div id="author">
         {this.state.randomQuote.author}
        </div>
        <div id="new-quote">
          <input type="button" onClick={this.onClickRandomQuote} value="New Quote"/>
        </div>
      </div>
    );
  }
}

export default App;
