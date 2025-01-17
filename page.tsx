import { Github } from 'lucide-react'
import React, { useState } from 'react';

export default function PersonalSite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`
      min-h-screen transition-all duration-300 ease-in-out
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#fafafa] text-[#171717]'}
    `}>
      <div className="max-w-2xl mx-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <h1 className={`text-[32px] ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>Hi, I'm Meg.</h1>
          <button 
            onClick={toggleTheme}
            className="hover:opacity-80 transition-opacity mt-2"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM21.1239 19.0353L21.4717 18.5161L20.4332 17.8204L20.0854 18.3397C18.9402 20.0492 16.9927 21.1725 14.7831 21.1725C12.5777 21.1725 10.6334 20.0534 9.48738 18.3493L9.13861 17.8307L8.10134 18.5282L8.45012 19.0468C9.81847 21.0816 12.1441 22.4225 14.7831 22.4225C17.4272 22.4225 19.7566 21.0766 21.1239 19.0353ZM12.8438 11.4219C12.8438 12.7594 11.7594 13.8438 10.4219 13.8438C9.08431 13.8438 8 12.7594 8 11.4219C8 10.0843 9.08431 9 10.4219 9C11.7594 9 12.8438 10.0843 12.8438 11.4219ZM19.1406 13.8438C20.4782 13.8438 21.5625 12.7594 21.5625 11.4219C21.5625 10.0843 20.4782 9 19.1406 9C17.8031 9 16.7188 10.0843 16.7188 11.4219C16.7188 12.7594 17.8031 13.8438 19.1406 13.8438Z" fill="white"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M29.5 15.5C29.5 23.232 23.232 29.5 15.5 29.5C7.76801 29.5 1.5 23.232 1.5 15.5C1.5 7.76801 7.76801 1.5 15.5 1.5C23.232 1.5 29.5 7.76801 29.5 15.5ZM31 15.5C31 24.0604 24.0604 31 15.5 31C6.93959 31 0 24.0604 0 15.5C0 6.93959 6.93959 0 15.5 0C24.0604 0 31 6.93959 31 15.5ZM21.8426 20.6916L22.1905 20.1723L21.1519 19.4767L20.8041 19.9959C19.6589 21.7055 17.7115 22.8288 15.5019 22.8288C13.2965 22.8288 11.3522 21.7097 10.2061 20.0055L9.85736 19.4869L8.82009 20.1845L9.16887 20.7031C10.5372 22.7379 12.8628 24.0788 15.5019 24.0788C18.1459 24.0788 20.4753 22.7328 21.8426 20.6916ZM13.5625 13.0781C13.5625 14.4157 12.4782 15.5 11.1406 15.5C9.80306 15.5 8.71875 14.4157 8.71875 13.0781C8.71875 11.7406 9.80306 10.6562 11.1406 10.6562C12.4782 10.6562 13.5625 11.7406 13.5625 13.0781ZM19.8594 15.5C21.1969 15.5 22.2812 14.4157 22.2812 13.0781C22.2812 11.7406 21.1969 10.6562 19.8594 10.6562C18.5218 10.6562 17.4375 11.7406 17.4375 13.0781C17.4375 14.4157 18.5218 15.5 19.8594 15.5Z" 
                  fill="#171717"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Bio sections */}
        <p className={`mb-6 text-[15px] leading-relaxed ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>
          I'm a designer with a strong background in strategy and shaping product narratives. I
          like to make things for people who also like to make things.
        </p>

        <p className={`mb-20 text-[15px] leading-relaxed ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>
          I'm currently in Orange County but I'm a born and raised Texan. I'm a serial <span className="italic">mediocre</span>{' '}
          hobbyist—most recently knitting, linocutting prints, and weight lifting.
        </p>

        {/* Work section */}
        <h2 className={`text-[15px] mb-8 ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>work</h2>

        <div className="space-y-8 mb-20">
          {/* Current role */}
          <div className="flex gap-6">
            <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 shrink-0">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M10 0L20 17.5H0L10 0Z" 
                fill={isDarkMode ? "white" : "#171717"}
                
              />
            </svg>
            <div>
              <div className="flex gap-2 mb-2">
                <h3 className={`text-[15px] ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>Staff Designer, Vercel</h3>
                <span className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>2021-present</span>
              </div>
              <p className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>
                Currently working as a Staff Designer specializing in UX
                strategy, product vision work, and language systems.
              </p>
            </div>
          </div>

          {/* GitHub Senior Content Designer */}
          <div className="flex gap-6">
            <Github className={`w-4 h-4 mt-1 shrink-0 ${isDarkMode ? 'text-white' : 'text-[#171717]'} `} />
            <div>
              <div className="flex gap-2 mb-2">
                <h3 className={`text-[15px] ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>Senior Content Designer, GitHub</h3>
                <span className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>2019-2021</span>
              </div>
              <p className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>
                As a Senior Content Designer, I'm was responsible for shaping
                the overall user experience, primarily for GitHub Docs + Primer
              </p>
            </div>
          </div>

          {/* GitHub Staff Writer */}
          <div className="flex gap-6">
            <Github className={`w-4 h-4 mt-1 shrink-0 ${isDarkMode ? 'text-white' : 'text-[#171717]'} `} />
            <div>
              <div className="flex gap-2 mb-2">
                <h3 className={`text-[15px] ${isDarkMode ? 'text-white' : 'text-[#171717]'} `}>Staff Content Writer, GitHub</h3>
                <span className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>2017-2019</span>
              </div>
              <p className={`text-[15px] ${isDarkMode ? 'text-gray-400' : 'text-[#737373]'} `}>
                I had the privilege of joining GitHub early on and learning UX
                workflows by documenting them for technical accuracy.
              </p>
            </div>
          </div>
        </div>

    

      </div>
    </div>
  )
}

