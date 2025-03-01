import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, X } from "lucide-react";
import axios from "axios";

export function CreatePost({ onPost }) {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia({
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith("video") ? "video" : "image",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("description", content);
    if (media?.file) {
      formData.append("media", media.file);
    }

    try {
      const response = await axios.post(
        "https://worknix-addpost.onrender.com/api/posts", // ✅ Corrected API endpoint
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Post uploaded:", response.data);
      onPost(response.data.post); // ✅ Update UI with new post
      setContent("");
      setMedia(null);
      setIsExpanded(false);
    } catch (error) {
      console.error("Post upload failed:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
              rows={isExpanded ? 3 : 1}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
            />

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                {media && (
                  <div className="relative mt-2 rounded-lg overflow-hidden">
                    {media.type === "image" ? (
                      <img
                        src={media.preview}
                        alt="Preview"
                        className="max-h-60 w-full object-cover"
                      />
                    ) : (
                      <video controls className="max-h-60 w-full object-cover">
                        <source src={media.preview} type={media.file.type} />
                      </video>
                    )}
                    <button
                      type="button"
                      onClick={() => setMedia(null)}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <label className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                    <ImageIcon size={20} />
                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={!content.trim() || loading}
                    className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Posting..." : "Post"}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}

