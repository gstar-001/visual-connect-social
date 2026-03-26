import React from 'react';
import { 
  Home, 
  Search, 
  PlusSquare, 
  Heart, 
  User, 
  Compass, 
  MessageCircle, 
  Menu,
  Bell
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: number;
}

const NavItem = ({ icon: Icon, label, active, onClick, badge }: NavItemProps) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 group",
      active ? "bg-primary/10 text-primary font-bold" : "hover:bg-accent text-muted-foreground hover:text-foreground"
    )}
  >
    <div className="relative">
      <Icon className={cn("w-6 h-6 transition-transform group-hover:scale-110", active && "stroke-[2.5px]")} />
      {badge && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-background">
          {badge}
        </span>
      )}
    </div>
    <span className="hidden xl:block text-lg">{label}</span>
  </button>
);

export const Sidebar = ({ 
  currentTab, 
  onTabChange, 
  onOpenCreate 
}: { 
  currentTab: string; 
  onTabChange: (tab: string) => void;
  onOpenCreate: () => void;
}) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] xl:w-64 border-r bg-background flex flex-col p-4 z-50">
      <div className="px-3 mb-8">
        <h1 className="text-2xl font-black tracking-tighter xl:block hidden bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent">
          VIBE.
        </h1>
        <div className="xl:hidden w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl">
          V
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        <NavItem 
          icon={Home} 
          label="Home" 
          active={currentTab === 'feed'} 
          onClick={() => onTabChange('feed')} 
        />
        <NavItem 
          icon={Search} 
          label="Search" 
          active={currentTab === 'search'} 
          onClick={() => onTabChange('search')} 
        />
        <NavItem 
          icon={Compass} 
          label="Explore" 
          active={currentTab === 'explore'} 
          onClick={() => onTabChange('explore')} 
        />
        <NavItem 
          icon={MessageCircle} 
          label="Messages" 
          active={currentTab === 'messages'} 
          onClick={() => onTabChange('messages')} 
          badge={3}
        />
        <NavItem 
          icon={Bell} 
          label="Notifications" 
          active={currentTab === 'notifications'} 
          onClick={() => onTabChange('notifications')} 
          badge={5}
        />
        <NavItem 
          icon={PlusSquare} 
          label="Create" 
          onClick={onOpenCreate} 
        />
        <NavItem 
          icon={User} 
          label="Profile" 
          active={currentTab === 'profile'} 
          onClick={() => onTabChange('profile')} 
        />
      </nav>

      <div className="mt-auto">
        <NavItem icon={Menu} label="More" />
      </div>
    </aside>
  );
};

export const BottomNav = ({ 
  currentTab, 
  onTabChange,
  onOpenCreate 
}: { 
  currentTab: string; 
  onTabChange: (tab: string) => void;
  onOpenCreate: () => void;
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-t flex items-center justify-around px-4 xl:hidden z-50">
      <button onClick={() => onTabChange('feed')} className={cn("p-2", currentTab === 'feed' ? "text-primary" : "text-muted-foreground")}>
        <Home className="w-6 h-6" />
      </button>
      <button onClick={() => onTabChange('search')} className={cn("p-2", currentTab === 'search' ? "text-primary" : "text-muted-foreground")}>
        <Search className="w-6 h-6" />
      </button>
      <button onClick={onOpenCreate} className="p-2 text-foreground">
        <PlusSquare className="w-6 h-6" />
      </button>
      <button onClick={() => onTabChange('notifications')} className={cn("p-2 relative", currentTab === 'notifications' ? "text-primary" : "text-muted-foreground")}>
        <Heart className="w-6 h-6" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
      </button>
      <button onClick={() => onTabChange('profile')} className={cn("p-2", currentTab === 'profile' ? "text-primary" : "text-muted-foreground")}>
        <User className="w-6 h-6" />
      </button>
    </nav>
  );
};