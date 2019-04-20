import React from 'react';
import useForm from './useForm';
import validate from './uploadFormValidationRules';

const UploadForm = () => {
    const { values, errors, handleChange, handleSubmit, } = useForm(process, validate);
    function process() {
	console.log(values);
    }
   return (
	   <form onSubmit={handleSubmit}>
	   <div>
	   <input type="file" name="image" onChange={handleChange} value={values.image || ''} required />
	   </div>
	   <div>
	   <input autoComplete="off"  className={`input ${errors.title && 'is-danger'}`} type="text" name="title" onChange={handleChange} value={values.title || ''}  required />
	   {errors.title && (
	           <p className="help is-danger">{errors.title}</p>
	   )}
	   </div>
	   <div>
	   <textarea name="description" className={`input ${errors.description && 'is-danger'}`} onChange={handleChange} value={values.description || ''} required></textarea>
	   {errors.description && (
	           <p className="help is-danger">{errors.description}</p>
	   )}

	   </div>
	   <button type="submit">Upload</button>
	    </form>
	
	);
}
 

export default UploadForm;
