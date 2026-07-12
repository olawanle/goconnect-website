"use client";

import React from 'react';

export default function ServiceIcon3D({ type }: { type: "ai" | "web" | "consulting" }) {
    // 2D Fallback icons for better performance on mobile
    if (type === 'ai') {
        return (
            <div className="w-16 h-16 flex items-center justify-center bg-pink-500/10 rounded-2xl border border-pink-500/20 text-4xl">
                🤖
            </div>
        );
    }

    if (type === 'web') {
        return (
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-2xl border border-blue-500/20 text-4xl">
                💻
            </div>
        );
    }

    if (type === 'consulting') {
        return (
            <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 rounded-2xl border border-purple-500/20 text-4xl">
                💡
            </div>
        );
    }

    return null;
}
