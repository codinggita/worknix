
// import Rightsidel from './Rightsidel';
// import Lefts from './Lefts';
// const Signup = () => {
//   return (
//     <div className="signup">
//     <Rightsidel />
//     <Lefts />
//     </div>
//   );
// };

// export default Signup;
import Rightsidel from './Rightsidel';
 import './signup.css'; 
import Lefts from './Lefts';

const Signup = () => {
  return (
    <div className="signup">
      <Lefts />
      <Rightsidel />
    </div>
  );
};

export default Signup;
