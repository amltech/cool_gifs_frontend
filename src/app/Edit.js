import React from 'react';
import EditForm from './../components/EditForm';

const Edit = (props) => {
  return (
    <div className="box">
      <div class="columns is-centered">
        <EditForm pk={props.match.params.pk} />
      </div>
    </div>
  );
};

export default Edit;
