import React from 'react';
import { connect } from 'react-redux';

const BookDetail = (props) => {
  if (!props.book) {
    return <div>Select a book to get started.</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <div>{props.book.title}</div>
      <div>{props.book.pages}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
