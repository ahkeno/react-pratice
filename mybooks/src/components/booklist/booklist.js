import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './booklist.module.scss';
import Book from './../book/book';

class booklist extends Component{
  componentDidMount(){

  }
  render(){
    return(<div>
      <h2>My Books</h2>
      <Book/>
      </div>)
  }
}

// booklist.propTypes = {};

// booklist.defaultProps = {};

export default booklist;
