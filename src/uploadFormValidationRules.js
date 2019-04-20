function validate(values) {
    let errors = {};
    if (!values.title) {
	errors.title = 'Title is required';
    }
    if (!values.description) {
	errors.description = 'Description is required';
    }
    return errors;
};

export default validate;
