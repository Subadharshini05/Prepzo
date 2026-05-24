/**
 * ResumeUpload Component
 * Modern drag-and-drop resume upload interface
 */

import React, { useState, useRef } from 'react';

const ResumeUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedResume, setUploadedResume] = useState({
    name: 'John_Doe_Resume.pdf',
    size: '245 KB',
    uploadedAt: 'Nov 22, 2024',
    score: 82,
  });
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Simulate resume data update
          setTimeout(() => {
            setUploadedResume({
              name: file.name,
              size: (file.size / 1024).toFixed(0) + ' KB',
              uploadedAt: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }),
              score: 78,
            });
          }, 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);
  };

  const resetUpload = () => {
    setUploadProgress(0);
    setIsUploading(false);
    setShowPreview(false);
    setIsAnalyzing(false);
    setUploadedResume(null);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setUploadedResume((prev) => (prev ? { ...prev, score: Math.min(prev.score + 4, 95) } : prev));
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative rounded-2xl border-2 border-dashed transition-all duration-300 p-8 cursor-pointer group ${
          isDragging
            ? 'border-green-500/50 bg-green-500/5'
            : 'border-gray-700/50 bg-gray-800/20 hover:border-green-500/30 hover:bg-green-500/5'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />

        {!isUploading ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 mb-4 group-hover:from-green-500/30 group-hover:to-green-600/20 transition-all">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Drop your resume here</h3>
            <p className="text-gray-400 text-sm mb-3">or click to browse from your computer</p>
            <p className="text-xs text-gray-500">PDF files only • Max 10 MB</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 mb-4">
              <svg className="w-8 h-8 text-green-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Uploading resume...</h3>
            <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400">{Math.round(uploadProgress)}% uploaded</p>
          </div>
        )}
      </div>

      {/* Uploaded Resume Card */}
      {uploadedResume && !isUploading && (
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-6 space-y-4">
          {/* Resume Info */}
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.5 3.5a.5.5 0 11-1 0 .5.5 0 011 0zM14.5 3.5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v2H7V5zm0 3h6v2H7V8zm0 3h6v2H7v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">{uploadedResume.name}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  {uploadedResume.size} • Uploaded {uploadedResume.uploadedAt}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30">
                <span className="font-bold text-green-400">{uploadedResume.score}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Resume Score</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2 border-t border-gray-700/30">
            <button
              onClick={() => setShowPreview((prev) => !prev)}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/10 hover:from-green-500/40 hover:to-green-600/20 border border-green-500/30 hover:border-green-500/50 text-green-300 hover:text-green-200 rounded-lg font-medium text-sm transition-all"
            >
              👁️ Preview
            </button>
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/10 hover:from-blue-500/40 hover:to-blue-600/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-300 hover:text-blue-200 rounded-lg font-medium text-sm transition-all disabled:opacity-60"
            >
              {isAnalyzing ? '⏳ Analyzing...' : '🔍 Analyze'}
            </button>
            <button
              onClick={resetUpload}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/10 hover:from-red-500/40 hover:to-red-600/20 border border-red-500/30 hover:border-red-500/50 text-red-300 hover:text-red-200 rounded-lg font-medium text-sm transition-all"
            >
              🔄 Replace
            </button>
          </div>
        </div>
      )}

      {/* Preview Panel */}
      {showPreview && uploadedResume && !isUploading && (
        <div className="rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-5">
          <h4 className="text-sm font-semibold text-white mb-2">Resume Preview (Static)</h4>
          <p className="text-sm text-gray-300">File: {uploadedResume.name}</p>
          <p className="text-xs text-gray-400 mt-2">
            This is a mock preview state for MVP interaction. Use this to validate upload and navigation flow.
          </p>
        </div>
      )}

      {/* Resume Status */}
      {uploadedResume && !isUploading && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-4">
            <p className="text-xs text-gray-400 mb-2">READABILITY SCORE</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-green-400">92%</span>
              <span className="text-xs text-green-400">↑ Excellent</span>
            </div>
          </div>
          <div className="rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-4">
            <p className="text-xs text-gray-400 mb-2">ATS COMPATIBILITY</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-blue-400">85%</span>
              <span className="text-xs text-blue-400">↑ Good</span>
            </div>
          </div>
          <div className="rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur p-4">
            <p className="text-xs text-gray-400 mb-2">PROFESSIONAL SCORE</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-purple-400">76%</span>
              <span className="text-xs text-yellow-400">→ Average</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;
