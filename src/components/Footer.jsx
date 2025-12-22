export default function Footer({toggleTheme, isDark}) {
    return (
        <footer className="py-12 sm:py-16 border-t-2 border-purple-200 dark:border-purple-900">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 <span className="text-purple-600 dark:text-purple-400 font-medium">Paula-Eleni Popovici</span>. All rights reserved.</div>
              <div className="text-xs text-purple-500 dark:text-purple-400">Built with React, Vite & Tailwind CSS </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group relative p-3 rounded-lg border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                aria-label="Toggle theme"
              >
                <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                {isDark ? (
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )} 
              </button>

              <a 
                href="#intro"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative p-3 rounded-lg border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                aria-label="Back to top"
              >
                <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 relative z-10 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
    )
};