// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from 'lucide-react';

// export function Post({ post }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState('');
//   const [localLikes, setLocalLikes] = useState(post.likes);
//   const [localComments, setLocalComments] = useState(post.comments);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes(prev => isLiked ? prev - 1 : prev + 1);
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const comment = {
//       id: Date.now(),
//       user: 'Current User',
//       content: newComment,
//       likes: 0,
//     };

//     setLocalComments([...localComments, comment]);
//     setNewComment('');
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//               <img
//                 src={post.user.avatar}
//                 alt={post.user.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h3 className="font-semibold">{post.user.name}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>
//           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//         </div>

//         <p className="mt-4">{post.content}</p>

//         {post.image && (
//           <div className="mt-4 -mx-4">
//             <img src={post.image} alt="" className="w-full" />
//           </div>
//         )}

//         <div className="mt-4 flex items-center gap-6">
//           <button
//             onClick={handleLike}
//             className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//           >
//             <Heart
//               size={20}
//               className={isLiked ? 'fill-red-500 text-red-500' : ''}
//             />
//             <span>{localLikes}</span>
//           </button>
//           <button
//             onClick={() => setShowComments(!showComments)}
//             className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//           >
//             <MessageCircle size={20} />
//             <span>{localComments.length}</span>
//           </button>
//           <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//             <Share2 size={20} />
//           </button>
//         </div>

//         {showComments && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-4 space-y-4"
//           >
//             {localComments.map((comment) => (
//               <div key={comment.id} className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//                     alt={comment.user}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-grow bg-gray-50 rounded-lg p-3">
//                   <h4 className="font-medium">{comment.user}</h4>
//                   <p>{comment.content}</p>
//                   <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
//                     <button className="hover:text-teal-600 transition-colors">Like</button>
//                     <button className="hover:text-teal-600 transition-colors">Reply</button>
//                     <span>{comment.likes} likes</span>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//                   alt="Current user"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow relative">
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!newComment.trim()}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Send size={20} />
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from 'lucide-react';

