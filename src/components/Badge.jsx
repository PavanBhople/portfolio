// src/components/Badge.jsx
import React from 'react';

export default function Badge({ children, highlighted }) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs border ${
        highlighted
          ? 'bg-purple-600 text-white border-purple-500'
          : 'border-gray-700 text-gray-300'
      }`}
    >
      {children}
    </span>
  );
}
