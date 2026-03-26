import React, { useState } from 'react';
import { X, Image as ImageIcon, MapPin, Smile, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from '../types';
import { toast } from 'sonner';

export const CreatePost = ({ 
  isOpen, 
  onClose, 
  user 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  user: User;
}) => {
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;
    toast.success('Post shared successfully!');
    setContent('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-background border rounded-2xl shadow-2xl z-[70] overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold">Create new post</h2>
              <button onClick={onClose} className="p-1 hover:bg-accent rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="flex gap-4">
                <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt={user.displayName} />
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-sm leading-none">{user.displayName}</span>
                    <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:bg-accent w-fit px-1.5 py-0.5 rounded border">
                      <Globe className="w-3 h-3" /> Public
                    </button>
                  </div>
                  <textarea
                    autoFocus
                    placeholder="What's on your mind?"
                    className="w-full bg-transparent border-none resize-none focus:ring-0 text-lg min-h-[120px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex gap-2">
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                    <MapPin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                </div>
                <button
                  disabled={!content.trim()}
                  onClick={handlePost}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  Share
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};