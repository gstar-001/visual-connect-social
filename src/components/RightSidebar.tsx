import React from 'react';
import { User } from '../types';
import { Search, TrendingUp } from 'lucide-react';

export const RightSidebar = ({ suggestions }: { suggestions: User[] }) => {
  return (
    <div className="w-[320px] hidden lg:block py-6 px-4 space-y-8 sticky top-0 h-screen overflow-y-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-accent/50 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 ring-primary/20 transition-all text-sm"
        />
      </div>

      <div className="bg-accent/30 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-bold">Trending Topics</h3>
        </div>
        <div className="space-y-4">
          {['#ReactJS', '#VibeApp', '#DesignSystem', '#WebDev', '#Architecture'].map((tag) => (
            <div key={tag} className="group cursor-pointer">
              <p className="font-bold text-sm hover:underline">{tag}</p>
              <p className="text-xs text-muted-foreground">2.4k posts</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-muted-foreground">Suggestions for you</h3>
          <button className="text-xs font-bold text-primary hover:underline">See All</button>
        </div>
        <div className="space-y-4">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <img src={user.avatar} className="w-9 h-9 rounded-full object-cover" alt={user.username} />
                <div>
                  <p className="text-sm font-bold leading-none group-hover:underline cursor-pointer">{user.username}</p>
                  <p className="text-xs text-muted-foreground">Suggested for you</p>
                </div>
              </div>
              <button className="text-xs font-bold text-primary hover:text-primary/80">Follow</button>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-[10px] text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 uppercase tracking-widest pt-4">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Press</a>
        <a href="#" className="hover:underline">API</a>
        <a href="#" className="hover:underline">Jobs</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <p className="mt-4 w-full">© 2024 VIBE FROM FUTURE</p>
      </footer>
    </div>
  );
};