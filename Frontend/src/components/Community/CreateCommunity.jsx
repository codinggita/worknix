

// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function CreateCommunity() {
// //   const navigate = useNavigate();
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     image: '',
// //     isPrivate: false,
// //     members: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage(null);
    
// //     const payload = {
// //       name: formData.name,
// //       description: formData.description,
// //       image: formData.image,
// //       isPrivate: formData.isPrivate,
// //       members: formData.members.split(',').map(email => email.trim())
// //     };

// //     try {
// //       const response = await fetch('https://worknix-9a9y.onrender.com/api/communities', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(payload)
// //       });
      
// //       if (response.ok) {
// //         setMessage({ type: 'success', text: 'Community created successfully!' });
// //         setTimeout(() => navigate('/my-communities'), 1500);
// //       } else {
// //         setMessage({ type: 'error', text: 'Failed to create community. Try again.' });
// //       }
// //     } catch (error) {
// //       setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="p-6 max-w-2xl mx-auto">
// //       <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Community</h1>
// //       {message && (
// //         <p className={`text-sm p-2 rounded-lg ${message.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>{message.text}</p>
// //       )}
// //       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
// //         <div>
// //           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Community Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             value={formData.name}
// //             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
// //             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
// //           <textarea
// //             id="description"
// //             value={formData.description}
// //             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none h-32"
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Community Image URL</label>
// //           <input
// //             type="url"
// //             id="image"
// //             value={formData.image}
// //             onChange={(e) => setFormData({ ...formData, image: e.target.value })}
// //             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
// //           />
// //           {formData.image && <img src={formData.image} alt="Preview" className="mt-2 w-20 h-20 rounded-lg object-cover" />}
// //         </div>
// //         <div>
// //           <label className="flex items-center space-x-2">
// //             <input
// //               type="checkbox"
// //               checked={formData.isPrivate}
// //               onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
// //             />
// //             <span className="text-sm">Private Community</span>
// //           </label>
// //         </div>
// //         <div>
// //           <label htmlFor="members" className="block text-sm font-medium text-gray-700">Invite Members (Emails, comma-separated)</label>
// //           <input
// //             type="text"
// //             id="members"
// //             value={formData.members}
// //             onChange={(e) => setFormData({ ...formData, members: e.target.value })}
// //             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 disabled:opacity-50"
// //         >
// //           {loading ? 'Creating...' : 'Create Community'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default CreateCommunity;




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function CreateCommunity() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     image: '',
//     isPrivate: false,
//     members: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage(null);

//     const payload = {
//       name: formData.name.trim(),
//       description: formData.description.trim(),
//       image: formData.image.trim(),
//       isPrivate: formData.isPrivate,
//       members: formData.members.split(',').map(email => email.trim()).filter(email => email)
//     };

//     try {
//       const response = await fetch('https://worknix-9a9y.onrender.com/api/communities', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload)
//       });

//       if (response.ok) {
//         setMessage({ type: 'success', text: 'Community created successfully!' });
//         setTimeout(() => navigate('/my-communities'), 1500);
//       } else {
//         const errorData = await response.json();
//         setMessage({ type: 'error', text: errorData.message || 'Failed to create community. Try again.' });
//       }
//     } catch (error) {
//       setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Community</h1>

//       {message && (
//         <p className={`text-sm p-2 rounded-lg ${message.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
//           {message.text}
//         </p>
//       )}

//       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
//         {/* Community Name */}
//         <div className="relative">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Community Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-blue-400"
//             placeholder="Enter community name"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className="relative">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-blue-400 h-32"
//             placeholder="Write a short description..."
//             required
//           />
//         </div>

//         {/* Community Image */}
//         <div className="relative">
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Community Image URL</label>
//           <input
//             type="url"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-blue-400"
//             placeholder="Paste image URL here..."
//           />
//           {formData.image && (
//             <img src={formData.image} alt="Preview" className="mt-2 w-24 h-24 rounded-lg object-cover shadow-md" />
//           )}
//         </div>

//         {/* Private Community Toggle - Now fully clickable */}
//         <div
//           className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
//           onClick={() => setFormData((prev) => ({ ...prev, isPrivate: !prev.isPrivate }))} // ✅ Clicking anywhere toggles it
//         >
//           <input
//             type="checkbox"
//             name="isPrivate"
//             checked={formData.isPrivate}
//             onChange={handleChange}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <span className="text-sm cursor-pointer">Private Community</span>
//         </div>

//         {/* Invite Members */}
//         <div className="relative">
//           <label htmlFor="members" className="block text-sm font-medium text-gray-700">Invite Members (Emails, comma-separated)</label>
//           <input
//             type="text"
//             name="members"
//             value={formData.members}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all ease-in-out duration-200 hover:border-blue-400"
//             placeholder="Enter email addresses, separated by commas"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 disabled:opacity-50"
//         >
//           {loading ? 'Creating...' : 'Create Community'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateCommunity;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateCommunity() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    isPrivate: false,
    members: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = {
      name: formData.name.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      isPrivate: formData.isPrivate,
      members: formData.members.split(',').map(email => email.trim()).filter(email => email)
    };

    try {
      const response = await fetch('https://worknix-9a9y.onrender.com/api/communities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Community created successfully!' });
        setTimeout(() => navigate('/my-communities'), 1500);
      } else {
        const errorData = await response.json();
        setMessage({ type: 'error', text: errorData.message || 'Failed to create community. Try again.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Create New Community</h1>

      {message && (
        <p className={`text-sm p-2 rounded-lg ${message.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
          {message.text}
        </p>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Community Name */}
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Community Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 focus:outline-none transition-all ease-in-out duration-200"
            placeholder="Enter community name"
            required
          />
        </div>

        {/* Description */}
        <div className="relative">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 focus:outline-none transition-all ease-in-out duration-200 h-32"
            placeholder="Write a short description..."
            required
          />
        </div>

        {/* Community Image */}
        <div className="relative">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Community Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 focus:outline-none transition-all ease-in-out duration-200"
            placeholder="Paste image URL here..."
          />
          {formData.image && (
            <img src={formData.image} alt="Preview" className="mt-2 w-24 h-24 rounded-lg object-cover shadow-md" />
          )}
        </div>

        {/* Private Community Checkbox - Fully Fixed */}
        <div className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
          <input
            type="checkbox"
            name="isPrivate"
            id="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange} // ✅ FIXED: Checkbox toggles correctly now
            className="w-5 h-5 cursor-pointer"
          />
          <label
            htmlFor="isPrivate"
            className="text-sm cursor-pointer"
          >
            Private Community
          </label>
        </div>

        {/* Invite Members */}
        <div className="relative">
          <label htmlFor="members" className="block text-sm font-medium text-gray-700">Invite Members (Emails, comma-separated)</label>
          <input
            type="text"
            name="members"
            value={formData.members}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 focus:outline-none transition-all ease-in-out duration-200"
            placeholder="Enter email addresses, separated by commas"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Community'}
        </button>
      </form>
    </div>
  );
}

export default CreateCommunity;
