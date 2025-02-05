// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import styles from "./Lefts.module.css";

// const Lefts = () => {
//   const navigate = useNavigate();

//   // State for email & password
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

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

//     // Validation
//     if (!formData.email || !formData.password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     try {
//       // Send login request to backend
//       const res = await axios.post("http://localhost:8000/login", formData);

//       if (res.data === "success") {
//         // Redirect to home page after successful login
//         navigate("/home", { state: { id: formData.email } });
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("Error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.lefts}>
//       <b className={styles.loginToYour}>Login to Your Account</b>
//       <p className={styles.loginUsingSocial}>Login using social network</p>

//       {/* Login Form */}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           className={styles.inputField}
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Your E-mail"
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

//         {/* Error message */}
//         {error && <div className={styles.error}>{error}</div>}

//         {/* Login Button */}
//         <button type="submit" className={styles.signUpButton}>
//           Login
//         </button>
//       </form>

//       {/* Social Login Icons */}
//       <div className={styles.socialIcons}>
//         <img className={styles.icon} alt="LinkedIn" src="skill-icons:linkedin.svg" />
//         <img className={styles.icon} alt="GitHub" src="devicon:github-wordmark.svg" />
//         <img className={styles.icon} alt="Google" src="devicon:google.svg" />
//       </div>

//       <br />
//       <p>OR</p>
//       <br />
//       <Link to="/signup">Go to Signup</Link>
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
    email: "",
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
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Send login details to backend
      const res = await axios.post("http://localhost:8000/login", formData);

      if (res.data.status === "success") {
        alert("Login Successful");
        navigate("/home", { state: { id: formData.email } }); // Redirect to Home
      } else if (res.data === "wrongpassword") {
        setError("Incorrect password. Try again.");
      } else if (res.data === "notexist") {
        setError("User does not exist. Please sign up.");
      }
    } catch (error) {
      console.error(error);
      setError("Error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.lefts}>
      <b className={styles.loginToYour}>Login to Your Account</b>
      <p className={styles.loginUsingSocial}>Login using social network</p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
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
          type="password"
          name="password"
          className={styles.inputField}
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />

        {/* Error message if any */}
        {error && <div className={styles.error}>{error}</div>}

        {/* Login Button */}
        <button type="submit" className={styles.signUpButton}>
          Login
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
      <Link to="/signup">Go to Signup</Link>
    </div>
  );
};

export default Lefts;
