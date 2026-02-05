import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'BASICS', href: '#f1-basics', num: '01' },
  { label: 'CIRCUIT', href: '#circuit', num: '02' },
  { label: 'TEAMS', href: '#teams-drivers', num: '03' },
  { label: 'SCHEDULE', href: '#schedule', num: '04' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-racing-black/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className={`transition-all duration-500 ${isScrolled ? 'border-b border-white/5' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex items-center justify-between h-16 md:h-20">
              <motion.a
                href="#"
                className="flex items-center gap-3 group"
                whileHover={{ scale: 1.02 }}
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-f1-red flex items-center justify-center group-hover:bg-f1-red-bright transition-colors">
                    <span className="font-display text-white text-lg">F1</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-f1-red/50 group-hover:border-f1-red transition-colors" />
                </div>
                <div className="hidden sm:block">
                  <span className="font-display text-lg text-chrome-light tracking-wide">
                    SHANGHAI
                  </span>
                  <span className="font-mono text-[10px] text-chrome/40 ml-2">2026</span>
                </div>
              </motion.a>

              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-6 py-2"
                    whileHover={{ y: -1 }}
                  >
                    <span className="font-mono text-[10px] text-chrome/30 absolute -top-1 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.num}
                    </span>
                    <span className="font-display text-sm text-chrome/60 group-hover:text-chrome-light tracking-wider transition-colors">
                      {item.label}
                    </span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-px bg-f1-red group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>

              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative w-6 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="block w-full h-[2px] bg-chrome-light origin-center"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-full h-[2px] bg-chrome-light"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="block w-full h-[2px] bg-chrome-light origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-racing-black/98 pt-20 md:hidden"
          >
            <div className="absolute inset-0 diagonal-stripe opacity-30" />
            
            <div className="relative flex flex-col items-center justify-center h-full gap-8 -mt-20">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative"
                >
                  <span className="font-mono text-xs text-f1-red absolute -left-8 top-1/2 -translate-y-1/2">
                    {item.num}
                  </span>
                  <span className="font-display text-5xl text-chrome-light group-hover:text-f1-red transition-colors tracking-wide">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-f1-red group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <span className="font-mono text-xs text-chrome/30 tracking-widest">
                SHANGHAI GRAND PRIX 2026
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
