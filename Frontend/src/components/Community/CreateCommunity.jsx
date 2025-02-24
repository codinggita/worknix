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
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    
    const payload = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      isPrivate: formData.isPrivate,
      members: formData.members.split(',').map(email => email.trim())
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
        setMessage({ type: 'error', text: 'Failed to create community. Try again.' });
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
        <p className={`text-sm p-2 rounded-lg ${message.type === 'success' ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>{message.text}</p>
      )}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Community Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:outline-none h-32"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Community Image URL</label>
          <input
            type="url"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:outline-none"
          />
          {formData.image && <img src={formData.image} alt="Preview" className="mt-2 w-20 h-20 rounded-lg object-cover" />}
        </div>
        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              id="isPrivate"
              checked={formData.isPrivate}
              onChange={handleChange}
              className="w-5 h-5 text-[#008080] border-gray-300 rounded focus:ring-2 focus:ring-[#008080]"
            />
            <span className="text-sm">Private Community</span>
          </label>
        </div>
        <div>
          <label htmlFor="members" className="block text-sm font-medium text-gray-700">Invite Members (Emails, comma-separated)</label>
          <input
            type="text"
            id="members"
            value={formData.members}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#008080] focus:border-[#008080] focus:outline-none"
          />
        </div>
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
