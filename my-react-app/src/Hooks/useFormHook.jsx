function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };
    
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    };
    
    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    };
    
    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset,
        setValues
    };
}

// Usage
function ContactForm() {
    const validate = (values) => {
        const errors = {};
        if (!values.email.includes('@')) {
            errors.email = 'Invalid email';
        }
        return errors;
    };
    
    const { values, errors, touched, handleChange, handleBlur, reset } = 
        useForm({ name: '', email: '' }, validate);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <span className="error">{errors.email}</span>
            )}
            
            <button type="submit">Submit</button>
        </form>
    );
}