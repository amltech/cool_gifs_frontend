import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from './../components/useForm';
import validate from './../components/uploadFormValidationRules';
import api from './apiAccess';

const UploadForm = ({pk}) => {
  const [ submitted, setSubmitted ] = useState(false);
  const [ data, setData ] = useState({ gif: {} });
  const [ serverErrors, setServerErrors ] = useState({ title: [], description: []})
  const apiUrl = `images/${pk}/`;
  const {
    handleChange,
    setSingleValue,
    handleSubmit,
    values,
    errors,
  } = useForm(publishData, validate);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(apiUrl);
      setData(result.data);
      setSingleValue('title', result.data.title);
      setSingleValue('description', result.data.description);
      setSingleValue('id', result.data.id);
    };
    fetchData();
  }, []);
 
  function publishData() {
    api.patch(apiUrl, values)
    .then(response => {
      setSubmitted(true);
    })
    .catch(function(error) {
      setServerErrors(error.response.data);
    });
  }
  if ( submitted ) {
    return (
      <Redirect to={`/gifs/${pk}`} />
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <figure className={`image ${data.height === data.width ? 'is-1x1': 'is-16x9'}`}>
        <img src={data.permalink} alt={data.title} />
      </figure>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input autoComplete="off"  className={`input ${errors.title && 'is-danger'}`} type="text" 
           name="title" onChange={handleChange} value={values.title || ''}  required />
          {errors.title && (
            <p className="help is-danger">{errors.title}</p>
          )}
          {serverErrors.title && (
            <p className="help is-danger">{serverErrors.title[0]}</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea name="description" className={`textarea ${errors.description && 'is-danger'}`} 
           onChange={handleChange} value={values.description || ''} required></textarea>
          {errors.description && (
            <p className="help is-danger">{errors.description}</p>
          )}
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">Save</button>
        </div>
      </div>
    </form>
  );
};
 
export default UploadForm;
