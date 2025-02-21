'use client';
import { useEffect } from 'react';
import { trackViewContent } from '@/utils/fbConversion';

export default function PageViewTracker() {
  useEffect(() => {
    trackViewContent('Cold Email Service', 'Service');
  }, []);

  return null;
}
