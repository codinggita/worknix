// import styles from './Lefts.module.css';

// const Lefts = () => {
//   	return (
//     		<div className={styles.lefts}>
//       			<b className={styles.loginToYour}>Login to Your Account</b>
//       			<div className={styles.loginUsingSocial}>Login using social network</div>
//       			<div className={styles.usernameWrapper}>
//         				<div className={styles.username}>UserName</div>
//       			</div>
//       			<div className={styles.enterYourEMailIdWrapper}>
//         				<div className={styles.username}>Enter Your E-mail id</div>
//       			</div>
//       			<div className={styles.mobileNumberWrapper}>
//         				<div className={styles.username}>Mobile Number</div>
//       			</div>
//       			<div className={styles.passwordWrapper}>
//         				<div className={styles.username}>Password</div>
//       			</div>
//       			<div className={styles.signUpWrapper}>
//         				<div className={styles.signUp}>Sign Up</div>
//       			</div>
//       			<img className={styles.skillIconslinkedin} alt="" src="skill-icons:linkedin.svg" />
//       			<img className={styles.devicongithubWordmark} alt="" src="devicon:github-wordmark.svg" />
//       			<img className={styles.devicongoogle} alt="" src="devicon:google.svg" />
//       			<img className={styles.leftsChild} alt="" src="Line 33.svg" />
//     		</div>
//       );
// };

// export default Lefts;

// import styles from './Lefts.module.css';

// const Lefts = () => {
//   	return (
//     		<div className={styles.lefts}>
//       			<b className={styles.loginToYour}>Login to Your Account</b>

//       			{/* Input Fields */}
//       			<input type="text" className={styles.inputFields} placeholder="UserName" />
//       			<input type="email" className={styles.inputField} placeholder="Enter Your E-mail id" />
//       			<input type="tel" className={styles.inputField} placeholder="Mobile Number" />
//       			<input type="password" className={styles.inputField} placeholder="Password" />

//       			{/* Sign Up Button */}
//       			<button className={styles.signUpButton}>Sign Up</button>

//       			{/* Social Icons */}
            
//                   <p className={styles.loginUsingSocial}>Login using social network</p>

//       			<div className={styles.socialIcons}>
//         				<img className={styles.icon} alt="LinkedIn" src="skill-icons:linkedin.svg" />
//         				<img className={styles.icon} alt="GitHub" src="devicon:github-wordmark.svg" />
//         				<img className={styles.icon} alt="Google" src="devicon:google.svg" />
//       			</div>
//     		</div>
//       );
// };

// export default Lefts;


// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import styles from './Lefts.module.css';

// const Lefts = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     mobile: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.username || !formData.email || !formData.mobile || !formData.password) {
//       setError('Please fill all fields');
//       return;
//     }

//     try {
//       // Send form data to backend
//       const res = await axios.post("http://localhost:8000/signup", formData);

//       if (res.data === "exist") {
//         alert("User already exists");
//       } else if (res.data === "notexist") {
//         // Redirect to home page with email as state
//         navigate("/home", { state: { id: formData.email } });
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.lefts}>
//       <b className={styles.loginToYour}>Login to Your Account</b>
//       <p className={styles.loginUsingSocial}>Login using social network</p>

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           className={styles.inputField}
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="UserName"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           className={styles.inputField}
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Your E-mail id"
//           required
//         />
//         <input
//           type="tel"
//           name="mobile"
//           className={styles.inputField}
//           value={formData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile Number"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           className={styles.inputField}
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />

//         {/* Error message if any */}
//         {error && <div className={styles.error}>{error}</div>}

//         {/* Sign Up Button */}
//         <button type="submit" className={styles.signUpButton}>
//           Sign Up
//         </button>
//       </form>

//       {/* Social Icons */}
//       <div className={styles.socialIcons}>
//         <img className={styles.icon} alt="LinkedIn" src="skill-icons:linkedin.svg" />
//         <img className={styles.icon} alt="GitHub" src="devicon:github-wordmark.svg" />
//         <img className={styles.icon} alt="Google" src="devicon:google.svg" />
//       </div>

