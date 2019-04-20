import React, { useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { withRouter } from 'react-router';
import useForm from './useForm';
import validate from './uploadFormValidationRules';


const UploadForm = (props) => {
    const maxSize = 10485759;
    
    const {
	handleChange,
	setSingleValue,
	handleSubmit,
	values,
	errors,
    } = useForm(process, validate);

    const onDrop = useCallback(acceptedFiles => {
	acceptedFiles.forEach(file => setSingleValue('image', file));
    }, []);

    const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
	onDrop,
	accept: 'image/gif',
	minSize: 0,
	maxSize,
    });

    const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
    
    function process() {
	let formData = new FormData();
	formData.append('src', values.image);
	formData.append('title', values.title);
	formData.append('description', values.description);
	axios.post('http://localhost:8000/api/images/', formData,
		   {
		       headers: {
			   'Content-Type': 'multipart/form-data'
		       }
		   }
		  )
	    .then(response => {
		const image = response.data;
		props.history.push(`/gifs/${image.id}`);
	    })
	    .catch(function(error) {
		console.log(error);
	    });
    }

   return (
    <form onSubmit={handleSubmit}>
      <div {...getRootProps()} className="field">
        <label className="label">Image</label>
        <div className="control">
          <input {...getInputProps()} required/>
          {!isDragActive && 'Click here to drop a file to upload' }
          {isDragActive && !isDragReject && 'Drop it'}
          {isDragReject && 'File type not supported'}
          {isFileTooLarge && (
            <p className="help is-danger">
              File is too large.
            </p>
           )}
           <ul className="list-group">
             {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
               <li className="list-group-ite list-group-item-success" key={acceptedFile.name}>
                 {acceptedFile.name}
               </li>
	      ))}
           </ul>
         </div>
       </div>
       <div className="field">
         <label className="label">Title</label>
         <div className="control">
           <input autoComplete="off"  className={`input ${errors.title && 'is-danger'}`} type="text" name="title" onChange={handleChange} value={values.title || ''}  required />
           {errors.title && (
             <p className="help is-danger">{errors.title}</p>
           )}
         </div>
       </div>
       <div className="field">
         <label className="label">Description</label>
         <div className="control">
           <textarea name="description" className={`textarea ${errors.description && 'is-danger'}`} onChange={handleChange} value={values.description || ''} required></textarea>
           {errors.description && (
             <p className="help is-danger">{errors.description}</p>
           )}
         </div>
       </div>
       <div className="field is-grouped">
         <div className="control">
           <button className="button is-link" type="submit">Upload</button>
         </div>
      </div>
    </form>
  );
}
 

export default withRouter(UploadForm);
