import React from "react";
import { Card, CardContent } from "./CardContent";
import { Button } from "./Button Component";
import { Textarea } from "./Textarea Component";
import { Smile, ImageIcon, VideoIcon, MoreHorizontal } from "lucide-react";

const CommunityUI = () => {
  // Static data for now
  const posts = [
    {
      id: 1,
      name: "Lucia Schaefer",
      time: "5 mins ago",
      content:
        "Hi, I am a beginner interior designer and I am looking for someone who would like to work on a project together. Someone willing?",
      likes: 187,
      comments: 24,
      shares: 3,
    },
    {
      id: 2,
      name: "Raúl Jiménez",
      time: "10 mins ago",
      content:
        "Hi, I am a beginner interior designer and I am looking for someone who would like to work on a project together. Someone willing?",
      likes: 102,
      comments: 18,
      shares: 1,
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Hello Daniel</h1>
      <p className="mb-8 text-gray-600 text-lg">
        What's new with you? Would you like to share something with the community? <Smile className="inline w-6 h-6 text-yellow-500" />
      </p>
      
      {/* Create Post */}
      <Card className="mb-10 bg-white shadow-md rounded-lg">
        <CardContent className="space-y-6">
          <Textarea placeholder="What's up, Daniel?" className="resize-none p-4 text-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md mt-4" />
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 text-gray-500">
              <Button variant="ghost" size="icon">
                <ImageIcon className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <VideoIcon className="w-6 h-6" />
              </Button>
            </div>
            <Button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Publish</Button>
          </div>
        </CardContent>
      </Card>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="mb-6 bg-white shadow-md rounded-lg">
          <CardContent>
            <div className="mb-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg text-gray-800">{post.name}</p>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
              <div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </Button>
              </div>
            </div>
            <div className="p-4 bg-[#F5FAFF] rounded-md">
              <p className="mb-6 text-gray-700 text-base">{post.content}</p>
            </div>
            <div className="flex justify-between text-gray-600 text-sm mt-4">
              <p>❤️ {post.likes} Likes</p>
              <p>💬 {post.comments} Comments</p>
              <p>🔄 {post.shares} Shares</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommunityUI;