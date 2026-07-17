'use client';

import { usePortalConversations, usePortalMessages, useSendMessage } from '@/hooks/usePortal';
import { useState } from 'react';
import { MessageSquare, Send, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function MessagesPage() {
  const { user } = useAuth();
  const { data: conversations, isLoading } = usePortalConversations();
  const [selectedConv, setSelectedConv] = useState<string | null>(null);
  const { data: messages } = usePortalMessages(selectedConv || '');
  const sendMessage = useSendMessage();
  const [newMessage, setNewMessage] = useState('');

  const convs = conversations || [];
  const msgs = messages || [];

  const handleSend = async () => {
    if (!newMessage.trim() || !selectedConv) return;
    sendMessage.mutate({ conversationId: selectedConv, content: newMessage.trim() });
    setNewMessage('');
  };

  if (selectedConv) {
    return (
      <div className="flex flex-col h-[calc(100vh-8rem)]">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => setSelectedConv(null)} className="p-2 rounded-lg hover:bg-gray-100"><ArrowLeft className="w-4 h-4" /></button>
          <h2 className="font-display font-semibold text-dark-900">Conversation</h2>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 mb-4">
          {msgs.map((m: any) => (
            <div key={m.id} className={`flex ${m.senderId === user?.id ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${m.senderId === user?.id ? 'bg-gold-500 text-dark-900' : 'bg-gray-100 text-dark-900'}`}>
                <p className="text-sm">{m.content}</p>
                <p className="text-xs opacity-60 mt-1">{new Date(m.createdAt).toLocaleTimeString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className="input flex-1" />
          <button onClick={handleSend} disabled={!newMessage.trim()} className="btn-primary px-4"><Send className="w-4 h-4" /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-dark-900">Messages</h1>
      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-white rounded-xl animate-pulse" />)}</div>
      ) : convs.length === 0 ? (
        <div className="card text-center py-12">
          <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No conversations yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {convs.map((c: any) => (
            <button key={c.id} onClick={() => setSelectedConv(c.id)} className="card w-full text-left flex items-center gap-3 hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-gold-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-dark-900 truncate">{c.title || 'Conversation'}</p>
                {c.lastMessage && <p className="text-xs text-gray-500 truncate">{c.lastMessage.content}</p>}
              </div>
              {c.lastMessage && <span className="text-xs text-gray-400 flex-shrink-0">{new Date(c.lastMessage.createdAt).toLocaleDateString()}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
