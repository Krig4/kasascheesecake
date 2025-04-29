'use client';

import React, { useState } from 'react';
import Flag from 'react-world-flags';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(false);

  const switchToSpanish = () => {
    setIsEnglish(false);
    router.push('/es');
  };

  const switchToEnglish = () => {
    setIsEnglish(true);
    router.push('/en');
  };

  return (
    <div className="flex items-center space-x-3">
      {/* España (España) */}
      <button onClick={switchToSpanish} className="flex items-center">
        <Flag code="ES" alt="Spain" className="w-6 h-6 rounded-full border border-white" />
      </button>

      {/* UK (Inglaterra) */}
      <button onClick={switchToEnglish} className="flex items-center">
        <Flag code="GB" alt="United Kingdom" className="w-6 h-6 rounded-full border border-white" />
      </button>

      {/* Optional: Display text or additional UI based on the language */}
      <span className="ml-2">{isEnglish ? 'EN' : 'ES'}</span>
    </div>
  );
};

export default LanguageSwitcher;
