import React from 'react';
import styles from './User_plate.module.css';

const User_plate = () => {
  return (
    <div className={styles.ellipseParent}>
      <img className={styles.frameChild} alt="" src="Ellipse 4.png" />
      <b className={styles.userName}>USER NAME</b>
      <div className={styles.seniorDeveloper}>SENIOR DEVELOPER</div>
      <div className={styles.ellipseGroup}>
        <img className={styles.frameItem} alt="" src="Ellipse 5.png" />
        <div className={styles.reportingTo}>Reporting to</div>
        <div className={styles.projectManager}>Project Manager</div>
        <div className={styles.mrKrishnaYadav}>Mr. Krishna Yadav</div>
      </div>
      <div className={styles.personalDetailsParent}>
        <b className={styles.personalDetails}>Personal Details</b>
        <div className={styles.xxxxx}>98356XXXXX</div>
        <div className={styles.usernamegmailcom}>username@gmail.com</div>
        <div className={styles.remote}>Remote</div>
        <img className={styles.tablerphoneIcon} alt="" src="tabler:phone.svg" />
        <img className={styles.icoutlineEmailIcon} alt="" src="ic:outline-email.svg" />
        <img className={styles.mingcutelocationLineIcon} alt="" src="mingcute:location-line.svg" />
      </div>
      <div className={styles.jobDetailsParent}>
        <b className={styles.jobDetails}>JOB Details</b>
        <div className={styles.seniorDeveloper1}>Senior Developer</div>
        <div className={styles.techwebDeveloper}>Tech/Web Developer</div>
        <div className={styles.icoutlineEmailIcon} />
        <div className={styles.jobTitle}>Job Title</div>
        <div className={styles.department}>Department</div>
      </div>
    </div>
  );
};

export default User_plate;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import styles from './User_plate.module.css';

// // const UserPlate = () => {
// //   const [profile, setProfile] = useState(null);
// //   const [posts, setPosts] = useState([]);
// //   const [error, setError] = useState("");

// //   // Function to fetch user profile
// //   const fetchUserProfile = async () => {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       setError("User not logged in.");
// //       return;
// //     }

// //     try {
// //       const res = await axios.get("http://localhost:8000/user/profile", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       setProfile(res.data);
// //     } catch (err) {
// //       setError("Error fetching user profile.");
// //     }
// //   };

// //   // Function to fetch posts data
// //   const fetchPosts = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/posts");
// //       setPosts(res.data);
// //     } catch (err) {
// //       setError("Error fetching posts.");
// //     }
// //   };

// //   // Fetch data when component mounts
// //   useEffect(() => {
// //     fetchUserProfile();
// //     fetchPosts();
// //   }, []);

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   return (
// //     <div className={styles.ellipseParent}>
// //       {profile && (
// //         <>
// //           <img className={styles.frameChild} alt="" src="Ellipse 4.png" />
// //           <b className={styles.userName}>{profile.username}</b>
// //           <div className={styles.seniorDeveloper}>SENIOR DEVELOPER</div>

// //           <div className={styles.ellipseGroup}>
// //             <img className={styles.frameItem} alt="" src="Ellipse 5.png" />
// //             <div className={styles.reportingTo}>Reporting to</div>
// //             <div className={styles.projectManager}>Project Manager</div>
// //             <div className={styles.mrKrishnaYadav}>Mr. Krishna Yadav</div>
// //           </div>

// //           <div className={styles.personalDetailsParent}>
// //             <b className={styles.personalDetails}>Personal Details</b>
// //             <div className={styles.xxxxx}>{profile.mobile}</div>
// //             <div className={styles.usernamegmailcom}>{profile.email}</div>
// //             <div className={styles.remote}>Remote</div>
// //             <img className={styles.tablerphoneIcon} alt="" src="tabler:phone.svg" />
// //             <img className={styles.icoutlineEmailIcon} alt="" src="ic:outline-email.svg" />
// //             <img className={styles.mingcutelocationLineIcon} alt="" src="mingcute:location-line.svg" />
// //           </div>

// //           <div className={styles.jobDetailsParent}>
// //             <b className={styles.jobDetails}>JOB Details</b>
// //             <div className={styles.seniorDeveloper1}>Senior Developer</div>
// //             <div className={styles.techwebDeveloper}>Tech/Web Developer</div>
// //             <div className={styles.jobTitle}>Job Title</div>
// //             <div className={styles.department}>Department</div>
// //           </div>
// //         </>
// //       )}

// //       {/* Posts Section */}
// //       <div className={styles.postsSection}>
// //         <h2>Posts</h2>
// //         {posts.length > 0 ? (
// //           posts.map((post) => (
// //             <div key={post.id} className={styles.postItem}>
// //               <h3>{post.title}</h3>
// //               <p>{post.content}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No posts available</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserPlate;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styles from './User_plate.module.css';

// const User_plate = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch user data from the backend using the token
//     const token = localStorage.getItem("token");

//     if (token) {
//       axios
//         .get("https://login-signup-worknix.onrender.com/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           setUserData(response.data); // Assuming the response has user data
//         })
//         .catch((err) => {
//           console.error("Error fetching user data", err);
//           setError("Error occurred while fetching user data.");
//         });
//     }
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.ellipseParent}>
//       <img className={styles.frameChild} alt="User Avatar" src="Ellipse 4.png" />
//       <b className={styles.userName}>{userData.username}</b>
//       <div className={styles.seniorDeveloper}>SENIOR DEVELOPER</div>
//       <div className={styles.ellipseGroup}>
//         <img className={styles.frameItem} alt="Manager Avatar" src="Ellipse 5.png" />
//         <div className={styles.reportingTo}>Reporting to</div>
//         <div className={styles.projectManager}>Project Manager</div>
//         <div className={styles.mrKrishnaYadav}>Mr. Krishna Yadav</div>
//       </div>
//       <div className={styles.personalDetailsParent}>
//         <b className={styles.personalDetails}>Personal Details</b>
//         <div className={styles.xxxxx}>{userData.mobile}</div>
//         <div className={styles.usernamegmailcom}>{userData.email}</div>
//         <div className={styles.remote}>Remote</div>
//         <img className={styles.tablerphoneIcon} alt="Phone Icon" src="tabler:phone.svg" />
//         <img className={styles.icoutlineEmailIcon} alt="Email Icon" src="ic:outline-email.svg" />
//         <img className={styles.mingcutelocationLineIcon} alt="Location Icon" src="mingcute:location-line.svg" />
//       </div>
//       <div className={styles.jobDetailsParent}>
//         <b className={styles.jobDetails}>JOB Details</b>
//         <div className={styles.seniorDeveloper1}>Senior Developer</div>
//         <div className={styles.techwebDeveloper}>Tech/Web Developer</div>
//         <div className={styles.icoutlineEmailIcon} />
//         <div className={styles.jobTitle}>Job Title</div>
//         <div className={styles.department}>Department</div>
//       </div>
//     </div>
//   );
// };

// export default User_plate;
