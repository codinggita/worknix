// // // import React from 'react';

// // // function CreateCommunity() {
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const formData = new FormData(e.target);
// // //     console.log('Form submitted:', Object.fromEntries(formData.entries()));
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff' }}>
// // //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
// // //       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
// // //         <input
// // //           type="text"
// // //           name="name"
// // //           placeholder="Community Name"
// // //           style={{
// // //             padding: '10px',
// // //             border: '1px solid #ccc',
// // //             borderRadius: '5px',
// // //             outline: 'none',
// // //           }}
// // //           required
// // //         />
// // //         <textarea
// // //           name="description"
// // //           placeholder="Community Description"
// // //           style={{
// // //             padding: '10px',
// // //             border: '1px solid #ccc',
// // //             borderRadius: '5px',
// // //             outline: 'none',
// // //             height: '80px',
// // //           }}
// // //           required
// // //         />
// // //         <input
// // //           type="file"
// // //           name="image"
// // //           accept="image/*"
// // //           style={{
// // //             padding: '10px',
// // //             border: '1px solid #ccc',
// // //             borderRadius: '5px',
// // //             cursor: 'pointer',
// // //           }}
// // //         />
// // //         <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
// // //           <input type="checkbox" name="isPrivate" style={{ cursor: 'pointer' }} />
// // //           Private Community
// // //         </label>
// // //         <input
// // //           type="text"
// // //           name="members"
// // //           placeholder="Invite Members (comma-separated emails)"
// // //           style={{
// // //             padding: '10px',
// // //             border: '1px solid #ccc',
// // //             borderRadius: '5px',
// // //             outline: 'none',
// // //           }}
// // //         />
// // //         <button
// // //           type="submit"
// // //           style={{
// // //             padding: '10px',
// // //             background: '#008080',
// // //             color: '#fff',
// // //             border: 'none',
// // //             borderRadius: '5px',
// // //             cursor: 'pointer',
// // //           }}
// // //         >
// // //           Create Community
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default CreateCommunity;
// // import React, { useState } from 'react';

// // function CreateCommunity() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     description: '',
// //     isPrivate: false,
// //     members: '',
// //     image: null,
// //   });
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked, files } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     const data = new FormData();
// //     data.append('name', formData.name);
// //     data.append('description', formData.description);
// //     data.append('isPrivate', formData.isPrivate);
// //     data.append('members', formData.members);
// //     if (formData.image) data.append('image', formData.image);

// //     try {
// //       const response = await fetch('https://worknix-1.onrender.com/api/community/create', {
// //         method: 'POST',
// //         body: data,
// //       });

// //       const result = await response.json();
// //       if (response.ok) {
// //         alert('Community Created Successfully!');
// //         setFormData({ name: '', description: '', isPrivate: false, members: '', image: null });
// //       } else {
// //         alert(`Error: ${result.message}`);
// //       }
// //     } catch (error) {
// //       alert('Something went wrong. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff' }}>
// //       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
// //       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
// //         <input
// //           type="text"
// //           name="name"
// //           value={formData.name}
// //           onChange={handleChange}
// //           placeholder="Community Name"
// //           required
// //           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
// //         />
// //         <textarea
// //           name="description"
// //           value={formData.description}
// //           onChange={handleChange}
// //           placeholder="Community Description"
// //           required
// //           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none', height: '80px' }}
// //         />
// //         <input
// //           type="file"
// //           name="image"
// //           accept="image/*"
// //           onChange={handleChange}
// //           required
// //           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
// //         />
// //         <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
// //           <input type="checkbox" name="isPrivate" checked={formData.isPrivate} onChange={handleChange} />
// //           Private Community
// //         </label>
// //         <input
// //           type="text"
// //           name="members"
// //           value={formData.members}
// //           onChange={handleChange}
// //           placeholder="Invite Members (comma-separated emails)"
// //           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
// //         />
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           style={{ padding: '10px', background: loading ? '#666' : '#008080', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
// //         >
// //           {loading ? 'Creating...' : 'Create Community'}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default CreateCommunity;
// import React, { useState } from 'react';

// function CreateCommunity() {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     isPrivate: false,
//     members: '',
//     image: null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [preview, setPreview] = useState(null); // For image preview

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
//     }));

//     // If it's an image, create a preview URL
//     if (type === 'file' && files[0]) {
//       setPreview(URL.createObjectURL(files[0]));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const data = new FormData();
//     data.append('name', formData.name);
//     data.append('description', formData.description);
//     data.append('isPrivate', formData.isPrivate);
//     data.append('members', formData.members);
//     if (formData.image) data.append('image', formData.image);

//     try {
//       const response = await fetch('https://worknix-1.onrender.com/api/community/create', {
//         method: 'POST',
//         body: data,
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert('Community Created Successfully!');
//         // Reset form
//         setFormData({ name: '', description: '', isPrivate: false, members: '', image: null });
//         setPreview(null);
//       } else {
//         alert(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//       <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
//       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Community Name"
//           required
//           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
//         />
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Community Description"
//           required
//           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none', height: '80px' }}
//         />
        
//         <label style={{ fontWeight: 'bold' }}>Upload Community Image</label>
//         <input
//           type="file"
//           name="image"
//           accept="image/*"
//           onChange={handleChange}
//           required
//           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
//         />
//         {preview && (
//           <img src={preview} alt="Preview" style={{ width: '100%', height: 'auto', borderRadius: '5px', marginTop: '10px' }} />
//         )}

//         <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
//           <input type="checkbox" name="isPrivate" checked={formData.isPrivate} onChange={handleChange} />
//           Private Community
//         </label>
        
//         <input
//           type="text"
//           name="members"
//           value={formData.members}
//           onChange={handleChange}
//           placeholder="Invite Members (comma-separated emails)"
//           style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', outline: 'none' }}
//         />

//         <button
//           type="submit"
//           disabled={loading}
//           style={{ padding: '10px', background: loading ? '#666' : '#008080', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
//         >
//           {loading ? 'Creating...' : 'Create Community'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateCommunity;
import React, { useState } from "react";

function CreateCommunity() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isPrivate: false,
    members: [""], // Array to handle multiple member fields
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  // Handle input changes
  const handleChange = (e, index) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "members") {
      // Update the specific member field
      const updatedMembers = [...formData.members];
      updatedMembers[index] = value;
      setFormData((prev) => ({
        ...prev,
        members: updatedMembers,
      }));
    } else {
      // Update other fields
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
      }));

      // Create a preview URL for the image
      if (type === "file" && files[0]) {
        setPreview(URL.createObjectURL(files[0]));
      }
    }
  };

  // Add a new member field
  const addMemberField = () => {
    setFormData((prev) => ({
      ...prev,
      members: [...prev.members, ""],
    }));
  };

  // Remove a member field
  const removeMemberField = (index) => {
    const updatedMembers = formData.members.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      members: updatedMembers,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData object for the API request
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("isPrivate", formData.isPrivate);
    formData.members.forEach((member, index) => {
      data.append(`members[${index}]`, member);
    });
    if (formData.image) data.append("image", formData.image);

    try {
      // Send the request to the API
      const response = await fetch("https://worknix-1.onrender.com/api/community/create", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Community Created Successfully!");
        // Reset the form
        setFormData({ name: "", description: "", isPrivate: false, members: [""], image: null });
        setPreview(null);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", background: "#fff", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Create Community</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Community Name */}
        <label htmlFor="name" style={{ fontWeight: "bold" }}>
          Community Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Community Name"
          required
          autoComplete="name"
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", outline: "none" }}
        />

        {/* Community Description */}
        <label htmlFor="description" style={{ fontWeight: "bold" }}>
          Community Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Community Description"
          required
          autoComplete="off"
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", outline: "none", height: "80px" }}
        />

        {/* Community Image Upload */}
        <label htmlFor="image" style={{ fontWeight: "bold" }}>
          Upload Community Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          autoComplete="off"
          style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer" }}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", height: "auto", borderRadius: "5px", marginTop: "10px" }}
          />
        )}

        {/* Private Community Checkbox */}
        <label htmlFor="isPrivate" style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            checked={formData.isPrivate}
            onChange={handleChange}
          />
          Private Community
        </label>

        {/* Dynamic Member Fields */}
        <label style={{ fontWeight: "bold" }}>Invite Members</label>
        {formData.members.map((member, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <label htmlFor={`members-${index}`} style={{ display: "none" }}>
              Member Email {index + 1}
            </label>
            <input
              type="email"
              id={`members-${index}`}
              name="members"
              value={member}
              onChange={(e) => handleChange(e, index)}
              placeholder="Member Email"
              required
              autoComplete="off"
              style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", outline: "none", flex: 1 }}
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeMemberField(index)}
                style={{ padding: "5px 10px", background: "#ff4444", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addMemberField}
          style={{ padding: "10px", background: "#008080", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          Add Member
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px", background: loading ? "#666" : "#008080", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
        >
          {loading ? "Creating..." : "Create Community"}
        </button>
      </form>
    </div>
  );
}

export default CreateCommunity;