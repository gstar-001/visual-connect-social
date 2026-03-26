import React from 'react';
import { User, Post } from '../types';
import { Settings, Grid, Bookmark, Tag, MapPin, Link as LinkIcon, Calendar, Heart } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Profile = ({ user, posts }: { user: User, posts: Post[] }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-12">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 ring-4 ring-offset-4 ring-background">
          <img src={user.avatar} alt={user.displayName} className="w-full h-full object-cover rounded-full border-4 border-background" />
        </div>
        
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-2xl font-light tracking-tight">{user.username}</h2>
            <div className="flex gap-2 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Edit Profile
              </button>
              <button className="bg-accent text-accent-foreground p-1.5 rounded-lg hover:bg-accent/80 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">{posts.length}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wide">posts</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">{user.followers.toLocaleString()}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wide">followers</span>
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold block text-lg">{user.following.toLocaleString()}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wide">following</span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="font-bold">{user.displayName}</h1>
            <p className="text-sm whitespace-pre-wrap">{user.bio}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-muted-foreground text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
              <span className="flex items-center gap-1 text-primary"><LinkIcon className="w-4 h-4" /> vibe.app/alex</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Joined June 2021</span>
            </div>
          </div>
        </div>
      </header>

      <div className="border-t">
        <div className="flex justify-center gap-12 -mt-px">
          <button className="flex items-center gap-2 py-4 border-t-2 border-foreground font-bold text-xs uppercase tracking-widest">
            <Grid className="w-4 h-4" /> Posts
          </button>
          <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-muted-foreground hover:text-foreground font-bold text-xs uppercase tracking-widest">
            <Bookmark className="w-4 h-4" /> Saved
          </button>
          <button className="flex items-center gap-2 py-4 border-t-2 border-transparent text-muted-foreground hover:text-foreground font-bold text-xs uppercase tracking-widest">
            <Tag className="w-4 h-4" /> Tagged
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-4 mt-4">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square group cursor-pointer overflow-hidden rounded-md md:rounded-xl">
              <img src={post.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                <span className="flex items-center gap-1"><Heart className="w-5 h-5 fill-current" /> {post.likes}</span>
                <span className="flex items-center gap-1"><Grid className="w-5 h-5" /> {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};