// const Post = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState('');
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const comment = {
//       id: Date.now(),
//       user: 'Current User',
//       content: newComment,
//       likes: 0,
//     };

//     setLocalComments([...localComments, comment]);
//     setNewComment('');
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full overflow-hidden">
//             <img
//               src={post.user?.avatar || 'https://via.placeholder.com/40'}
//               alt={post.user?.name || 'User'}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h3 className="font-semibold">{post.user?.name || 'Unknown User'}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.content}</p>

//       {post.image && (
//         <div className="mt-4 -mx-4">
//           <img src={post.image} alt="Post" className="w-full" />
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img src="https://via.placeholder.com/40" alt={comment.user} className="w-full h-full object-cover" />
//               </div>
//               <div className="flex-grow bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//                 <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
//                   <button className="hover:text-teal-600 transition-colors">Like</button>
//                   <button className="hover:text-teal-600 transition-colors">Reply</button>
//                   <span>{comment.likes} likes</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <div className="w-8 h-8 rounded-full overflow-hidden">
//               <img src="https://via.placeholder.com/40" alt="Current user" className="w-full h-full object-cover" />
//             </div>
//             <div className="flex-grow relative">
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//               />
//               <button
//                 type="submit"
//                 disabled={!newComment.trim()}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Send } from "lucide-react";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const user = JSON.parse(sessionStorage.getItem("user")) || {
//     username: "Guest",
//     avatar: "https://via.placeholder.com/40", // Default avatar
//   };

//   // Fetch posts from backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/posts"); // Update API URL if needed
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchPosts();
//   }, []);

//   // Handle Like Functionality
//   const handleLike = async (postId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/posts/${postId}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.ok) {
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post._id === postId ? { ...post, likes: post.likes + 1 } : post
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   // Handle Comment Submission
//   const handleComment = async (e, postId, newComment, setNewComment) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const commentData = {
//       user: user.username,
//       content: newComment,
//     };

//     try {
//       const res = await fetch(`http://localhost:5000/posts/${postId}/comment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(commentData),
//       });

//       if (res.ok) {
//         const updatedPost = await res.json();
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post._id === postId ? updatedPost : post
//           )
//         );
//         setNewComment("");
//       }
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <motion.div
//           key={post._id}
//           className="bg-white rounded-xl shadow-md p-4 mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           layout
//         >
//           {/* Post Header */}
//           <div className="flex items-center gap-3">
//             <img
//               src={post.user?.avatar || "https://via.placeholder.com/40"}
//               alt={post.user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>

//           {/* Post Content */}
//           <p className="mt-4">{post.description}</p>

//           {post.mediaUrl && (
//             <div className="mt-4">
//               {post.mediaType.startsWith("image") ? (
//                 <img src={post.mediaUrl} alt="Post Media" className="w-full rounded-lg" />
//               ) : (
//                 <video controls className="w-full rounded-lg">
//                   <source src={post.mediaUrl} type={post.mediaType} />
//                 </video>
//               )}
//             </div>
//           )}

//           {/* Like & Comment Buttons */}
//           <div className="mt-4 flex items-center gap-6">
//             <button
//               onClick={() => handleLike(post._id)}
//               className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//             >
//               <Heart size={20} />
//               <span>{post.likes}</span>
//             </button>
//             <button
//               className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//             >
//               <MessageCircle size={20} />
//               <span>{post.comments.length}</span>
//             </button>
//           </div>

//           {/* Comments Section */}
//           <motion.div className="mt-4 space-y-4">
//             {post.comments.map((comment, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <img
//                   src={comment.avatar || "https://via.placeholder.com/40"}
//                   alt={comment.user}
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <div className="bg-gray-50 rounded-lg p-3 flex-grow">
//                   <h4 className="font-medium">{comment.user}</h4>
//                   <p>{comment.content}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Comment Input */}
//             <form
//               onSubmit={(e) => handleComment(e, post._id, post.newComment, (value) => {
//                 setPosts((prevPosts) =>
//                   prevPosts.map((p) => (p._id === post._id ? { ...p, newComment: value } : p))
//                 );
//               })}
//               className="flex items-center gap-3 mt-4"
//             >
//               <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full object-cover" />
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={post.newComment || ""}
//                 onChange={(e) =>
//                   setPosts((prevPosts) =>
//                     prevPosts.map((p) => (p._id === post._id ? { ...p, newComment: e.target.value } : p))
//                   )
//                 }
//                 className="w-full px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 disabled={!post.newComment?.trim()}
//                 className="p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50"
//               >
//                 <Send size={20} />
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Send } from "lucide-react";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const user = JSON.parse(sessionStorage.getItem("user")) || {
//     username: "Guest",
//     avatar: "https://via.placeholder.com/40", // Default avatar
//   };

//   // Fetch posts from backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("https://worknix-addpost.onrender.com/api/posts");
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <motion.div
//           key={post._id}
//           className="bg-white rounded-xl shadow-md p-4 mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           layout
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={post.user?.avatar || "https://via.placeholder.com/40"}
//               alt={post.user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>
//           <p className="mt-4">{post.description}</p>
//           {post.mediaUrl && (
//             <div className="mt-4">
//               {post.mediaType.startsWith("image") ? (
//                 <img src={post.mediaUrl} alt="Post Media" className="w-full rounded-lg" />
//               ) : (
//                 <video controls className="w-full rounded-lg">
//                   <source src={post.mediaUrl} type={post.mediaType} />
//                 </video>
//               )}
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;
//     const comment = {
//       id: Date.now(),
//       user: "Current User",
//       content: newComment,
//       likes: 0,
//     };
//     setLocalComments([...localComments, comment]);
//     setNewComment("");
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://via.placeholder.com/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;
//     const comment = {
//       id: Date.now(),
//       user: "Current User",
//       content: newComment,
//       likes: 0,
//     };
//     setLocalComments([...localComments, comment]);
//     setNewComment("");
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://via.placeholder.com/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   // **Handle Like API Call**
//   const handleLike = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to like post");

//       const updatedPost = await response.json();
//       setLocalLikes(updatedPost.likes);
//       setIsLiked(true);
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   // **Handle Comment API Call**
//   const handleComment = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "Current User", text: newComment }),
//       });

//       if (!response.ok) throw new Error("Failed to add comment");

//       const updatedPost = await response.json();
//       setLocalComments(updatedPost.comments);
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://placehold.co/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment._id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://placehold.co/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.text}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };
const PostCard = ({ post, setPosts, user }) => {  // Ensure 'user' prop is passed
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [localLikes, setLocalLikes] = useState(post.likes || 0);
  const [localComments, setLocalComments] = useState(post.comments || []);

  const handleLike = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to like post");

      const updatedPost = await response.json();
      setLocalLikes(updatedPost.likes);
      setIsLiked(true);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    if (!user || !user._id) {
      alert("Please log in to comment.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user._id, text: newComment }),  // Send userId instead of username
      });

      if (!response.ok) throw new Error("Failed to add comment");

      const updatedPost = await response.json();
      setLocalComments(updatedPost.comments);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      {/* USER INFO */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={post.user?.avatar || "https://placehold.co/40"}
            alt={post.user?.username || "Unknown User"}  // Correct username
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{post.user?.username || "Unknown User"}</h3> {/* Updated */}
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical size={20} className="text-gray-500" />
        </button>
      </div>

      {/* POST DESCRIPTION & MEDIA */}
      <p className="mt-4">{post.description}</p>
      {post.mediaUrl && (
        <div className="mt-4 -mx-4">
          {post.mediaType?.startsWith("image") ? (
            <img src={post.mediaUrl} alt="Post Media" className="w-full" />
          ) : (
            <video controls className="w-full">
              <source src={post.mediaUrl} type={post.mediaType} />
            </video>
          )}
        </div>
      )}

      {/* LIKE, COMMENT, SHARE */}
      <div className="mt-4 flex items-center gap-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
          <span>{localLikes}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
        >
          <MessageCircle size={20} />
          <span>{localComments.length}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
          <Share2 size={20} />
        </button>
      </div>

      {/* COMMENTS SECTION */}
      {showComments && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
          {localComments.map((comment, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src="https://placehold.co/40"
                  alt={comment.user?.username || "Anonymous"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-medium">{comment.user?.username || "Anonymous"}</h4> {/* Updated */}
                <p>{comment.text}</p>
              </div>
            </div>
          ))}

          {/* ADD COMMENT */}
          <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
            />
            <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      )}
    </motion.div>
  );
};


export default PostCard;
