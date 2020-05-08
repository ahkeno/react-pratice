import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './book.module.scss';

class book extends Component{

  render(){
    return(
      <div className={styles.bookcontainer}>
        <img src={this.props.book.image_url}/>
        <h2 className={styles.header}>{this.props.book.title} </h2>  
        <h3 className={styles.header}> by {this.props.book.author} </h3>
      </div>
    )
  }
}

book.propTypes = {
  book: PropTypes.object.isRequired,
};

book.defaultProps = {};

export default book;
