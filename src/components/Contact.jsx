export default function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32 ">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <a href="mailto:your.email@example.com" className="group flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 font-medium">
                    <span className="text-base sm:text-lg">paula.e.popovici@gmail.com</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-purple-600 dark:text-purple-400 font-mono font-semibold">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'GitHub', handle: '@PaulaEleni05', url: 'https://github.com/PaulaEleni05' },
                  { name: 'IADT', handle: '@PaulaEleni', url: '#' },
                  { name: 'HubSpot', handle: '@PaulaEleni', url: '#' },
                  { name: 'LinkedIn', handle: 'Paula-Eleni Popovici', url: 'https://www.linkedin.com/in/paula-eleni-popovici-uiux-designer' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border-2 border-purple-200 dark:border-purple-800 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:-translate-y-1"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-purple-500 dark:group-hover:text-purple-400">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
    );
}