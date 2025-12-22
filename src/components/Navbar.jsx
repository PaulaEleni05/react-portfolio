

export default function Navbar({ activeSection }){
    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-6">
            {['intro', 'projects', 'contact'].map(section => (
                <div key={section} className="relative group flex items-center">
                  <button
                      onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
                      className={`w-3 h-10 rounded-full cursor-pointer transition-all duration-500 relative
                        ${activeSection === section 
                          ? 'bg-gradient-to-b from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 w-4 shadow-lg shadow-purple-500/50 dark:shadow-purple-400/50' 
                          : 'bg-purple-300/60 dark:bg-purple-800/60 hover:bg-purple-400 dark:hover:bg-purple-600 hover:w-4 hover:shadow-md hover:shadow-purple-400/30 dark:hover:shadow-purple-500/30'}`}
                  >
                  </button>
                  <span className={`ml-4 text-sm font-medium capitalize transition-all duration-300 whitespace-nowrap
                    ${activeSection === section 
                      ? 'text-purple-700 dark:text-purple-300 opacity-100 translate-x-0' 
                      : 'text-purple-600/70 dark:text-purple-400/70 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`}>
                    {section}
                  </span>
                </div>
            ))}
          </div>
        </nav>
    );
}