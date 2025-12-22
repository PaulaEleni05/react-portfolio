export default function Intro(){
    return(
        <header id="intro" className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-purple-600 dark:text-purple-400 tracking-wider font-semibold animate-fade-in">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight group cursor-default">
                  <span className="inline-block animate-slide-up relative">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x font-medium">
                      Paula-Eleni
                    </span>
                  </span>
                  <br />
                  <span className="inline-block animate-slide-up-delay text-muted-foreground hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-500">Popovici</span>
                </h1>
              </div>

                 <div className="space-y-6 max-w-md animate-fade-in-delay">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Aspiring <span className="text-purple-600 dark:text-purple-400 font-medium">UI/UX Designer</span> and 
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> Creative Computing</span> student exploring the intersection of 
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> design</span>, 
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> technology</span>, and 
                  <span className="text-purple-600 dark:text-purple-400 font-medium"> creative innovation</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                    Available for work
                  </div>
                  <div>Ireland</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4 animate-fade-in">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-mono font-semibold">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground font-medium">Student</div>
                  <div className="text-muted-foreground">@ IADT</div>
                  <div className="text-xs text-muted-foreground">2023 — Present</div>
                </div>
              </div>

              <div className="space-y-4 animate-fade-in-delay">
                <div className="text-sm text-purple-600 dark:text-purple-400 font-mono font-semibold">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border-2 border-purple-200 dark:border-purple-800 rounded-full hover:border-purple-500 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <style>{`
            @keyframes gradient-x {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }

            @keyframes slide-up {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes fade-in {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .animate-gradient-x {
              animation: gradient-x 3s ease infinite;
            }

            .animate-slide-up {
              animation: slide-up 0.8s ease-out forwards;
            }

            .animate-slide-up-delay {
              animation: slide-up 0.8s ease-out 0.2s forwards;
              opacity: 0;
            }

            .animate-fade-in {
              animation: fade-in 1s ease-out 0.4s forwards;
              opacity: 0;
            }

            .animate-fade-in-delay {
              animation: fade-in 1s ease-out 0.6s forwards;
              opacity: 0;
            }
          `}</style>
        </header>
    );
}