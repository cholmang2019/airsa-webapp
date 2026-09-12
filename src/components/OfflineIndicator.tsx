import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600/95 backdrop-blur-md px-4 py-2.5 text-xs font-semibold text-white shadow-2xl border border-amber-400/30 transition-all duration-300 animate-bounce"
      dir="rtl"
    >
      <WifiOff className="w-4 h-4 text-amber-200 flex-shrink-0" />
      <span>حالت آفلاین — محتوا از حافظه کش بارگذاری می‌شود.</span>
    </div>
  );
};
