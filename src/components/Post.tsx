import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Post as PostType } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PostCard = ({ post }: { post: PostType }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showHeartOverlay, setShowHeartOverlay] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleDoubleTap = () => {
    if (!isLiked) {
      handleLike();
    }
    setShowHeartOverlay(true);
    setTimeout(() => setShowHeartOverlay(false), 800);
  };

  return (
    <article className="bg-background border rounded-2xl overflow-hidden mb-6 shadow-sm">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent p-0.5 overflow-hidden ring-2 ring-primary ring-offset-2">
            <img 
              src={post.user.avatar} 
              alt={post.user.username} 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <h3 className="font-bold text-sm leading-none">{post.user.displayName}</h3>
            <span className="text-xs text-muted-foreground">@{post.user.username}</span>
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div 
        className="relative aspect-square bg-muted flex items-center justify-center cursor-pointer group"
        onDoubleClick={handleDoubleTap}
      >
        {post.image && (
          <img 
            src={post.image} 
            alt="Post content" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        )}
        
        <AnimatePresence>
          {showHeartOverlay && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-24 h-24 text-white fill-white drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={handleLike}
              className={cn("transition-transform active:scale-125", isLiked ? "text-red-500" : "text-foreground hover:text-muted-foreground")}
            >
              <Heart className={cn("w-7 h-7", isLiked && "fill-current")} />
            </button>
            <button className="text-foreground hover:text-muted-foreground">
              <MessageCircle className="w-7 h-7" />
            </button>
            <button className="text-foreground hover:text-muted-foreground">
              <Send className="w-7 h-7" />
            </button>
          </div>
          <button className="text-foreground hover:text-muted-foreground">
            <Bookmark className="w-7 h-7" />
          </button>
        </div>

        <div className="space-y-2">
          <p className="font-bold text-sm">{likesCount.toLocaleString()} likes</p>
          <div className="text-sm">
            <span className="font-bold mr-2">{post.user.username}</span>
            <span className="text-muted-foreground whitespace-pre-wrap">{post.content}</span>
          </div>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all {post.comments} comments
          </button>
          <p className="text-[10px] uppercase text-muted-foreground tracking-wider pt-1">
            {post.createdAt}
          </p>
        </div>
      </div>
    </article>
  );
};