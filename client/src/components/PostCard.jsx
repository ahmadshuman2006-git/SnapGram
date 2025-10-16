import React, { useState } from "react";
import { BadgeCheck, Heart, MessageCircle, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { dummyUserData } from "../assets/assets";

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  const postWithHashtags = post.content.replace(
    /(#\w+)/g,
    '<span class="text-indigo-600">$1</span>'
  );

  const [likes, setLikes] = useState(post.likes_count || []);
  const currentUser = dummyUserData;
  const handleLike = async () => {};

  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl">
      <div
        className="inline-flex items-center gap-3 cursor-pointer"
        onClick={() => navigate(`/profile/${post.user._id}`)}
      >
        <img
          src={post.user.profile_picture}
          alt=""
          className="w-10 h-10 rounded-full shadow"
        />

        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1">
            <span className="font-medium text-slate-900">
              {post.user.full_name}
            </span>
            {post.user.is_verified && (
              <BadgeCheck className="w-4 h-4 text-blue-500" />
            )}
          </div>
          <div className="text-gray-500 text-sm">
            @{post.user.username} · {moment(post.createdAt).fromNow()}
          </div>
        </div>
      </div>

      {!!post.content && (
        <div
          className="text-gray-800 text-sm whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: postWithHashtags }}
        />
      )}

      <div className="grid grid-cols-2 gap-2">
        {Array.isArray(post.image_urls) &&
          post.image_urls.map((img, index) => {
            const isSingle = post.image_urls.length === 1;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg ${
                  isSingle ? "col-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`Post image ${index + 1}`}
                  className={`w-full ${
                    isSingle ? "h-auto" : "h-48"
                  } object-cover
              motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out
              group-hover:scale-105`}
                />

                <div className="pointer-events-none absolute inset-0 bg-black/0 motion-safe:transition-colors motion-safe:duration-300 group-hover:bg-black/10" />
              </div>
            );
          })}
      </div>

      <div className="flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300">
        <div className="flex items-center gap-1">
          <Heart
            className={`w-4 h-4 cursor-pointer ${
              Array.isArray(likes) &&
              likes.includes(currentUser._id) &&
              "text-red-500 fill-red-500"
            }`}
            onClick={handleLike}
          />
          <span>{Array.isArray(likes) ? likes.length : 0}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          <span>12</span>
        </div>
        <div className="flex items-center gap-1">
          <Share2 className="w-4 h-4" />
          <span>7</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
