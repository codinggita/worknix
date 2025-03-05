import React from 'react';

function CreateCommunity() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData.entries()));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', background: '#fff' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Create Community</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="name"
          placeholder="Community Name"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
          }}
          required
        />
        <textarea
          name="description"
          placeholder="Community Description"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
            height: '80px',
          }}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        />
        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
          <input type="checkbox" name="isPrivate" style={{ cursor: 'pointer' }} />
          Private Community
        </label>
        <input
          type="text"
          name="members"
          placeholder="Invite Members (comma-separated emails)"
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            background: '#008080',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Create Community
        </button>
      </form>
    </div>
  );
}

export default CreateCommunity;
