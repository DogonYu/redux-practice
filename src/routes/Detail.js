import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ toDo }) => {
  return (
    <div>
      <h1>{toDo.text}</h1>
      <h5>Create at: {toDo?.id}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  console.log(id);
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
