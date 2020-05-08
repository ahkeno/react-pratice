import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './booklist.module.scss';
import Book from './../book/book';

class booklist extends Component{
  componentDidMount = (props) => {
    console.log(this.props.booklist);
  };
  render(){
    
    return(
      <div>
      <h2>My Books</h2>
      {this.props.booklist.map((book, index) => (
        <div key={index}>
          <Book book={book}/>
        </div>
        
      ))

      }
      
      </div>)
  }
}

 booklist.propTypes = {
  booklist: PropTypes.array.isRequired,
 };

// booklist.defaultProps = {};

export default booklist;