//       <br />
//       <p>OR</p>
//       <br />
//       <Link to="/">Go to Login</Link>
//     </div>
//   );
// };

// export default Lefts;



// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import styles from './Lefts.module.css';

// const Lefts = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     mobile: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!formData.username || !formData.email || !formData.mobile || !formData.password) {
//       setError('Please fill all fields');
//       return;
//     }

//     try {
//       // Send form data to backend
//       const res = await axios.post("http://localhost:8000/signup", formData);

//       if (res.data.message === "User already exists") {
//         alert("User already exists");
//       } else if (res.data.message === "User registered successfully") {
//         // If user is registered, automatically log in
//         const loginRes = await axios.post("http://localhost:8000/login", {
//           email: formData.email,
//           password: formData.password,
//         });

//         if (loginRes.data.token) {
//           // Store token in localStorage (or any other method of your choice)
//           localStorage.setItem('token', loginRes.data.token);
//           navigate("/home", { state: { id: formData.email } }); // Redirect to home page
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.lefts}>
//       <b className={styles.loginToYour}>Login to Your Account</b>
//       <p className={styles.loginUsingSocial}>Login using social network</p>

//       {/* Form Fields */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           className={styles.inputField}
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="UserName"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           className={styles.inputField}
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Your E-mail id"
//           required
//         />
//         <input
//           type="tel"
//           name="mobile"
//           className={styles.inputField}
//           value={formData.mobile}
//           onChange={handleChange}
//           placeholder="Mobile Number"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           className={styles.inputField}
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           required
//         />

//         {/* Error message if any */}
//         {error && <div className={styles.error}>{error}</div>}

//         {/* Sign Up Button */}
//         <button type="submit" className={styles.signUpButton}>
//           Sign Up
//         </button>
//       </form>

//       {/* Social Icons */}
//       <div className={styles.socialIcons}>
//         <img className={styles.icon} alt="LinkedIn" src="skill-icons:linkedin.svg" />
//         <img className={styles.icon} alt="GitHub" src="devicon:github-wordmark.svg" />
//         <img className={styles.icon} alt="Google" src="devicon:google.svg" />
//       </div>

//       <br />
//       <p>OR</p>
//       <br />
//       <Link to="/">Go to Login</Link>
//     </div>
//   );
// };

// export default Lefts;




import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Lefts.module.css";

const Lefts = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.mobile || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Send form data to backend
      const res = await axios.post("https://login-signup-worknix.onrender.com/signup", formData);

      if (res.data.message === "User already exists") {
        alert("User already exists");
      } else if (res.data.message === "User registered successfully") {
        // Automatically login after successful registration
        const loginRes = await axios.post("https://login-signup-worknix.onrender.com/login", {
          email: formData.email,
          password: formData.password,
        });

        if (loginRes.data.token) {
          localStorage.setItem("token", loginRes.data.token);
          alert("Login Successful");
          navigate("/home", { state: { id: formData.email } });
        }
      }
    } catch (error) {
      console.error(error);
      setError("Error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.lefts}>
      <b className={styles.loginToYour}>Create Your Account</b>
      <p className={styles.loginUsingSocial}>Sign up using social network</p>

      {/* Signup Form Fields */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className={styles.inputField}
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          className={styles.inputField}
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your E-mail id"
          required
        />
        <input
          type="tel"
          name="mobile"
          className={styles.inputField}
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <input
          type="password"
          name="password"
          className={styles.inputField}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        {/* Error message */}
        {error && <div className={styles.error}>{error}</div>}

        {/* Signup Button */}
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
      </form>

      {/* Social Icons */}
      <div className={styles.socialIcons}>
        <img className={styles.icon} alt="LinkedIn" src="skill-icons:linkedin.svg" />
        <img className={styles.icon} alt="GitHub" src="devicon:github-wordmark.svg" />
        <img className={styles.icon} alt="Google" src="devicon:google.svg" />
      </div>

      <br />
      <p>OR</p>
      <br />
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default Lefts;
h