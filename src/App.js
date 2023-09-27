import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
   const [isShown, setIsSHown] = useState(false);

   const togglePassword = () => {
     setIsSHown((isShown) => !isShown);
   };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
  
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    else if (!values.password.match(numbers)) {
      errors.password ="Password should contains numbers!";
    }
    else if (!values.password.match(lowerCase)) {
      errors.password ="Password should contains a lower case !";
    }
    else if (!values.password.match(upperCase)) {
      errors.password ="Password should contains a Upper case letter!";
    }
    return errors;
  };

  return (
    <div className="main1">
    <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui_message_success"> <b>Signed in successfully</b> </div>
      ) : (
        <pre>{JSON.stringify()}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Welcome Back</h1>
        <div className="ui divider"></div>
        <div className="ui form">
         
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label><br></br> 
            <input
              type="text"
              name="email"
             
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <label>Password  </label> <br></br> 
          <div className="field">
          <input
          type={isShown ? "text" : "password"}
          
          className="input"
          name="password"
          onChange={handleChange}
          value={formValues.password}
        />

        <div className="checkbox-container">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
        
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>

      
        </div>
  );
}

export default App;