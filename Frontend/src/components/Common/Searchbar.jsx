// import React from 'react';
// import styles from './Searchbar.module.css';

// const Searchbar = () => {
//   return (
//     <div className={styles.searchbar}>
//       <input
//         className={styles.searchInput}
//         type="text"
//         placeholder="Search"
//         aria-label="Search"
//       />
//       <button className={styles.addPostButton}>
//         <img
//           className={styles.addPostIcon}
//           src="gridicons:add.svg"
//           alt="Add Post"
//         />
//         Add Post
//       </button>
//     </div>
//   );
// };

// export default Searchbar;

import React from 'react';

const Searchbar = () => {
  return (
    <input
      type="text"
      placeholder="Search"
      style={{
        left:'50px',
        width: '100%',
        maxWidth: '400px', // Restrict search bar width
        padding: '10px',
        borderRadius: '20px',
        border: '1px solid #ccc',
        outline: 'none',
      }}
    />
  );
};

export default Searchbar;
