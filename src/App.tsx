import React, { useState } from 'react';
import { Sidebar, BottomNav } from './components/Navigation';
import { PostCard } from './components/Post';
import { Stories } from './components/Stories';
import { RightSidebar } from './components/RightSidebar';
import { CreatePost } from './components/CreatePost';
import { Profile } from './components/Profile';
import { mockPosts, currentUser, stories, users } from './data/mockData';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="max-w-xl mx-auto py-6 px-4">
            <Stories stories={stories} currentUserAvatar={currentUser.avatar} />
            <div className="mt-6 space-y-4">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        );
      case 'profile':
        return <Profile user={currentUser} posts={mockPosts.filter(p => p.userId === 'me')} />;
      case 'search':
        return (
          <div className="p-8 text-center text-muted-foreground">
            <h2 className="text-xl font-bold mb-2">Explore content</h2>
            <p>Discover new trends and creators.</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="p-8 text-center text-muted-foreground">
            <h2 className="text-xl font-bold mb-2">No new notifications</h2>
            <p>We'll notify you when something happens.</p>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-[50vh] text-muted-foreground">
            Coming Soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Toaster position="top-center" richColors />
      
      <Sidebar 
        currentTab={activeTab} 
        onTabChange={setActiveTab} 
        onOpenCreate={() => setIsCreateOpen(true)}
      />

      <main className="xl:pl-64 lg:pr-[320px] pb-20 xl:pb-0 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <RightSidebar suggestions={users} />
      
      <BottomNav 
        currentTab={activeTab} 
        onTabChange={setActiveTab}
        onOpenCreate={() => setIsCreateOpen(true)}
      />

      <CreatePost 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
        user={currentUser} 
      />
    </div>
  );
};

export default App;