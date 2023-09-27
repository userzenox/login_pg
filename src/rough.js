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
   
    <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui_message_success"> <b>Signed in successfully</b> </div>
      ) : (
        <pre>{JSON.stringify()}</pre>
      )}
      <h1>Welcome Back</h1> 
    <div className="containter2">
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="container2">
  <span><a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a></span>
  <span><a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a></span>
  <span><a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a></span>
  <span><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></span>
</div>
    </div>

<div> <b>  OR </b> </div> 
    <div className="container3">
      
    <form onSubmit={handleSubmit}>
       
        <div className="ui divider"></div>
        <div className="ui form">
         
          <div className="field">
            <label>Email &ensp;   </label> <br></br>
            <input
              type="text"
              name="email"
              
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password  </label> <br></br> 
            <input
              type="password"
              name="password"
              
              value={formValues.password}
              onChange={handleChange}
            /> 
            <div className="container4"> Forgot Password?</div>
          
          </div >
          <p>{formErrors.password}</p>
          <div  class="buttons-container" >
          <button className="fluid ui button blue"> Sign In</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    
   
    
  );
}

export default App;