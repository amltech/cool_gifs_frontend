import React from 'react';
import EditForm from './../components/EditForm';

const Edit = (props) => {
  return (
    <div className="box">
      <EditForm pk={props.match.params.pk} />
    </div>
  );
};

export default Edit;
