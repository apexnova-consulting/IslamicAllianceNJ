'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminRefreshPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRefresh = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/revalidate?secret=islamic-alliance-2024', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: '/about',
        }),
      });

      if (response.ok) {
        setMessage('✅ Website refreshed successfully! Your changes should appear now.');
      } else {
        setMessage('❌ Error refreshing. Please try again or wait a few minutes.');
      }
    } catch {
      setMessage('❌ Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshAll = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/revalidate?secret=islamic-alliance-2024', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        setMessage('✅ All pages refreshed successfully!');
      } else {
        setMessage('❌ Error refreshing. Please try again.');
      }
    } catch {
      setMessage('❌ Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-dark via-navy to-primary p-4">
      <div className="glass-card p-8 md:p-12 max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-block glass px-6 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-gold">Admin Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Refresh Website</span>
          </h1>
          <p className="text-lg text-foreground/80">
            After making changes in Sanity CMS, click the button below to refresh your website and see your updates.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={handleRefresh}
            disabled={loading}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white shadow-glow"
          >
            {loading ? 'Refreshing...' : '🔄 Refresh About Page'}
          </Button>

          <Button
            onClick={handleRefreshAll}
            disabled={loading}
            size="lg"
            variant="outline"
            className="w-full glass-hover"
          >
            {loading ? 'Refreshing...' : '🌐 Refresh All Pages'}
          </Button>
        </div>

        {message && (
          <div className={`mt-6 p-4 rounded-lg ${
            message.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <p className="font-medium">{message}</p>
            {message.includes('✅') && (
              <p className="text-sm mt-2">
                <a 
                  href="/about" 
                  className="underline hover:no-underline"
                  target="_blank"
                >
                  Click here to view the About page
                </a>
              </p>
            )}
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-white/20">
          <h3 className="text-lg font-semibold mb-2">📋 How to Use</h3>
          <ol className="text-left space-y-2 text-foreground/80">
            <li>1. Make changes in <Link href="/studio" className="text-accent underline">Sanity Studio</Link></li>
            <li>2. Click &quot;Publish&quot; in Sanity</li>
            <li>3. Return here and click &quot;Refresh About Page&quot;</li>
            <li>4. Wait 5-10 seconds, then check your website</li>
          </ol>
        </div>

        <div className="mt-8">
          <p className="text-sm text-foreground/60">
            💡 Bookmark this page for easy access:{' '}
            <code className="bg-black/20 px-2 py-1 rounded">
              /admin-refresh
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

