// import React from 'react';

// function CreateCommunity() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     console.log('Form submitted:', Object.fromEntries(formData.entries()));
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff' }}>
//       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Community Name"
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             outline: 'none',
//           }}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Community Description"
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             outline: 'none',
//             height: '80px',
//           }}
//           required
//         />
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         />
//         <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
//           <input type="checkbox" name="isPrivate" style={{ cursor: 'pointer' }} />
//           Private Community
//         </label>
//         <input
//           type="text"
//           name="members"
//           placeholder="Invite Members (comma-separated emails)"
//           style={{
//             padding: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             outline: 'none',
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: '10px',
//             background: '#008080',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           Create Community
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateCommunity;
import React, { useState } from 'react';

function CreateCommunity() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isPrivate: false,
    members: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('isPrivate', formData.isPrivate);
    data.append('members', formData.members);
    if (formData.image) data.append('image', formData.image);

    try {
      const response = await fetch('https://worknix-1.onrender.com/api/community/create', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        alert('Community Created Successfully!');
        setFormData({ name: '', description: '', isPrivate: false, members: '', image: null });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Community Name"
          required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Community Description"
          required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none', height: '80px' }}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
          <input type="checkbox" name="isPrivate" checked={formData.isPrivate} onChange={handleChange} />
          Private Community
        </label>
        <input
          type="text"
          name="members"
          value={formData.members}
          onChange={handleChange}
          placeholder="Invite Members (comma-separated emails)"
          style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', background: loading ? '#666' : '#008080', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {loading ? 'Creating...' : 'Create Community'}
        </button>
      </form>
    </div>
  );
}

export default CreateCommunity;
