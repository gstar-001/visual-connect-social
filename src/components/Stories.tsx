import React from 'react';
import { Story } from '../types';
import { Plus } from 'lucide-react';

export const Stories = ({ stories, currentUserAvatar }: { stories: Story[], currentUserAvatar: string }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 px-1 no-scrollbar scroll-smooth">
      <div className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer">
        <div className="relative">
          <div className="w-16 h-16 rounded-full p-0.5 bg-accent ring-2 ring-transparent ring-offset-2 overflow-hidden">
            <img src={currentUserAvatar} alt="Your story" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full border-2 border-background">
            <Plus className="w-3 h-3" />
          </div>
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">Your Story</span>
      </div>

      {stories.map((story) => (
        <div key={story.id} className="flex-shrink-0 flex flex-col items-center gap-1 cursor-pointer group">
          <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 ring-2 ring-transparent ring-offset-2 overflow-hidden transition-transform group-active:scale-95">
            <div className="w-full h-full border-2 border-background rounded-full overflow-hidden">
              <img src={story.user.avatar} alt={story.user.username} className="w-full h-full object-cover" />
            </div>
          </div>
          <span className="text-[10px] font-medium text-muted-foreground truncate w-16 text-center">
            {story.user.username}
          </span>
        </div>
      ))}
    </div>
  );
};