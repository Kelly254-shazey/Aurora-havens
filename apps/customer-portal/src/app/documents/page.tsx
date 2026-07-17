'use client';

import { usePortalDocuments } from '@/hooks/usePortal';
import { FileText, Download, Upload, Eye } from 'lucide-react';

export default function DocumentsPage() {
  const { data: documents, isLoading } = usePortalDocuments();
  const docs = documents || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-dark-900">Documents</h1>
        <button className="btn-primary text-sm"><Upload className="w-4 h-4" /> Upload</button>
      </div>

      {isLoading ? (
        <div className="space-y-3">{[...Array(3)].map((_, i) => <div key={i} className="h-20 bg-white rounded-xl animate-pulse" />)}</div>
      ) : docs.length === 0 ? (
        <div className="card text-center py-12">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No documents yet</p>
        </div>
      ) : (
        <div className="space-y-2">
          {docs.map((doc: any) => (
            <div key={doc.id} className="card flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-dark-900 truncate">{doc.filename}</p>
                <p className="text-xs text-gray-500">{doc.mimeType} • {(doc.fileSize / 1024).toFixed(1)} KB • {new Date(doc.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="View"><Eye className="w-4 h-4 text-gray-400" /></button>
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Download"><Download className="w-4 h-4 text-gray-400" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
